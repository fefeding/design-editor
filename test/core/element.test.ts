// @vitest-environment happy-dom
import JElement from '../../src/core/element';
import JTransform from '../../src/constant/transform';
import { expect, describe, test, beforeEach, afterEach } from 'vitest'

describe('JElement Class', () => {
  let element;

  beforeEach(() => {
    element = new JElement({
      id: 'TestElement',
      type: 'TestType',
      style: {
        color: 'red',
        fontSize: '16px'
      }
    });
  });

  test('Element is initialized correctly', () => {
    expect(element.id).toBe('TestElement');
    expect(element.type).toBe('TestType');
    expect(element.style.color).toBe('red');
    expect(element.style.fontSize).toBe('16px');
  });

  test('Transform can be set correctly', () => {
    const transform = new JTransform();
    // @ts-ignore
    transform.x = 100;
    // @ts-ignore
    transform.y = 200;

    element.transform = transform;

    expect(element.transform.x).toBe(100);
    expect(element.transform.y).toBe(200);
  });

  test('Styles can be applied to the element', () => {
    element.style.apply({
      backgroundColor: '#fff',
      fontWeight: 'bold',
    });

    expect(element.style.backgroundColor).toBe('#fff');
    expect(element.style.fontWeight).toBe('bold');
  });

  test('Class name can be set using a setter', () => {
    element.className = 'test-class';
    expect(element.className).toBe('test-class');
  });

  // 测试移动函数
  test('Element can be moved using move method', () => {
    element.move(10, 20);
    expect(element.data.left).toBe(10);
    expect(element.data.top).toBe(20);
  });

  // 测试 resize 函数
  test('Element can be resized using resize method', () => {
    element.resize(500, 400);
    expect(element.data.width).toBe(500);
    expect(element.data.height).toBe(400);
  });

  // 测试 toString 函数
  test('toString method works properly', () => {
    const stringElement = element.toString();
    expect(stringElement).toContain('TestElement');
    expect(stringElement).toContain('TestType');
  });

  // 测试toHTML这个方法，这个方法对Jest的JSDOM进行了依赖
  test('toHtml method works properly', () => {
    const html = element.toHtml();
    expect(html).toContain('div');
  });

  afterEach(() => {
    element = null;
  });
});