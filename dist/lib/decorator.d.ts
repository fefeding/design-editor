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
export declare function Debounce(milliseconds?: number): any;
