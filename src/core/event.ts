import { JDomElement } from "../constant/elementTypes";

export const SupportEventNames = [
    'mousedown','mouseup','mouseover','mousemove','mouseout', 'mouseleave', 'mousewheel','click','dblclick','keydown','keypress','keyup','blur','change','focus','drag','dragenter','dragleave','dragover','dragstart','drop', 'contextmenu'
];

// 元素监听的自定议事件
export const ElementWatchEventNames = ['select', 'styleChange', 'dataChange', 'elementChange', 'childAdded'];

/**
 * @public
 */
export default class JEvent {
    target: JDomElement;

    constructor(target?: JDomElement) {
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
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler - 事件处理函数
     * @param target - 元素
     */
    init(handler: EventListenerOrEventListenerObject, target?: JDomElement) {
        if(target){
            // 释放掉原target的事件
            this.dispose();
            this.target = target;
        }
        this.on(SupportEventNames, handler, false);
    }

    private _eventCache = [];

    /**
     * 绑定事件到html对象
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    on(name: string | Array<string>, fun: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false) {
        const events = this.normalizeEventNames(name);
        for(const n of events) {
            this.target.addEventListener(n, fun, opt);
            this._eventCache.push([n, fun, opt]);
        };

        return this;
    }

    /**
     * 从对象中移除事件
     * 不传 的时候删除所有事件
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    off(name?: string|Array<string>, fun?: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false) {
        const events = this.normalizeEventNames(name);
        this._eventCache = this._eventCache.filter(item=>{
            if(events.length && !events.includes(item[0])){
                return true;
            }
            if((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !==item[2])){
                // DOM 要完全一致才能被removeEventListener删除掉
                return true;
            }
            this.target.removeEventListener(item[0], item[1], item[2]);
            return false;
        });
        return this;
    }

    // 移除所有的事件
    dispose() {
        this.off();
    }
}