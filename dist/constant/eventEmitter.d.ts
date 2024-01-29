import EventEmiter from 'eventemitter3';
export default class EventEmitter extends EventEmiter {
    splitEventNames(name: string): string[];
    /**
     * Add a listener for a given event.
     */
    on<T extends string | symbol>(event: T, fn: (...args: any[]) => void, context?: any): this;
    off<T extends string | symbol>(event: T, fn?: (...args: any[]) => void, context?: any, once?: boolean): this;
}
