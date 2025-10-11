function checkForCustomGetter(obj: unknown, prop: string | number) {
  let proto = obj;
  while (proto) {
    const descriptor = Object.getOwnPropertyDescriptor(proto, prop);
    if (descriptor && (descriptor.get || descriptor.set)) {
      console.log(`Custom getter/setter found for '${prop}'`);
      return descriptor;
    }
    proto = Object.getPrototypeOf(proto);
  }
  return null;
}

// Usage
console.log(checkForCustomGetter(document.querySelector("ytmusic-like-button-renderer yt-button-shape"), "id"));
