
export const SupportEventNames = [
    'mousedown','mouseup','mouseover','mousemove','mouseout','mousewheel','click','dblclick','keydown','keypress','keyup','blur','change','focus','drag','dragenter','dragleave','dragover','dragstart','drop', 'contextmenu'
];

export default class JEvent {
    constructor(target?: HTMLElement) {
        if(target) this.target = target;
    }

    // 初始化所有支持的事件
    init(handler: EventListenerOrEventListenerObject, target?: HTMLElement) {
        if(target) this.target = target;
        this.bindEvent(SupportEventNames, handler, false, target);
    }

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
    bindEvent(name: string|Array<string>, fun: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false, target: HTMLElement = this.target) {
        if(Array.isArray(name)) {
            for(const n of name) {
                this.bindEvent(n, fun, opt, target);
            }
            return this;
        }
        if(name &&  name.indexOf && name.indexOf(' ') != -1) {
            const ns = name.split(' ');
            return this.bindEvent(ns, fun, opt, target);
        }
        /*// @ts-ignore
        if(target.attachEvent) {
            // @ts-ignore
            target.attachEvent("on"+name, fun, opt);
        } */   
        if(target.addEventListener) {
            target.addEventListener(name, fun, opt);
        }
        return this;
    }

    /**
     * 从对象中移除事件到
     * 
     * @method removeEvent
     * @static
     * @param {element} html元素对象
     * @param {string} name 事件名称
     * @param {function} fun 事件委托
     */
    removeEvent(name: string, fun: EventListenerOrEventListenerObject, opt: boolean | AddEventListenerOptions = false, target: HTMLElement = this.target) {
        if(target.removeEventListener) {
            target.removeEventListener(name, fun, opt);
        }  
        // @ts-ignore  
        else if(target.detachEvent) {
            // @ts-ignore
            target.detachEvent('on' + name, fun, opt);
        }
        else {
            target['on' + name] = null;
        }
        return this;
    }
}