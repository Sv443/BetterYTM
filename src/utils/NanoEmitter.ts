import { createNanoEvents, type DefaultEvents, type EventsMap, type Unsubscribe } from "nanoevents";

/** Abstract class that can be extended to create an event emitter with helper methods and a strongly typed event map */
export abstract class NanoEmitter<TEvtMap extends EventsMap = DefaultEvents> {
  protected readonly events = createNanoEvents<TEvtMap>();
  protected unsubscribers: Unsubscribe[] = [];

  /** Subscribes to an event - returns a function that unsubscribes the event listener */
  public on<TKey extends keyof TEvtMap>(event: TKey, cb: TEvtMap[TKey]) {
    // eslint-disable-next-line prefer-const
    let unsub: Unsubscribe | undefined;

    const unsubProxy = () => {
      if(!unsub)
        return;
      unsub();
      this.unsubscribers = this.unsubscribers.filter(u => u !== unsub);
    };

    unsub = this.events.on(event, cb);

    this.unsubscribers.push(unsub);
    return unsubProxy;
  }

  /** Unsubscribes all event listeners */
  public unsubscribeAll() {
    for(const unsub of this.unsubscribers)
      unsub();
    this.unsubscribers = [];
  }
}
