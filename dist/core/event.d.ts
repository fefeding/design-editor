export default class JEvent {
    constructor(target?: HTMLElement);
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement): void;
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
    /**
     * 获取元素事件触发的位置
     *
     * @method getEventPosition
     * @static
     * @param {eventArg} evt 当前触发事件的参数
     * @return {point} 事件触发的位置
     */
    getEventPosition(evt: MouseEvent, target?: any): {
        x: number;
        y: number;
        pageX: number;
        pageY: number;
        isTouch: boolean;
    };
}
