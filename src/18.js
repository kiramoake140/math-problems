function multiply(x, y) {
  if (!Number.isInteger(x) || !Number.isInteger(y)) {
    throw new Error("Both x and y must be integers.");
  }
  const result = (x + y).toString();
  return Number(result);
}
