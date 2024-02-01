import EventEmiter from './eventEmitter';
export interface IDataItem {
    name: string;
    value: any;
}
export interface IData<T> {
    [key: string]: any;
    watch(name: string, watcher: DataChangeWatch): IData<T>;
    propertyChange(name: string, value: any): any;
    from(data: object): IData<T>;
    toJSON(): object;
}
export type DataChangeWatch = {
    set?: (data: IDataItem) => void;
    get?: (name: string) => any;
};
export default class JData<T extends object> extends EventEmiter implements IData<T> {
    constructor(data?: {});
    data: T;
    watcher: Map<string, DataChangeWatch[]>;
    watch(name: string | Array<string>, watcher: DataChangeWatch): this;
    propertyChange(name: string, value?: any): void;
    getProperty(name: string): any;
    from(data: object): this;
    map(fun?: (name: string, value: any) => any): Array<IDataItem>;
    toJSON(): object;
    static createProxy<T extends JData<T>>(data: T): T;
}
export interface IJElementData {
    top?: string | number;
    left?: string | number;
    width?: string | number;
    height?: string | number;
    rotation?: number;
    angle?: number;
    visible?: boolean;
    zIndex?: number;
}
export declare class JElementData extends JData<JElementData> implements IJElementData {
    constructor(data?: any);
    top: string | number;
    left: string | number;
    width: string | number;
    height: string | number;
    rotation: number;
    angle: number;
    visible: boolean;
    zIndex: number;
}
export interface IJImageData extends IJElementData {
    src?: string;
}
export interface IJSvgData extends IJElementData {
    url?: string;
    svg?: string;
}
export declare class JImageData extends JElementData implements IJImageData {
    src: string;
}
export declare class JSvgData extends JImageData implements IJSvgData {
    url: string;
    svg: string;
}
export interface IJTexteData extends IJElementData {
    text?: string;
}
export declare class JTextData extends JElementData implements IJTexteData {
    text: string;
}
export interface IJFontData {
    label: string;
    family: string;
    url: string;
}
