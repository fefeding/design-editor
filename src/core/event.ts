import util from "src/lib/util";

const SupportEventNames = [
    'mousedown','mouseup','mouseover','mousemove','mouseout','mousewheel','click','dblclick','keydown','keypress','keyup','blur','change','focus','drag','dragenter','dragleave','dragover','dragstart','drop'
]
export default class JEvent {
    constructor(target: HTMLElement) {
        this.target = target;
    }

    // 初始化所有支持的事件
    init(handler: EventListenerOrEventListenerObject) {
        this.bindEvent(SupportEventNames, handler);
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
    /**
     * 获取元素事件触发的位置
     *
     * @method getEventPosition
     * @static
     * @param {eventArg} evt 当前触发事件的参数
     * @return {point} 事件触发的位置 
     */
    getEventPosition (evt: MouseEvent, target?: any) {
        
        let isTouch = false;
        if(evt instanceof TouchEvent) {
            const touches = evt.changedTouches || evt.targetTouches || evt.touches;
            // @ts-ignore
            evt = touches[0];//兼容touch事件
            isTouch = true;
        }
        let px = evt.pageX || evt.x;
        if(typeof px == 'undefined')  px = evt.clientX + (document.documentElement.scrollLeft || document.body.scrollLeft);    
        let py = evt.pageY || evt.y;
        if(typeof py == 'undefined')  py = evt.clientY + (document.documentElement.scrollTop || document.body.scrollTop);

        let ox = evt.offsetX;
        let oy = evt.offsetY;
        if((typeof ox === 'undefined' && typeof oy === 'undefined') || target) {
            let p = util.getElementPosition((target||evt.target) as HTMLElement);
            ox= px - p.x;
            oy = py - p.y;
        }

        return {
            x: ox,
            y: oy,
            pageX: px,
            pageY: py,
            isTouch: isTouch,
        };
    }
}