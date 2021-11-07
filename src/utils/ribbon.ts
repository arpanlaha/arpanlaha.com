// import { Ribbon } from "./types";

type CubicCoefficents = [number, number, number, number];

const D_MULTIPLIER = 0.01;

interface BoundResult {
  value: number;
  flipped: boolean;
}

export class Ribbon {
  private _path: CubicCoefficents;
  private _width: CubicCoefficents;

  private dPath: CubicCoefficents;
  private dWidth: CubicCoefficents;

  constructor() {
    this._path = this.generateCubicCoefficients();
    this._width = this.generateCubicCoefficients();
    this.dPath = this.generateCubicCoefficients();
    this.dWidth = this.generateCubicCoefficients();
  }

  get path(): CubicCoefficents {
    return this._path;
  }

  get width(): CubicCoefficents {
    return this._width;
  }

  tick(): void {
    this.tickCoefficients(this._path, this.dPath);
    this.tickCoefficients(this._width, this.dWidth);
  }

  /**
   * Returns a random number between (-1, 1).
   */
  private generateCoefficient(): number {
    return Math.random() * 2 - 1;
  }

  private generateCubicCoefficients(): CubicCoefficents {
    return [
      this.generateCoefficient(),
      this.generateCoefficient(),
      this.generateCoefficient(),
      this.generateCoefficient(),
    ];
  }

  private tickCoefficients(
    values: CubicCoefficents,
    diffs: CubicCoefficents
  ): void {
    for (let i = 0; i < 4; i += 1) {
      const { value, flipped } = this.bound(
        values[i] + diffs[i] * D_MULTIPLIER
      );
      values[i] = value;

      if (flipped) {
        diffs[i] *= -1;
      }
    }
  }

  private bound(number: number): BoundResult {
    if (number < -1) {
      return { value: -1 - ((number + 1) % 1), flipped: true };
    }

    if (number > 1) {
      return { value: 1 - ((number - 1) % 1), flipped: true };
    }

    return { value: number, flipped: false };
  }
}
