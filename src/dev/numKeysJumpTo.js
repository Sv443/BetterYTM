(() => {
  const timeSteps = 10; // includes 10 so the 9 key doesn't jump to the very end
  function getX(timeKey, maxWidth) {
    if(timeKey >= timeSteps)
      return maxWidth;
    return Math.floor(maxWidth / timeSteps) * timeKey;
  }

  console.log("scrollY", getUnsafeWindow().scrollY);

  const elem = document.querySelector("tp-yt-paper-slider#progress-bar tp-yt-paper-progress#sliderBar");
  const rect = getOffset(elem);

  console.log("element rect", rect);

  const x = getX(9, rect.width);
  const y = rect.top - rect.height / 2;

  console.log("x & y", x, y);

  const evt = new MouseEvent("mousedown", {
    clientX: x,
    clientY: y,
    layerX: x,
    layerY: rect.height / 2,
    target: elem,
    bubbles: true,
    view: getUnsafeWindow(),
    shiftKey: false,
    ctrlKey: false,
    altKey: false,
    metaKey: false,
    button: 0,
    buttons: 1,
    which: 1,
    isTrusted: true,
    offsetX: 0,
    offsetY: 0,
  });

  elem.dispatchEvent(evt);

  function getOffset(el) {
    var _x = 0;
    var _y = 0;
    const rect = el.getBoundingClientRect();
    console.log("rect", rect);
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
      _x += el.offsetLeft - el.scrollLeft;
      _y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: _y, left: _x, width: rect.width, height: rect.height };
  }
})();

function getUnsafeWindow() {
  try {
    return unsafeWindow;
  }
  catch(e) {
    return window;
  }
}
