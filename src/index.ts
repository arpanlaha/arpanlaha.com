import { ensureExists } from "./utils/ensure";
import { generateRibbon } from "./utils/ribbon";
import { initializeWebglContext } from "./utils/webgl";

const DEVICE_SCALE = window.devicePixelRatio;
const WIDTH = document.body.clientWidth * DEVICE_SCALE;
const HEIGHT = document.body.clientHeight * DEVICE_SCALE;

const ribbon = generateRibbon();
const canvas = document.getElementById("canvas-webgl") as HTMLCanvasElement;
canvas.width = WIDTH;
canvas.height = HEIGHT;
canvas.style.width = `${document.body.clientWidth}px`;
canvas.style.height = `${document.body.clientHeight}px`;

const context = ensureExists(
  canvas.getContext("webgl", {
    preserveDrawingBuffer: true,
    premultipliedAlpha: false, // Ask for non-premultiplied alpha
  }),
  "WebGL context"
) as WebGLRenderingContext;

initializeWebglContext(context, ribbon, WIDTH, HEIGHT);

document.getElementById("cover")?.classList.add("hide-cover");
