// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";
import util  from "../../src/lib/util";

describe('util', () => {

  test('Should correctly tell if a value is a number', () => {
    expect(util.isNumber('abc')).toBe(false);
    expect(util.isNumber('123')).toBe(true);
    expect(util.isNumber(456)).toBe(true);
  });

  test('Should correctly tell if a value is a pixel string', () => {
    expect(util.isPXNumber('123')).toBe(false);
    expect(util.isPXNumber('123px')).toBe(true);
  });

  // Do similar tests for other number check functions...

  test('Should correctly convert to pixel string', () => {
    expect(util.toPX('123')).toBe('123px');
    expect(util.toPX(456)).toBe('456px');
  });

  test('Should correctly convert to a number', () => {
    expect(util.toNumber('123.45')).toBe(123.45);
    expect(util.toNumber('123px')).toBe(123);
    expect(util.toNumber(456)).toBe(456);
    expect(util.toNumber(NaN)).toStrictEqual(NaN);
  });

  // Do similar tests for other conversion functions...

  test('Should correctly get element position', () => {
    const el = global.document.createElement('div');
    // Set some styles here...
    const pos = util.getElementPosition(el);
    expect(pos).toEqual(expect.any(Object));
    expect(pos.x).toEqual(expect.any(Number));
    expect(pos.y).toEqual(expect.any(Number));
  });

  // Do similar tests for other DOM functions...

  test('Should correctly get an unique uuid', () => {
    expect(util.uuid()).not.toBe(util.uuid());
  });
});