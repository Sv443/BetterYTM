(() => {
  const timeSteps = 9; // excluding 0
  function getX(timeKey, maxWidth) {
    if(timeKey >= timeSteps)
      return maxWidth;
    return Math.floor(maxWidth / timeSteps) * timeKey;
  }
    
  console.log("scrollY", window.scrollY);

  const elem = document.querySelector("tp-yt-paper-progress#sliderBar");
  const rect = getOffset(elem);
  const x = getX(1, rect.width);
  const y = rect.top - rect.height / 2;
    
  console.log(x, y, rect);

  const evt = new MouseEvent("mousedown", {
    clientX: x,
    clientY: y,
    target: elem,
    bubbles: true,
    view: window,
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
