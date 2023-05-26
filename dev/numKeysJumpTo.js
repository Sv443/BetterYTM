(() => {
  const timeSteps = 9; // excluding 0
  function getX(timeKey, maxWidth) {
    if(timeKey >= timeSteps)
      return maxWidth;
    return Math.floor(maxWidth / timeSteps) * timeKey;
  }

  const elem = document.querySelector("#sliderBar");
  const rect = elem.getBoundingClientRect();
  const x = getX(1, rect.width);
  const y = (rect.top + rect.bottom) / 2;

  const evt = new MouseEvent("mousedown", {
    clientX: x,
    clientY: y,
    target: elem,
    bubbles: true,
    view: window,
  });

  document.body.dispatchEvent(evt);
})();
