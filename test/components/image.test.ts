// @vitest-environment happy-dom
import { expect, describe, test, beforeEach,beforeAll, afterEach, vi } from "vitest";
import JImage  from "../../src/components/image";





describe('JImage', () => {
  let image;
  const mockOnload =  vi.fn();
  const mockOnerror =  vi.fn();

  beforeEach(() => {
    image = new JImage({});
    image.on('load', mockOnload);
    image.on('error', mockOnerror);
    vi.clearAllMocks();
  });

  test('should create instance and load image', () => {
    expect(image).toBeDefined();
    expect(image.target.dom.src).toEqual('');
    expect(image.target.dom.onload).toBeDefined();
    expect(image.target.dom.onerror).toBeDefined();
  });

  test('should set and get src', () => {
    image.data.src = 'test.jpg';
    expect(image.target.dom.src).toEqual('test.jpg');
  });

  test('should call on load when image is loaded', () => {
    image.target.dom.onload();
    expect(mockOnload).toHaveBeenCalled();
  });

  test('should call on error when image load fails', () => {
    image.target.dom.onerror();
    expect(mockOnerror).toHaveBeenCalled();
  });

  test('should serialize to JSON', () => {
    image.data.src = 'test.jpg';
    const json = image.toJSON();
    // console.log(json);
    expect(json).toBeDefined();
    expect(json.data.src).toEqual('test.jpg');
  });
});