import { ensure, ensureExists } from "./ensure";
import { Ribbon } from "./ribbon";
import { ShaderType } from "./types";

const vertexSource = `
attribute vec4 a_position;

void main(void) {
  gl_Position = a_position;
}
`;
export class WebGLWrapper {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: WebGLRenderingContext;
  private readonly ribbon: Ribbon;
  private width = 0;
  private height = 0;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.ribbon = new Ribbon();

    this.context = ensureExists(
      canvas.getContext("webgl", {
        preserveDrawingBuffer: true,
        premultipliedAlpha: false,
      }),
      "WebGL context"
    );

    this.resizeCanvas();

    window.addEventListener("resize", this.resizeCanvas.bind(this));
  }

  initializeWebglContext(): void {
    const { context } = this;

    const fragmentSource = this.generateFragmentSource();

    const vertexShader = ensureExists(
      this.compileShader(vertexSource, ShaderType.Vertex),
      "Vertex shader"
    );

    const fragmentShader = ensureExists(
      this.compileShader(fragmentSource, ShaderType.Fragment),
      "Fragment shader"
    );

    const program = ensureExists(context.createProgram(), "WebGL program");

    context.attachShader(program, vertexShader);
    context.attachShader(program, fragmentShader);
    context.linkProgram(program);

    ensure(
      context.getProgramParameter(program, context.LINK_STATUS),
      "Link status"
    );

    const buffer = ensureExists(context.createBuffer(), "WebGL buffer");

    context.bindBuffer(context.ARRAY_BUFFER, buffer);

    const vertexArray = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]);

    context.bufferData(context.ARRAY_BUFFER, vertexArray, context.STATIC_DRAW);

    const positionAttributeLocation = context.getAttribLocation(
      program,
      "a_position"
    );

    context.useProgram(program);

    context.enableVertexAttribArray(positionAttributeLocation);

    context.vertexAttribPointer(
      positionAttributeLocation,
      2,
      context.FLOAT,
      false,
      0,
      0
    );

    context.drawArrays(context.TRIANGLE_FAN, 0, 4);
  }

  private resizeCanvas(): void {
    const { canvas, context } = this;

    const DEVICE_SCALE = window.devicePixelRatio;
    const width = document.body.clientWidth * DEVICE_SCALE;
    const height = document.body.clientHeight * DEVICE_SCALE;

    this.width = width;
    this.height = height;

    canvas.width = width;
    canvas.height = height;
    canvas.style.width = `${document.body.clientWidth}px`;
    canvas.style.height = `${document.body.clientHeight}px`;
    context.viewport(0, 0, width, height);
  }

  private generateFragmentSource(): string {
    const { ribbon, width, height } = this;

    return `
#define RPATH_A ${ribbon.path[0]}
#define RPATH_B ${ribbon.path[1]}
#define RPATH_C ${ribbon.path[2]}
#define RPATH_D ${ribbon.path[3]}
#define RWIDTH_A ${ribbon.width[0]}
#define RWIDTH_B ${ribbon.width[1]}
#define RWIDTH_C ${ribbon.width[2]}
#define RWIDTH_D ${ribbon.width[3]}
#define WIDTH ${Math.round(width)}.
#define HEIGHT ${Math.round(height)}.

precision highp float;

void main() {
  float x = (gl_FragCoord[0] / WIDTH) * 2. - 1.;
  float y = (gl_FragCoord[1] / HEIGHT) * 2. - 1.;

  float ribbon_path = RPATH_A * pow(x, 3.) + RPATH_B * pow(x, 2.) + RPATH_C * x + RPATH_D;
  float ribbon_width = abs(RWIDTH_A * pow(x, 3.) + RWIDTH_B * pow(x, 2.) + RWIDTH_C * x + RWIDTH_D);
  float ribbon_width_factor = 30. * ribbon_width / HEIGHT;

  float distance = max(abs(y - ribbon_path) - ribbon_width_factor, 0.);
  float distance_factor = 1. / (10. * distance + 1.);
  gl_FragColor = vec4(0., 0.415, 1., distance_factor);
}
`;
  }

  private compileShader(source: string, type: ShaderType): WebGLShader | null {
    const { context } = this;

    const shader = context.createShader(
      type === ShaderType.Fragment
        ? context.FRAGMENT_SHADER
        : context.VERTEX_SHADER
    );

    if (shader === null) {
      return null;
    }

    context.shaderSource(shader, source);
    context.compileShader(shader);

    return context.getShaderParameter(shader, context.COMPILE_STATUS)
      ? shader
      : null;
  }
}
