type CubicCoefficents = [number, number, number, number];

interface Ribbon {
  path: CubicCoefficents;
  width: CubicCoefficents;
}

enum ShaderType {
  Fragment = "Fragment",
  Vertex = "Vertex",
}

/**
 * Returns a random number between (-1, 1).
 */
function generatePathCoefficient(): number {
  return Math.random() * 2 - 1;
}

function generateRibbon(): Ribbon {
  return {
    path: [
      generatePathCoefficient(),
      generatePathCoefficient(),
      generatePathCoefficient(),
      generatePathCoefficient(),
    ],
    width: [
      generatePathCoefficient(),
      generatePathCoefficient(),
      generatePathCoefficient(),
      generatePathCoefficient(),
    ],
  };
}

function compileShader(
  context: WebGLRenderingContext,
  source: string,
  type: ShaderType
): WebGLShader | null {
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

const vertexSource = `
attribute vec4 a_position;

void main(void) {
  gl_Position = a_position;
}
`;

function generateFragmentSource(
  ribbon: Ribbon,
  width: number,
  height: number
): string {
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

  float ribbon_path = RPATH_A * x * x * x + RPATH_B * x * x + RPATH_C * x + RPATH_D;
  float ribbon_width = abs(RWIDTH_A * x * x * x + RWIDTH_B * x * x + RWIDTH_C * x + RWIDTH_D);
  float ribbon_width_factor = 30. * ribbon_width / HEIGHT;

  float distance = max(abs(y - ribbon_path) - ribbon_width_factor, 0.);
  float distance_factor = 1. / (10. * distance + 1.);
  gl_FragColor = vec4(0., 0.415, 1., distance_factor);
}
`;
}

function run(): void {
  const DEVICE_SCALE = window.devicePixelRatio;
  const WIDTH = document.body.clientWidth * DEVICE_SCALE;
  const HEIGHT = document.body.clientHeight * DEVICE_SCALE;

  const ribbon = generateRibbon();
  const canvas = document.getElementById("canvas-webgl") as HTMLCanvasElement;
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.width = `${document.body.clientWidth}px`;
  canvas.style.height = `${document.body.clientHeight}px`;

  const context = canvas.getContext("webgl", {
    preserveDrawingBuffer: true,
    premultipliedAlpha: false, // Ask for non-premultiplied alpha
  }) as WebGLRenderingContext;

  if (context === null) {
    console.log("error context");
    return;
  }

  context.viewport(0, 0, WIDTH, HEIGHT);

  const fragmentSource = generateFragmentSource(ribbon, WIDTH, HEIGHT);

  const vertexShader = compileShader(context, vertexSource, ShaderType.Vertex);
  if (vertexShader === null) {
    console.log("error vertex");
    return;
  }

  const fragmentShader = compileShader(
    context,
    fragmentSource,
    ShaderType.Fragment
  );
  if (fragmentShader === null) {
    console.log("error fragment");
    console.log(fragmentSource);
    console.log(context.getError());
    return;
  }
  const program = context.createProgram();

  if (program === null) {
    console.log("error program");
    return;
  }

  context.attachShader(program, vertexShader);
  context.attachShader(program, fragmentShader);
  context.linkProgram(program);

  if (!context.getProgramParameter(program, context.LINK_STATUS)) {
    console.log("error link");
  }

  const buffer = context.createBuffer();

  if (buffer === null) {
    console.log("error buffer");
    return;
  }

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

run();
document.getElementById("cover")?.classList.add("hide-cover");
