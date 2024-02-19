/**
 * 防抖装饰器
 * @example
 ```ts
 class Test {
        @Debounce(1000)
        log() {
            console.log("Debounced output!");
        }
    }
 ```
 * @param milliseconds - 毫秒数
 * @returns
 */
export function Debounce(milliseconds = 0) {
    return function (target, propertyKey, descriptor) {
        let originalMethod = descriptor.value;
        let timerId = null;
        descriptor.value = function (...args) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                originalMethod.apply(this, args);
            }, milliseconds);
        };
        return descriptor;
    };
}
