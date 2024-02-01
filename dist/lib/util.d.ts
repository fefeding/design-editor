declare const _default: {
    isNumber(v: string | number): boolean;
    isPXNumber(v: string): boolean;
    isDegNumber(v: string): boolean;
    isRadNumber(v: string): boolean;
    toPX(v: string | number): string | number;
    toNumber(v: string | number): number;
    radToDeg(v: number): number;
    degToRad(v: number): number;
    toDeg(v: string | number): any;
    toRad(v: string | number): any;
    /**
     * 获取元素的绝对定位
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
     */
    getElementPosition(el: HTMLElement): {
        y: number;
        x: number;
    };
    getElementBoundingRect(el: HTMLElement): {
        height: number;
        width: number;
        x: number;
        y: number;
    };
    toDomPosition(pos: {
        x: number;
        y: number;
    }, dom: HTMLElement): {
        x: number;
        y: number;
    };
    /**
     * 把一个或多个点绕某个点旋转一定角度
     * 先把坐标原点移到旋转中心点，计算后移回
     * @param  p - 一个或多个点
     * @param  rp -  旋转中心点
     * @param  r - 旋转角度
     */
    rotatePoints<T extends {
        x: number;
        y: number;
    } | {
        x: number;
        y: number;
    }[]>(p: T, center: {
        x: number;
        y: number;
    }, r: number): T;
    css(dom: any, name: string | Object, value?: string | number): any;
    attr(dom: any, name: string, value: string | number | undefined): any;
    uuid(): string;
    rotateImage(url: string, rotation: number): Promise<string>;
    request(url: string, option?: {
        method?: string;
        headers?: {
            [key: string]: string;
        };
        data?: {
            [key: string]: string;
        };
    }): Promise<string>;
};
export default _default;
