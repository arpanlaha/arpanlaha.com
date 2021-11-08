import { ensureExists } from "./utils/ensure";
import { WebGLWrapper } from "./utils/webgl";

const canvas = ensureExists(
  document.getElementById("canvas-webgl"),
  "WebGL canvas"
) as HTMLCanvasElement;
const cover = ensureExists(document.getElementById("cover"), "Cover");
const flip = ensureExists(document.getElementById("flip"), "Flip container");
const flipInner = ensureExists(
  document.getElementById("flip-inner"),
  "Flip inner"
);
const animateButton = ensureExists(
  document.getElementById("animate-button"),
  "Animate button"
) as HTMLButtonElement;
const animateButtonIcon = ensureExists(
  document.getElementById("animate-button-icon"),
  "Animate button icon"
) as HTMLImageElement;

const webglWrapper = new WebGLWrapper(canvas);

setTimeout(() => {
  webglWrapper.initializeWebglContext();
  cover.classList.add("hide-cover");
}, 0);

let flipped = false;
let animated = false;

flip.addEventListener("click", () => {
  if (flipped) {
    flipped = false;
    flipInner.classList.remove("flipped");
  } else {
    flipped = true;
    flipInner.classList.add("flipped");
  }
});

animateButton.addEventListener("click", (e: MouseEvent) => {
  e.stopPropagation();

  if (animated) {
    animated = false;
    webglWrapper.pause();
    animateButtonIcon.src = "/static/play.svg";
    animateButtonIcon.alt = "Play";
  } else {
    animated = true;
    webglWrapper.play();
    animateButtonIcon.src = "/static/pause.svg";
    animateButtonIcon.alt = "Pause";
  }
});
