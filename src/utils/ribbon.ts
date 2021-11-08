/**
 * Four numbers corresponding to coefficients of a cubic polynomial.
 */
export type CubicCoefficents = [number, number, number, number];

/**
 * A result from the `bound` function.
 * - `value`: the new value.
 * - `flipped`: whether the direction changed signs.
 */
interface BoundResult {
  value: number;
  flipped: boolean;
}

/**
 * Multiplier for path/width change speed.
 */
const D_MULTIPLIER = 0.001;

/**
 * A class corresponding to a ribbon to render.
 * `Ribbon` uses random cubic functions to determine both the path and width of the ribbon.
 */
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

  /**
   * Modifies the path and width coefficients by their speeds.
   */
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

  /**
   * Generates a random `CubicCoefficients`.
   */
  private generateCubicCoefficients(): CubicCoefficents {
    return [
      this.generateCoefficient(),
      this.generateCoefficient(),
      this.generateCoefficient(),
      this.generateCoefficient(),
    ];
  }

  /**
   * Modifies a given cubic coefficient pair of values and speeds.
   */
  private tickCoefficients(
    values: CubicCoefficents,
    speeds: CubicCoefficents
  ): void {
    for (let i = 0; i < 4; i += 1) {
      const { value, flipped } = this.bound(
        values[i] + speeds[i] * D_MULTIPLIER
      );
      values[i] = value;

      if (flipped) {
        speeds[i] *= -1;
      }
    }
  }

  /**
   * Returns a bounded form of a number between [1, -1], with inputs outside the range being "reflected" back.
   *
   * Example: `bound(1.05) = 0.95`.
   */
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
