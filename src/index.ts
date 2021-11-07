import { WebGLWrapper } from "./utils/webgl";

const canvas = document.getElementById("canvas-webgl") as HTMLCanvasElement;

const webglWrapper = new WebGLWrapper(canvas);
webglWrapper.initializeWebglContext();

document.getElementById("cover")?.classList.add("hide-cover");
