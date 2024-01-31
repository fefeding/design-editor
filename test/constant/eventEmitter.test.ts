// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";

import EventEmitter from '../../src/constant/eventEmitter.ts';
describe('EventEmitter', () => {
  let emitter;
  let callback;

  beforeEach(() => {
    emitter = new EventEmitter();
    callback = vi.fn();
  });

  test('should register a single event', () => {
    emitter.on('event1', callback);
    emitter.emit('event1');
    expect(callback).toHaveBeenCalled();
  });

  test('should register multiple events separated by space', () => {
    emitter.on('event1 event2', callback);
    emitter.emit('event1');
    emitter.emit('event2');
    expect(callback).toHaveBeenCalledTimes(2);
  });

  test('should unregister a single event', () => {
    emitter.on('event1', callback);
    emitter.off('event1', callback);
    emitter.emit('event1');
    expect(callback).not.toHaveBeenCalled();
  });

  test('should unregister multiple events separated by space', () => {
    emitter.on('event1 event2', callback);
    emitter.off('event1 event2', callback);
    emitter.emit('event1');
    emitter.emit('event2');
    expect(callback).not.toHaveBeenCalled();
  });

  test('splitEventNames function', () => {
    const result = emitter.splitEventNames('event1 event2');
    expect(result).toEqual(['event1', 'event2']);
  });

  test('splitEventNames with no name', () => {
    const result = emitter.splitEventNames('');
    expect(result).toEqual([]);
  });
});