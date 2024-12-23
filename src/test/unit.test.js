import { expect, test } from "vitest";
import { pow, findAge } from "./sum.js";

test('find age   to equal 22 ', () => {
  const year = 2002;
  const result = findAge(year);
  expect(result).toBe(22);
});

test('find age   to equal 20 ', () => {
  const year = 2004
  const result = findAge(year)
  expect(result).toBe(20)
});

test('find age   to equal 19 ', () => {
  const year = 2005
  const result = findAge(year)
  expect(result).toBe(19)
});

test('find age   to equal  26', () => {
  const year = 1998
  const result = findAge(year)
  expect(result).toBe(26)
});

test('find age   to equal  29', () => {
  const year = 1995
  const result = findAge(year)
  expect(result).toBe(29)
});