// caveats:
// only works once for some reason (should be enough tho)

const view = unsafeWindow ?? window;

const player = document.querySelector("#movie_player");
player.dispatchEvent(new MouseEvent("mouseenter", {
  view,
  bubbles: true,
  cancelable: false,
}));

const { x, y, width, height } = player.getBoundingClientRect();
const screenY = Math.round(y + height / 2);
const screenX = x + Math.min(50, Math.round(width / 3));

player.dispatchEvent(new MouseEvent("mousemove", {
  view,
  bubbles: true,
  cancelable: false,
  screenY,
  screenX,
  movementX: 5,
  movementY: 0
}));
console.log("x:", screenX, "y:", screenY);

setTimeout(() => {
  player.dispatchEvent(new MouseEvent("mouseleave", {
    view,
    bubbles: true,
    cancelable: false,
  }));
}, 4000);
