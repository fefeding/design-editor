import EventEmiter from 'eventemitter3';
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
export interface TransformWatcher {
    target: any;
    watchProps?: Array<string>;
}
export default class Transform extends EventEmiter implements StyleTransform {
    constructor(option?: StyleTransform, targetOption?: TransformWatcher);
    targets: TransformWatcher[];
    translateX: string | number;
    get translateXString(): string;
    translateY: string | number;
    get translateYString(): string;
    translateZ: string | number;
    get translateZString(): string;
    rotateX: number;
    get rotateXString(): string;
    rotateY: number;
    get rotateYString(): string;
    rotateZ: number;
    get rotateZString(): string;
    scaleX: number;
    get scaleXString(): string;
    scaleY: number;
    get scaleYString(): string;
    scaleZ: number;
    get scaleZString(): string;
    skewX: number;
    get skewXString(): string;
    skewY: number;
    get skewYString(): string;
    from(data: StyleTransform): void;
    apply(target?: TransformWatcher | Array<TransformWatcher>): void;
    bind(target: TransformWatcher): void;
    unbind(target: TransformWatcher): void;
    static createProxy(obj?: StyleTransform, el?: TransformWatcher): Transform;
    toString(watchProps: Array<string> | undefined): string;
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
