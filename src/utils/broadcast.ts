// module that facilitates inter-session (tab) communication using BroadcastChannel API

import { randomId } from "@sv443-network/coreutils";
import { getSessionId } from "./misc.js";
import { forceEmitSiteEvent } from "../siteEvents.js";
import { log } from "./logging.js";
import { getFeature } from "../config.js";

//#region vars

/**
 * Gets set to the session ID (when `sessionStorage` is available) or a random ID set at init time.  
 * Used to identify the sender of packets emitted through the BroadcastChannel, and to determine which packets should be received based on the `to` field of the transmitted packets.
 */
let transmitId: string | undefined;

// #region types

/** The type of packet sent through the BroadcastChannel. */
export type BroadcastPacketType =
  // whenever any DataStore's data is changed, to trigger updates in other sessions
  | "dataStoreUpdate"
  // reserved for custom, non-standard BYTM packets
  | "custom";

/** Maps a {@linkcode BroadcastPacketType} to the type of data it should contain. */
export type BroadcastPacketDataMap = {
  dataStoreUpdate: {
    /** The IDs of the DataStores that were updated. */
    ids: string[];
  };
  custom: {
    /** Identifies the custom packet, used to determine how to handle it when received. */
    name: string;
  } & Record<string, any>; // allow custom packets to contain any additional data they need
};

/** Raw object type of the packets sent through the BroadcastChannel. */
export type BroadcastPacket<TPacketType extends BroadcastPacketType = BroadcastPacketType> = {
  /** Used to determine how to handle the packet when received. */
  type: TPacketType;
  /** The actual data of the packet, its structure depends on the {@linkcode BroadcastPacketType}. */
  data: BroadcastPacketDataMap[TPacketType];
};

/** Object type of the packets sent through the BroadcastChannel, including metadata about the sender and intended recipients. */
export type TransmitBroadcastPacket<TPacketType extends BroadcastPacketType = BroadcastPacketType> = {
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
}

//#region emit

/**
 * Emits a packet through BYTM's [BroadcastChannel](https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API) instance to all other sessions that might be open, or only to specific sessions if the `to` parameter is provided.  
 * The packet will be wrapped in a {@linkcode TransmitBroadcastPacket} that includes metadata about the sender and intended recipients.  
 * @param packet The actual packet to be sent, without the metadata. Use the {@linkcode BroadcastPacket} type for this parameter.
 * @param to Optional array of session IDs to specify which sessions should receive the packet. If empty or undefined, the packet will be sent to all other sessions.
 */
export function emitBroadcast<TPacketType extends BroadcastPacketType>(packet: BroadcastPacket<TPacketType>, to?: string[]) {
  const transmitPacket: TransmitBroadcastPacket<TPacketType> = {
    from: transmitId ??= getSessionId() ?? randomId(16, 36),
    to,
    packet,
  };
  broadcastChannel.postMessage(transmitPacket);
}

//#region validate

/**
 * Validates if the given object is a valid {@linkcode TransmitBroadcastPacket}.  
 * This is used in the `message` event listener of the BroadcastChannel to validate incoming packets before processing them.
 */
function isValidTransmitBroadcastPacket(obj: any): obj is TransmitBroadcastPacket {
  return typeof obj === "object"
    && obj !== null
    && typeof obj.from === "string"
    && (obj.to === undefined || (Array.isArray(obj.to) && obj.to.every((id: any) => typeof id === "string")))
    && typeof obj.packet === "object"
    && obj.packet !== null
    && typeof obj.packet.type === "string"
    && typeof obj.packet.data === "object"
    && obj.packet.data !== null;
}

//#region handler

/**
 * Gets called when a message is received through the BroadcastChannel.  
 * Validates the packet and emits an internal event with the packet data for other modules to listen to.
 */
function handleBroadcastMessage({ data }: MessageEvent) {
  if(!isValidTransmitBroadcastPacket(data))
    return;

  // if the packet is not intended for this session, ignore it
  if(data.from === transmitId || (Array.isArray(data.to) && !data.to.includes(transmitId ?? "")))
    return;

  if(getFeature("logEvents"))
    log(`Received broadcast packet of type "${data.packet.type}" from session "${data.from}":`, data);

  // emit an internal event with the packet data for other modules to listen to
  forceEmitSiteEvent("broadcast", data.packet.type, data);
}
