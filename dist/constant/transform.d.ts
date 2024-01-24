export interface StyleTransform {
    translateX?: string | number;
    translateY?: string | number;
    translateZ?: string | number;
    rotateX?: number;
    rotateY?: number;
    rotateZ?: number;
    scaleX?: number;
    scaleY?: number;
    scaleZ?: number;
    skewX?: number;
    skewY?: number;
}
export default class Transform implements StyleTransform {
    constructor(option?: StyleTransform, el?: any);
    target?: any;
    translateX: string | number;
    translateY: string | number;
    translateZ: string | number;
    rotateX: number;
    rotateY: number;
    rotateZ: number;
    scaleX: number;
    scaleY: number;
    scaleZ: number;
    skewX: number;
    skewY: number;
    from(data: StyleTransform): void;
    apply(el?: any): void;
    bind(target: any): void;
    static createProxy(obj?: StyleTransform, el?: any): Transform;
    toString(): string;
    toJSON(): {
        translateX: string | number;
        translateY: string | number;
        translateZ: string | number;
        rotateX: number;
        rotateY: number;
        rotateZ: number;
        scaleX: number;
        scaleY: number;
        scaleZ: number;
        skewX: number;
        skewY: number;
    };
}
