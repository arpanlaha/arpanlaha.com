export type CubicCoefficents = [number, number, number, number];

export interface Ribbon {
  path: CubicCoefficents;
  width: CubicCoefficents;
}

export enum ShaderType {
  Fragment = "Fragment",
  Vertex = "Vertex",
}
