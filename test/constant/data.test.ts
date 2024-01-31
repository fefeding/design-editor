// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";

import EventEmitter from '../../src/constant/eventEmitter';
import JData, { JElementData, JImageData, JTextData, IJElementData } from '../../src/constant/data.ts';

describe('JData', () => {
  let data;

  beforeEach(() => {
    const src = new JElementData();
    data = JData.createProxy(src);
  });

  test('should instantiate', () => {
    expect(data).toBeInstanceOf(JData);
    expect(data).toBeInstanceOf(EventEmitter);
  });

  test('should watch property change', () => {
    const watcher = { set: vi.fn(), get: vi.fn() };
    data.watch('prop', watcher);
    data.propertyChange('prop', 'value');
    expect(watcher.set).toHaveBeenCalledWith({ name: 'prop', value: 'value' });
  });

  test('should get property', () => {
    const watcher = { set: vi.fn(), get: vi.fn(() => 'watcher value') };
    data.watch('prop', watcher);
    data.data.prop = 'value';
    expect(data.getProperty('prop')).toBe('watcher value');
  });

  test('.from', () => {
    data.from({ prop: 'value' });
    expect(data.data).toMatchObject({ prop: 'value' });
  });

  test('.JSON', () => {
    // data.data = { prop: 'value' };
    data.from({ prop: 'value' });
    console.log('data', data.toJSON());
    expect(data.toJSON()).toEqual({ prop: 'value' });
  });
});

describe('JElementData', () => {
  let elementData;

  beforeEach(() => {
    elementData = new JElementData();
  });

  test('should instantiate', () => {
    expect(elementData).toBeInstanceOf(JElementData);
    expect(elementData).toBeInstanceOf(JData);
  });
});

describe('JImageData', () => {
  let imageData;

  beforeEach(() => {
    imageData = new JImageData();
  });

  test('should instantiate', () => {
    expect(imageData).toBeInstanceOf(JImageData);
    expect(imageData).toBeInstanceOf(JData);
  });
});

describe('JTextData', () => {
  let textData;

  beforeEach(() => {
    textData = new JTextData();
  });

  test('should instantiate', () => {
    expect(textData).toBeInstanceOf(JTextData);
    expect(textData).toBeInstanceOf(JData);
  });
});