export function ensure<T>(
  maybeExists: T | null | undefined,
  name: string
): void {
  if (maybeExists === null || maybeExists === undefined || !maybeExists) {
    throw new Error(`${name} is not truthy`);
  }
}

export function ensureExists<T>(
  maybeExists: T | null | undefined,
  name: string
): T {
  if (maybeExists === null || maybeExists === undefined) {
    throw new Error(`${name} does not exist`);
  }

  return maybeExists;
}
