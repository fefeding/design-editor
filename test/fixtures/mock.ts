import {
  vi,
} from "vitest";



export default function () {
  let FontFaceMock;
  FontFaceMock = vi.fn().mockImplementation((family, url) => ({
    family,
    status: "unloaded",
    load: vi.fn().mockImplementation(function () {
      this.status = "loaded";
      return Promise.resolve(this);
    }),
  }));
  window.FontFace = FontFaceMock;

  Object.defineProperty(document, "fonts", {
    value: {
      add: vi.fn(),
      values: vi.fn().mockReturnValue({
        next: vi.fn().mockReturnValue({
          value: null,
          done: true,
        }),
        [Symbol.iterator]: function () {
          return this;
        },
      }),
    },
    writable: true,
    enumerable: true,
    configurable: true,
  });
  
  const mockContext = {
    src: '',
    clearRect: vi.fn(),
    translate: vi.fn(),
    rotate: vi.fn(),
    drawImage: vi.fn((img)=>{mockContext.src = img.src;}),
    toDataURL: vi.fn()
};
  // 创建 mock Image
  Image.prototype.onload = vi.fn();
  const mockImage = new Image();
  // 覆盖默认的 Image 构造函数
  window.Image = vi.fn(() => {
    // @ts-ignore
    setTimeout(()=>mockImage.onload(new Event('load')));
    return mockImage;
  }) as any;
  window.HTMLCanvasElement.prototype.getContext = vi.fn(() => mockContext) as any;
  window.HTMLCanvasElement.prototype.toDataURL = vi.fn(() => mockContext.src);
  return {
    FontFaceMock
  }
}
