// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";

import { Debounce } from '../../src/lib/decorator';

vi.useFakeTimers();

describe('@Debounce', () => {
  class Test {
    callCount: number;
    
    constructor() {
      this.callCount = 0;
    }

    @Debounce(100)
    increment() {
      this.callCount++;
    }
  }

  let instance: Test;

  beforeEach(() => {
    instance = new Test();
  });

  test('should only execute the debounced method once after the specified interval', () => {
    instance.increment();
    instance.increment();
    expect(instance.callCount).toBe(0);  // 还没到防抖时间，这时候函数不应该被执行

    vi.advanceTimersByTime(200);  // Fast-forward time
    expect(instance.callCount).toBe(1);  // 到达防抖时间，函数应该被执行 1 次
  });
});