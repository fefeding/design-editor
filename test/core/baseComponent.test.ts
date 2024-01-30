// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";
import JBaseComponent  from "../../src/core/baseComponent";


describe('JBaseComponent Class', () => {
  const option = {
    style: {},
    target: {},
  };

  let baseComponentInstance;

  beforeEach(() => {
    baseComponentInstance = new JBaseComponent(option);
  });

  test('should create instance', () => {
    expect(baseComponentInstance).toBeInstanceOf(JBaseComponent);
  });

  test('should have target', () => {
    expect(baseComponentInstance.target).toBeDefined();
  });

  test('selected should return correct state', () => {
    baseComponentInstance._selected = true;
    expect(baseComponentInstance.selected).toBe(true);
  });

  test('selected should set correct state', () => {
    baseComponentInstance.selected = false;
    expect(baseComponentInstance.selected).toBe(false);
  });

  test('setDomStyle should set the style correctly', () => {
    baseComponentInstance.setDomStyle('position', 'absolute');
    expect(baseComponentInstance.style.position).toBe('absolute');
  });

  test('toJSON should return correct JSON representation', () => {
    let json = baseComponentInstance.toJSON();
    // console.log('json', json)
    expect(json).toEqual(expect.objectContaining({
      style: expect.any(Object),
      children: expect.any(Array),
      type: expect.any(String),
      data: expect.any(Object),
      id: expect.any(String),
      transform: expect.any(Object)
    }));
    expect(json._selected).toBeUndefined();
  });

});