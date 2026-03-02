// module that facilitates inter-session (tab) communication using BroadcastChannel API

import { debounce, randomId } from "@sv443-network/coreutils";
import { forceEmitSiteEvent, siteEvents } from "../siteEvents.js";
import { getFeature } from "../config.js";
import { getSerializerStoresFull } from "../serializers.js";
import { log, warn } from "./logging.js";

//#region vars

/** Random ID used to identify the sender of packets emitted through the BroadcastChannel, and to determine which packets should be received based on the `to` field of the transmitted packets. */
export const broadcastTxID = randomId(16, 36);

// #region types

/** The type of packet sent through the BroadcastChannel. */
export type BroadcastPacketType =
  // whenever any DataStore's data is changed, to trigger updates in other sessions
  | "dataStoreUpdate"

  // called to make other sessions reply with an empty `collectSessionsReply`, in order to collect a list of all open sessions
  | "collectSessions"
  // reply to a "collectSessions" packet
  | "collectSessionsReply"

  // reserved for custom, non-standard BYTM packets
  | "custom";

/** Maps a {@linkcode BroadcastPacketType} to the type of data it should contain. */
export type BroadcastPacketDataMap = {
  dataStoreUpdate: {
    /** The ID of the DataStore that was updated. */
    id: string;
  };
  collectSessions: void;
  collectSessionsReply: void;
  custom: {
    /** Identifies the custom packet, used to determine how to handle it when received. */
    name: string;
  } & Record<string, any>; // allow custom packets to contain any additional data they need
};

/** Raw object type of the packets sent through the BroadcastChannel. */
export type BroadcastPacket<TPacketType extends BroadcastPacketType = BroadcastPacketType> = {
  /** Used to determine how to handle the packet when received. */
  type: TPacketType;
} & (
  BroadcastPacketDataMap[TPacketType] extends void
    ? {}
    : {
      /** The actual data of the packet, its structure depends on the {@linkcode BroadcastPacketType}. */
      data: BroadcastPacketDataMap[TPacketType];
    }
);

/** Object type of the packets sent through the BroadcastChannel, including metadata about the sender and intended recipients. */
export type BroadcastTransitPacket<TPacketType extends BroadcastPacketType = BroadcastPacketType> = {
  /** Session ID of the sender. */
  from: string;
  /** Indicates which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions. */
  to?: string[];
  /** The actual packet to be sent. */
  packet: BroadcastPacket<TPacketType>;
};

/**
 * [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) instance used for inter-session communication in BYTM.  
 * The channel name is "bytm-broadcast".  
 * Use the {@linkcode BroadcastPacket} type for the packets sent through this channel.
 */
export const broadcastChannel = new BroadcastChannel("bytm-broadcast");

//#region init

/** Initializes the broadcast module by setting up the necessary event listeners. */
export function initBroadcast() {
  broadcastChannel.addEventListener("message", handleBroadcastMessage);

  // broadcast DataStore data update packets:
  getSerializerStoresFull().forEach(store => {
    store.on("updateData", debounce(() => {
      emitBroadcast({
        type: "dataStoreUpdate",
        data: {
          id: store.id,
        },
      });

      getFeature("logEvents") && log(`Emitted broadcast packet for updated DataStore with ID "${store.id}"`);
    }, 100));
  });

  // receive and handle broadcast packets:
  siteEvents.on("broadcast", handleBroadcastPacket);
}

/** Called to parse and handle received broadcast packets. */
async function handleBroadcastPacket(type: BroadcastPacketType, { from, to, packet }: BroadcastTransitPacket) {
  // ignore own sent packets:
  if(from === broadcastTxID)
    return;

  // ignore packets not intended for this session:
  if(Array.isArray(to) && !to.includes(broadcastTxID))
    return;

  switch(type) {
  // update local DataStore data when a "dataStoreUpdate" packet is received:
  case "dataStoreUpdate": {
    const data = packet.data as BroadcastPacketDataMap["dataStoreUpdate"];
    try {
      await getSerializerStoresFull()
        .find(s => s.id === data.id)
        ?.loadData();

      getFeature("logEvents") && log(`Received "dataStoreUpdate" packet for DataStore with ID "${data.id}", reloaded data for that store`);
    }
    catch(err) {
      log(`Error while handling "dataStoreUpdate" packet for DataStore with ID "${data.id}":`, err);
    }

    break;
  }
  // reply to "collectSessions" packets with a "collectSessionsReply" packet:
  case "collectSessions":
    emitBroadcast({ type: "collectSessionsReply" }, [from]);
    getFeature("logEvents") && log(`Replied to "collectSessions" packet from session "${from}" with this session's TxID "${broadcastTxID}"`);
    break;
  }
}

//#region emit

/**
 * Emits a packet through BYTM's [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) instance to all other sessions that might be open, or only to specific sessions if the `to` parameter is provided.  
 * The packet will be wrapped in a {@linkcode BroadcastTransitPacket} that includes metadata about the sender and intended recipients.  
 * @param packet The actual packet to be sent, without the metadata. Use the {@linkcode BroadcastPacket} type for this parameter.
 * @param to Optional array of TxIDs to specify which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
 */
export function emitBroadcast<TPacketType extends BroadcastPacketType>(packet: BroadcastPacket<TPacketType>, to?: string[]) {
  broadcastChannel.postMessage({
    from: broadcastTxID,
    to,
    packet,
  } satisfies BroadcastTransitPacket<TPacketType>);
}

//#region validate

/**
 * Validates if the given object is a valid {@linkcode BroadcastTransitPacket}.  
 * This is used in the `message` event listener of the BroadcastChannel to validate incoming packets before processing them.
 */
function isValidTransmitBroadcastPacket(obj: any): obj is BroadcastTransitPacket {
  return typeof obj === "object"
    && obj !== null
    && typeof obj.from === "string"
    && (obj.to === undefined || (Array.isArray(obj.to) && obj.to.every((id: any) => typeof id === "string")))
    && typeof obj.packet === "object"
    && obj.packet !== null
    && typeof obj.packet.type === "string"
    && (
      (typeof obj.packet.data === "object" && obj.packet.data !== null)
      || obj.packet.data === undefined
    );
}

//#region handler

/**
 * Gets called when a message is received through the BroadcastChannel.  
 * Validates the packet and emits an internal event with the packet data for other modules to listen to.
 */
function handleBroadcastMessage({ data }: MessageEvent) {
  if(!isValidTransmitBroadcastPacket(data)) {
    warn("Received invalid broadcast packet, ignoring:", data);
    return;
  }

  // if the packet is not intended for this session, ignore it
  if(data.from === broadcastTxID || (Array.isArray(data.to) && !data.to.includes(broadcastTxID ?? "")))
    return;

  if(getFeature("logEvents"))
    log(`Received broadcast packet of type "${data.packet.type}" from session "${data.from}":`, data);

  // emit an internal event with the packet data for other modules to listen to
  forceEmitSiteEvent("broadcast", data.packet.type, data);
}
