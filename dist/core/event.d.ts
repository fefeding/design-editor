export declare const SupportEventNames: string[];
export default class JEvent {
    target: HTMLElement;
    constructor(target?: HTMLElement);
    normalizeEventNames<T extends string | Array<string>>(name: T): Array<string>;
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler 事件处理函数
     * @param target 元素
     */
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement): void;
    private _eventCache;
    /**
     * 绑定事件到html对象
     *
     * @method on
     * @static
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 绑定的元素，默认为 this.target
     */
    on(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): this;
    /**
     * 从对象中移除事件
     *
     * @method off
     * 不传 的时候删除所有事件
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 解除绑定的元素，默认为 this.target
     */
    off(name?: string | Array<string>, fun?: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions): this;
    dispose(): void;
}
