import EventEmiter from './eventEmitter';
/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
export default class JData extends EventEmiter {
    constructor(data = {}) {
        super();
        this.from(data);
    }
    /** 用于存放数据的对象 */
    data = {};
    /** 存放数据变化的监听器 */
    watcher = new Map();
    // 监控某个属性变化
    watch(name, watcher) {
        if (Array.isArray(name)) {
            for (const n of name) {
                if (!n)
                    continue;
                this.watch(n, watcher);
            }
            return this;
        }
        let watches = [];
        if (this.watcher.has(name))
            watches = this.watcher.get(name);
        else {
            this.watcher.set(name, watches);
        }
        watches.push(watcher);
        this.data[name] && this.propertyChange(name); // 触发一次
        return this;
    }
    // 属性改变
    propertyChange(name, value) {
        if (typeof value !== 'undefined')
            this.data[name] = value;
        else {
            value = this.data[name];
        }
        setTimeout(() => {
            const watches = this.watcher.get(name);
            if (watches && watches.length) {
                for (const w of watches) {
                    w && w.set && w.set({
                        name,
                        value
                    });
                }
            }
            this.emit('change', {
                name,
                value
            });
        });
    }
    // 读取属性
    getProperty(name) {
        const watches = this.watcher.get(name);
        if (watches && watches.length) {
            for (const w of watches) {
                const v = w && w.get && w.get(name);
                if (typeof v !== 'undefined')
                    return v;
            }
        }
        return this.data[name];
    }
    /**
     * 从对象中导入数据到当前实例
     * @param data - 需导入的数据对象
     * @returns 返回当前 JData 实例
     */
    from(data) {
        if (this.data)
            Object.assign(this, data);
        return this;
    }
    // 遍历
    map(fun) {
        const props = Object.getOwnPropertyNames(this.data);
        const res = [];
        for (const name of props) {
            if (typeof this[name] === 'undefined' || typeof this[name] === 'function')
                continue;
            const ret = fun && fun(name, this[name]);
            if (ret !== false) {
                res.push({
                    name,
                    value: this[name]
                });
            }
        }
        return res;
    }
    /**
     * 导出数据为 JSON 对象
     * @returns 返回 JSON 对象
     */
    toJSON() {
        const obj = {};
        this.map((name, value) => {
            obj[name] = value;
        });
        return obj;
    }
    // 生成数据Data
    static createProxy(data) {
        // 代理处理
        const proxy = new Proxy(data, {
            get(target, p, receiver) {
                const v = target[p];
                if (typeof v === 'undefined' && typeof p === 'string') {
                    return target.getProperty(p);
                }
                return v;
            },
            set(target, p, value, receiver) {
                if (typeof p === 'string')
                    target.propertyChange(p, value);
                else
                    target[p] = value;
                return true;
            }
        });
        return proxy;
    }
}
/**
 * 元素的基础数据类
 * @public
 */
export class JElementData extends JData {
    constructor(data = {}) {
        super(data);
    }
    top;
    left;
    width;
    height;
    // 旋转弧度
    rotation;
    // 旋转角度
    angle;
    visible;
    zIndex;
}
/**
 * 图片元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
export class JImageData extends JElementData {
    src;
}
/**
 * svg
 * @public
 */
export class JSvgData extends JImageData {
    url;
    svg;
}
/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
export class JTextData extends JElementData {
    text;
}
