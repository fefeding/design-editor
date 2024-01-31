import { addEvent, removeEvent } from "../lib/dom";

export const SupportEventNames = [
    'mousedown','mouseup','mouseover','mousemove','mouseout','mousewheel','click','dblclick','keydown','keypress','keyup','blur','change','focus','drag','dragenter','dragleave','dragover','dragstart','drop', 'contextmenu'
];

export default class JEvent {
    target: HTMLElement;

    constructor(target?: HTMLElement) {
        if(target) this.target = target;
    }

    // 初始化所有支持的事件
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement) {
        if(target) this.target = target;
        this.bindEvent(SupportEventNames, handler, false, target);
    }

    private _eventCache = [];

    /**
     * 绑定事件到html对象
     * 
     * @method bindEvent
     * @static
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 绑定的元素，默认为 this.target
     */
    bindEvent(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false, target: HTMLElement = this.target) {
        if(typeof name === 'string') {
            name = name.split(' ');
        }
        for(const n of name) {
            addEvent(target, n, fun, opt);
            this._eventCache.push([target, n, fun, opt]);
        };

        return this;
    }

    /**
     * 从对象中移除事件
     * 
     * @method removeEvent
     * @static
     * @param {string | Array<string>} name 事件名称
     * @param {EventListenerOrEventListenerObject} fun 事件处理函数
     * @param {boolean | AddEventListenerOptions} opt 配置选项
     * @param {HTMLElement} target 解除绑定的元素，默认为 this.target
     */
    removeEvent(name: string|Array<string>, fun?: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false, target: HTMLElement = this.target) {
        if(typeof name === 'string') {
            name = name.split(' ');
        }
        for(const n of name) {
            removeEvent(target, n, fun, opt);
            this._eventCache = this._eventCache.filter(item=>!(item[0] === target && item[1] === n && item[2] === fun && item[3] === opt));
        }
        return this;
    }

    // 移除所有的事件
    dispose() {
        for(let item of this._eventCache){
            this.removeEvent(item[1], item[2], item[3], item[0]);
        }
        this._eventCache = [];
    }
}