import EventEmiter from 'eventemitter3';
export default class EventEmitter extends EventEmiter {
    // 规范化事件名
    private normalizeEventNames<T extends string|symbol|Array<string>>(name: T): Array<string | symbol> {
        if(!name){
            return [];
        }
        if(typeof name === 'string') {
            return name.split(' ');
        }
        return Array.isArray(name) ? name : [name];
    }
    /**
     * Add a listener for a given event.
     */
    on<T extends string|symbol|Array<string>>(event: T, fn: (...args: any[])=>void, context?: any) {
        const events = this.normalizeEventNames(event);
        for(const name of events) {
            name && super.on(name, fn, context);
        }
        return this;
    }

    off<T extends string|symbol|Array<string>>(event: T, fn?: (...args: any[])=>void, context?: any, once?: boolean) {
        const events = this.normalizeEventNames(event);
        for(const name of events) {
            name && super.off(name, fn, context);
        }
        return this;
    }
}