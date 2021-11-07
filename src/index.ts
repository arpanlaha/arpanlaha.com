import { generateRibbon } from "./utils/ribbon";
import { WebGLWrapper } from "./utils/webgl";

const ribbon = generateRibbon();
const canvas = document.getElementById("canvas-webgl") as HTMLCanvasElement;

const webglWrapper = new WebGLWrapper(canvas, ribbon);
webglWrapper.initializeWebglContext();

document.getElementById("cover")?.classList.add("hide-cover");
