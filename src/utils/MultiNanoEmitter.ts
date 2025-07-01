import { NanoEmitter } from "@sv443-network/userutils";
import type { DefaultEvents, EventsMap, Unsubscribe } from "nanoevents";

export type MultiNanoEmitterOptions<TEvtMap extends EventsMap> = {
  waitFor?: "all" | "any" | (keyof TEvtMap | "_")[];
  signal?: AbortSignal;
}

/**
 * {@linkcode NanoEmitter} wrapper that allows listening for whether one or all events have been emitted.
 */
export class MultiNanoEmitter<TEvtMap extends EventsMap = DefaultEvents> extends NanoEmitter<TEvtMap> {
  public onMulti<
    TKey extends keyof TEvtMap,
  >(
    events: (TKey | "_")[],
    options: MultiNanoEmitterOptions<TEvtMap>,
    cb: (args: [event: TKey | "_", args: Parameters<TEvtMap[TKey]>]) => void,
  ): [event: TKey | "_", unsub: () => void][] {
    const capturedEvents = new Set<string | TKey>();

    const unsubscribes: [event: TKey | "_", unsub: () => void][] = [];

    for(const event of events) {
      // eslint-disable-next-line prefer-const
      let unsub: Unsubscribe | undefined;

      const unsubProxy = (): void => {
        if(!unsub)
          return;

        unsub();
        this.eventUnsubscribes = this.eventUnsubscribes.filter(u => u !== unsub);
      };

      unsub = this.events.on(event as TKey, ((...args: Parameters<TEvtMap[TKey]>) => {
        capturedEvents.add(event);
        return this.evalMultiListenerCondition(events, capturedEvents, options.waitFor ?? "all", () => cb([event, args]));
      }) as unknown as TEvtMap[TKey]);

      options.signal?.addEventListener("abort", () => unsubProxy());

      this.eventUnsubscribes.push(unsub);
      unsubscribes.push([event, unsubProxy]);
    }
    return unsubscribes;
  }

  public onceMulti<
    TKey extends keyof TEvtMap,
  >(
    events: (TKey | "_")[],
    options: MultiNanoEmitterOptions<TEvtMap>,
    cb?: (args: [event: TKey | "_", args: Parameters<TEvtMap[TKey]>]) => void,
  ): Promise<[event: TKey | "_", args: Parameters<TEvtMap[TKey]>]> {
    const capturedEvents = new Set<string | TKey>();
    return new Promise((resolve) => {
      for(const event of events) {
        // eslint-disable-next-line prefer-const
        let unsub: Unsubscribe | undefined;

        const onceProxy = ((...args: Parameters<TEvtMap[TKey]>) => {
          capturedEvents.add(event);
          this.evalMultiListenerCondition(events, capturedEvents, options.waitFor ?? "all", () => {
            cb?.([event, args]);
            unsub?.();
            resolve([event, args]);
          });
        }) as TEvtMap[TKey];

        unsub = this.events.on(event, onceProxy);

        options.signal?.addEventListener("abort", () => unsub());

        this.eventUnsubscribes.push(unsub);
      }
    });
  }

  protected evalMultiListenerCondition<
    TKey extends keyof TEvtMap
  >(
    events: (string | TKey)[],
    capturedEvents: Set<string | TKey>,
    waitFor: "all" | "any" | (TKey | "_")[],
    cb: () => void,
  ): void {
    if(waitFor === "all" && [...capturedEvents].every(event => events.includes(event)))
      return cb();
    else if(waitFor === "any" && capturedEvents.size > 0)
      return cb();
    else if(Array.isArray(waitFor) && waitFor.length > 0) {
      if(waitFor.every(event => capturedEvents.has(event)))
        return cb();
    }
  }
}
