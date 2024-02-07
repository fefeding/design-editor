import EventEmiter from 'eventemitter3';
/**
 * EventEmitter 类，继承自 'eventemitter3' 模块的 EventEmiter 类。
 * 用于进行事件的发布与订阅。
 * @public
 */
export default class EventEmitter extends EventEmiter {
    /**
     * 私有方法，用于规范化事件名
     * @param name - 可以是字符串、符号或字符串数组
     * @returns 返回符号或字符串数组
     */
    normalizeEventNames(name) {
        if (!name) {
            return [];
        }
        if (typeof name === 'string') {
            return name.split(' ');
        }
        return Array.isArray(name) ? name : [name];
    }
    /**
     * 为给定的事件添加一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @returns 返回 EventEmitter 实例
     */
    on(event, fn, context) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.on(name, fn, context);
        }
        return this;
    }
    /**
     * 移除给定的事件的一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 可选，监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @param once - 可选，是否只执行一次
     * @returns 返回 EventEmitter 实例
     */
    off(event, fn, context, once) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.off(name, fn, context);
        }
        return this;
    }
}
