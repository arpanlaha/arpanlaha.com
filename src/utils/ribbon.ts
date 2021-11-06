import { Ribbon } from "./types";

/**
 * Returns a random number between (-1, 1).
 */
function generatePathCoefficient(): number {
  return Math.random() * 2 - 1;
}

export function generateRibbon(): Ribbon {
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
