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
    attr(dom: any, name: string, value?: string | number): any;
    setRange(dom?: HTMLElement, position?: import("j-design-util").Point): void;
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
