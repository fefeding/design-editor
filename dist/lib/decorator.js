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
export function Debounce(milliseconds) {
    if (milliseconds === void 0) { milliseconds = 0; }
    return function (target, propertyKey, descriptor) {
        var originalMethod = descriptor.value;
        var timerId = null;
        descriptor.value = function () {
            var _this = this;
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            clearTimeout(timerId);
            timerId = setTimeout(function () {
                originalMethod.apply(_this, args);
            }, milliseconds);
        };
        return descriptor;
    };
}
