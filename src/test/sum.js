export function sum(a, b) {
  return a + b;
}

export function pow(a, b) {
  return a ** b;
}

export function findAge(birthOfYear) {
  return Date().split(' ')[3] - birthOfYear;
}
