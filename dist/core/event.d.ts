export declare const SupportEventNames: string[];
export declare const ElementWatchEventNames: string[];
/**
 * @public
 */
export default class JEvent {
    target: HTMLElement;
    constructor(target?: HTMLElement);
    normalizeEventNames<T extends string | Array<string>>(name: T): Array<string>;
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler - 事件处理函数
     * @param target - 元素
     */
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement): void;
    private _eventCache;
    /**
     * 绑定事件到html对象
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    on(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): this;
    /**
     * 从对象中移除事件
     * 不传 的时候删除所有事件
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    off(name?: string | Array<string>, fun?: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): this;
    dispose(): void;
}
