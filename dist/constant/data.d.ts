import { IData } from './types';
import EventEmiter from 'eventemitter3';
export default class JData extends EventEmiter implements IData {
    constructor(data?: {});
    from(data: object): JData;
    toJSON(props?: any[]): object;
    static createProxy<T extends JData>(data?: T): void;
}
export declare class ElementData extends JData {
}
