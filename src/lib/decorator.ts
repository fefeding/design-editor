
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
export function Debounce(milliseconds: number = 0): any {
    return function (target: any, propertyKey: string | symbol, descriptor: any) {
        let originalMethod = descriptor.value;
        let timerId: any = null;
        
        descriptor.value = function(...args: any[]) {
            clearTimeout(timerId);
            timerId = setTimeout(() => {
                originalMethod.apply(this, args);
            }, milliseconds);
        };
        return descriptor;
    }
}
