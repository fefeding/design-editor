export default class JEvent {
    constructor(target: HTMLElement);
    init(handler: EventListenerOrEventListenerObject): void;
    target: HTMLElement;
    /**
     * 绑定事件到html对象
     *
     * @method bindEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     * @returns {name, fun, target} 返回当前绑定
     */
    bindEvent(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions, target?: HTMLElement): any;
    /**
     * 从对象中移除事件到
     *
     * @method removeEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     */
    removeEvent(name: string, fun: EventListenerOrEventListenerObject, opt?: boolean | AddEventListenerOptions, target?: HTMLElement): this;
}
