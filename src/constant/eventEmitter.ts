import EventEmiter from 'eventemitter3';
export default class EventEmitter extends EventEmiter {
    // 用空格分隔事件名
    splitEventNames(name: string) {
        if(!name) return [];
        const arr = name.split(' ');
        return arr;
    }
    /**
     * Add a listener for a given event.
     */
    on<T extends string|symbol|Array<string>>(event: T, fn: (...args: any[])=>void, context?: any) {
        if(typeof event === 'string') {
            const events = this.splitEventNames(event);
            if(events.length) {
                return this.on(events, fn, context);
            }
        }
        else if(Array.isArray(event)) {
            if(event.length) {
                for(const name of event) {
                    name && super.on(name, fn, context);
                }
            }
        }
        else {
            super.on(event, fn, context);
        }
        return this;
    }

    off<T extends string|symbol|Array<string>>(event: T, fn?: (...args: any[])=>void, context?: any, once?: boolean) {
        if(typeof event === 'string') {
            const events = this.splitEventNames(event);
            if(events.length) {
                return this.off(events, fn, context);
            }
        }
        else if(Array.isArray(event)) {
            if(event.length) {
                for(const name of event) {
                    name && super.off(name, fn, context);
                }
            }
        }
        else {
            super.off(event, fn, context);
        }
        return this;
    }
}