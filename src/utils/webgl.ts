import { ensure, ensureExists } from "./ensure";
import { Ribbon } from "./ribbon";
import { CubicCoefficents, ShaderType } from "./types";

const VERTEX_SOURCE = `
attribute vec4 a_position;

void main(void) {
  gl_Position = a_position;
}
`;

const FRAGMENT_SOURCE = `
precision highp float;

uniform vec4 path;
uniform vec4 width;
uniform float canvas_width;
uniform float canvas_height;

void main() {
  float x = (gl_FragCoord[0] / canvas_width) * 2. - 1.;
  float y = (gl_FragCoord[1] / canvas_height) * 2. - 1.;

  float ribbon_path = path[0] * pow(x, 3.) + path[1] * pow(x, 2.) + path[2] * x + path[3];
  float ribbon_width = abs(width[0] * pow(x, 3.) + width[1] * pow(x, 2.) + width[2] * x + width[3]);
  float ribbon_width_factor = 30. * ribbon_width / canvas_height;

  float distance = max(abs(y - ribbon_path) - ribbon_width_factor, 0.);
  float distance_factor = 1. / (10. * distance + 1.);
  gl_FragColor = vec4(0., 0.415, 1., distance_factor);
}
`;
export class WebGLWrapper {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: WebGLRenderingContext;
  private readonly ribbon: Ribbon;
  private program?: WebGLProgram;
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

    const vertexShader = ensureExists(
      this.compileShader(VERTEX_SOURCE, ShaderType.Vertex),
      "Vertex shader"
    );

    const fragmentShader = ensureExists(
      this.compileShader(FRAGMENT_SOURCE, ShaderType.Fragment),
      "Fragment shader"
    );

    const program = ensureExists(context.createProgram(), "WebGL program");
    this.program = program;

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

    this.draw();
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

  private attachCubicUniform(data: CubicCoefficents, name: string): void {
    const { context } = this;
    const program = ensureExists(this.program, "WebGL Program");

    const location = ensureExists(
      context.getUniformLocation(program, name),
      `${name} uniform location`
    );

    context.uniform4f(location, ...data);
  }

  private attachFloatUniform(data: number, name: string): void {
    const { context } = this;
    const program = ensureExists(this.program, "WebGL Program");

    const location = ensureExists(
      context.getUniformLocation(program, name),
      `${name} uniform location`
    );

    context.uniform1f(location, data);
  }

  private draw(): void {
    const { context, ribbon, width, height } = this;

    this.attachCubicUniform(ribbon.path, "path");
    this.attachCubicUniform(ribbon.width, "width");
    this.attachFloatUniform(width, "canvas_width");
    this.attachFloatUniform(height, "canvas_height");

    context.drawArrays(context.TRIANGLE_FAN, 0, 4);
  }
}
