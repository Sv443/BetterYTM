// module that facilitates inter-session (tab) communication via broadcast packets

import { debounce, pureObj, randomId, type DataStoreEngineDSOptions } from "@sv443-network/coreutils";
import { GMStorageEngine } from "@sv443-network/userutils";
import { emitSiteEvent, forceEmitSiteEvent, siteEvents } from "../siteEvents.js";
import { initTime } from "../constants.js";
import { configStore, getFeature } from "../config.js";
import { getSerializerStoresFull } from "../serializers.js";
import { error, info, log, warn } from "./logging.js";
import { getDomain, getSessionId, reloadTab } from "./misc.js";
import type { Domain } from "../types.js";

// #region types

/** Maps a {@linkcode BroadcastPacketType} to the type of data it should contain. */
export type BroadcastPacketDataMap = {
  // sync
  /** Whenever any DataStore's data is changed, to trigger updates in other sessions. */
  dataStoreUpdate: {
    /** The ID of the DataStore that was updated. */
    id: string;
  };
  /** Reloads all open tabs. */
  reloadTabs: void;

  // sessions
  /** Called to make other sessions reply with a `discoverSessionsReply`, in order to collect a list of all open sessions. */
  discoverSessions: void;
  /** Reply to a "discoverSessions" packet. */
  discoverSessionsReply: {
    /**
     * Session ID of the sender (not the TxID).  
     * Note that this ID might not be unique across tabs, as sessionStorage can get duplicated when duplicating tabs.  
     * For actual unique identification, use the TxID in the `from` field of the transmitted packet instead.
     */
    sessionId: string | null;
    /** Document title of the sender's tab for easier identification. */
    title: string;
    /** Which domain the session is on ("yt" or "ytm"). */
    domain: Domain;
    /** Timestamp of when the session was initialized. */
    initTime: number;
  };

  // custom
  /** Reserved for custom, non-standard BYTM packets. */
  custom: {
    /** Identifies the custom packet, used to determine how to handle it when received. */
    name: string;
  } & Record<string, any>; // allow custom packets to contain any additional data they need
};

/** The type of broadcast packet. */
export type BroadcastPacketType = keyof BroadcastPacketDataMap;

/** Raw data object type of the broadcast packets. */
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

/** Type of the packets sent via broadcast, including metadata about the sender and intended recipients. */
export type BroadcastTransitPacket<TPacketType extends BroadcastPacketType = BroadcastPacketType> = {
  /** TxID of the sender. */
  from: string;
  /** List of TxIDs that indicates which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions. */
  to?: string[];
  /** The actual packet to be sent. */
  packet: BroadcastPacket<TPacketType>;
  /** Unique nonce to prevent parsing the same packet multiple times. */
  nonce: number;
};

/** Data structure stored by {@linkcode broadcastEng} */
export type BroadcastStorageData = {
  /** Last emitted packet. */
  packet: BroadcastTransitPacket<BroadcastPacketType>;
};


//#region vars

/** Random ID used to identify the sender of packets emitted via broadcast, and to determine which packets should be received based on the `to` field of the transmitted packets. */
export const broadcastTxID = randomId(10, 36);

const broadcastEngDSOpts: DataStoreEngineDSOptions = {
  id: "bytm-broadcast",
  encodeData: [null, (d) => d],
  decodeData: [null, (d) => d],
};

/**
 * DataStoreEngine instance used to push broadcast packets to other sessions using the `GM.addValueChangeListener` API.  
 * Refer to the {@linkcode BroadcastPacket} type for the packets sent through this channel.  
 * Doesn't need to be read from, as the packets are captured via `GM.addValueChangeListener`.
 */
export const broadcastEng = new GMStorageEngine({ dataStoreOptions: broadcastEngDSOpts });

/** Which packets have already been received and processed. */
const receivedNonces = new Set<number>();


//#region init

/** Initializes the broadcast module by setting up the necessary event listeners. */
export function initBroadcast() {
  if("addValueChangeListener" in GM) {
    // sadly only supported by TM and VM
    // see also https://violentmonkey.github.io/api/gm/#gm_addvaluechangelistener
    GM.addValueChangeListener(broadcastEngDSOpts.id, (_name, _oldData, newData, isRemote) => {
      try {
        if(typeof newData === "string" && newData.trim().startsWith("{") && newData.trim().endsWith("}"))
          newData = JSON.parse(newData);
      }
      catch(e) {
        warn("Failed to parse broadcast packet as object:", newData, e);
      }

      if(isRemote && typeof newData === "object" && newData !== null && "packet" in newData && newData.packet !== null)
        relayBroadcastPacket(newData.packet as BroadcastTransitPacket);
    });
  }
  else
    error(`${GM_info.scriptHandler} doesn't have GM.addValueChangeListener support, inter-session communication will not work!`);

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

  info(`Initialized broadcast module with TxID "${broadcastTxID}"`);
}


//#region handlers

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

      if(data.id === configStore.id)
        emitSiteEvent("configChanged", configStore.getData());

      getFeature("logEvents") && log(`Received "dataStoreUpdate" packet for DataStore with ID "${data.id}", reloaded data for that store`);
    }
    catch(err) {
      log(`Error while handling "dataStoreUpdate" packet for DataStore with ID "${data.id}":`, err);
    }
    break;
  }
  // reload this tab
  case "reloadTabs":
    await reloadTab();
    break;
  // reply to "discoverSessions" packets with a "discoverSessionsReply" packet:
  case "discoverSessions":
    emitBroadcast({
      type: "discoverSessionsReply",
      data: {
        sessionId: getSessionId(),
        title: document.title,
        domain: getDomain(),
        initTime,
      },
    }, [from]);
    getFeature("logEvents") && log(`Replied to "discoverSessions" packet from session "${from}" with this session's TxID "${broadcastTxID}"`);
    break;
  }
}


//#region emit

/**
 * Emits a packet through BYTM's broadcast system to all other sessions that might be open, or only to specific sessions if the `to` parameter is provided.  
 * The packet will be wrapped in a {@linkcode BroadcastTransitPacket} that includes metadata about the sender and intended recipients.  
 * @param packet The actual packet to be sent, without the metadata. Use the {@linkcode BroadcastPacket} type for this parameter.
 * @param to Optional array of TxIDs to specify which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
 */
export async function emitBroadcast<TPacketType extends BroadcastPacketType>(packet: BroadcastPacket<TPacketType>, to?: string[]) {
  // use the 6 least significant Date.now bytes plus random floating point number for truly unique random nonces:
  const nonce = Date.now() % 0xFFFFFF + Math.random();
  return await broadcastEng.setValue(broadcastEngDSOpts.id, JSON.stringify({
    packet: {
      from: broadcastTxID,
      to,
      packet,
      nonce,
    } as BroadcastTransitPacket<TPacketType>
  }));
}


//#region validate

/** Validates if the given object is a valid {@linkcode BroadcastTransitPacket} */
function isValidTransitBroadcastPacket(obj: any): obj is BroadcastTransitPacket {
  return typeof obj === "object"
    && obj !== null
    // from
    && typeof obj.from === "string"
    // to
    && (obj.to === undefined || (Array.isArray(obj.to) && obj.to.every((id: any) => typeof id === "string")))
    // packet
    && typeof obj.packet === "object"
    && obj.packet !== null
    // packet.type
    && typeof obj.packet.type === "string"
    && (
      // packet.data
      (typeof obj.packet.data === "object" && obj.packet.data !== null)
      || obj.packet.data === undefined
    )
    // nonce
    && typeof obj.nonce === "number";
}


//#region relay packet

/** Gets called when a broadcast packet is received to validate and relay it via {@linkcode siteEvents} */
function relayBroadcastPacket(packet: object) {
  if(!isValidTransitBroadcastPacket(packet))
    return warn("Received invalid broadcast packet, ignoring:", packet);

  // if packet was already processed, ignore it
  if(receivedNonces.has(packet.nonce))
    return warn("Received broadcast packet with nonce that was already received, ignoring:", packet);

  // remove oldest entry to prevent any potential memory leaks
  if(receivedNonces.size >= 10) {
    const oldestNonce = receivedNonces.values().next().value;
    oldestNonce && receivedNonces.delete(oldestNonce);
  }

  receivedNonces.add(packet.nonce);

  // if packet is not intended for this session, ignore it
  if(packet.from === broadcastTxID || (Array.isArray(packet.to) && !packet.to.includes(broadcastTxID ?? "")))
    return;

  if(getFeature("logEvents"))
    log(`Received broadcast packet of type "${packet.packet.type}" from session "${packet.from}":`, packet);

  const packetClean = pureObj(packet); // remove prototype chain

  // broadcasts work like interrupts, so they are allowed to be emitted even before "bytm:ready"
  forceEmitSiteEvent("broadcast", packet.packet.type, packetClean);
  forceEmitSiteEvent(`broadcast:${packet.packet.type}`, packetClean as any); // love dealing with TS mapped type shenanigans
}
