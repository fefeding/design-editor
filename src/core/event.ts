import { addEvent, removeEvent } from "../lib/dom";

export const SupportEventNames = [
    'mousedown','mouseup','mouseover','mousemove','mouseout','mousewheel','click','dblclick','keydown','keypress','keyup','blur','change','focus','drag','dragenter','dragleave','dragover','dragstart','drop', 'contextmenu'
];

export default class JEvent {
    target: HTMLElement;

    constructor(target?: HTMLElement) {
        if(target) this.target = target;
    }

    // 规范化事件名
    normalizeEventNames<T extends string|Array<string>>(name: T): Array<string> {
        if(!this.target || !name){
            return [];
        }
        let events = name as string[];
        if(typeof name === 'string') {
            events =  name.split(' ');
        }
        // 过滤掉不支持的事件
        return events.filter(k=>SupportEventNames.includes(k));
    }
    /**
     * 初始化所有支持的事件，在init之前不要bindEvent，不然在init的时候会被释放掉。
     * @param handler 事件处理函数
     * @param target 元素
     */
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement) {
        if(target){
            // 释放掉原target的事件
            this.dispose();
            this.target = target;
        }
        this.bindEvent(SupportEventNames, handler, false);
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
    bindEvent(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false) {
        const events = this.normalizeEventNames(name);
        for(const n of events) {
            addEvent(this.target, n, fun, opt);
            this._eventCache.push([n, fun, opt]);
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
    removeEvent(name: string|Array<string>, fun?: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false) {
        const events = this.normalizeEventNames(name);
        for(const n of events) {
            this._eventCache = this._eventCache.filter(item=>{
                if(item[0] === n){
                    if((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !==item[2])){
                        // DOM 要完全一致才能remove掉
                        return true;
                    }
                    removeEvent(this.target, n, item[1], item[2]);
                    return false;
                }
                return true;
            });
        }
        return this;
    }

    // 移除所有的事件
    dispose() {
        if(!this.target){
            return
        }
        for(let item of this._eventCache){
            removeEvent(this.target, item[0], item[1], item[2]);
        }
        this._eventCache = [];        
    }
}