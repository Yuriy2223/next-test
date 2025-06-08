export function simulateError(message: string): never {
  throw new Error(message);
}
