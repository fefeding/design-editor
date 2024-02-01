import EventEmiter from 'eventemitter3';
export default class EventEmitter extends EventEmiter {
    private normalizeEventNames;
    /**
     * Add a listener for a given event.
     */
    on<T extends string | symbol | Array<string>>(event: T, fn: (...args: any[]) => void, context?: any): this;
    off<T extends string | symbol | Array<string>>(event: T, fn?: (...args: any[]) => void, context?: any, once?: boolean): this;
}
