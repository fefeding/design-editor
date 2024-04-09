var util = {
    /**
     * 是否是数字，字符串数字或配身就是number返回true
     * @param v 原字符串或数字
     * @returns true/false
     */
    isNumber(v) {
        return typeof v === 'number' || /^\s*[\d]+(\.\d+)?\s*$/.test(v);
    },
    /**
     * 是否是带像素单位(px)的字符串
     * @param v
     * @returns
     */
    isPXNumber(v) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    /**
     * 是否是带角度单位(deg)的字符串
     * @param v
     * @returns
     */
    isDegNumber(v) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    /**
     * 是否是带弧度单位(rad)的字符串
     * @param v
     * @returns
     */
    isRadNumber(v) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    /**
     * 转为像素字符串格式 : 2 -> 2px
     * @param v
     * @returns
     */
    toPX(v) {
        if (this.isNumber(v) || !this.isPXNumber(v))
            return v + 'px';
        return v + '';
    },
    /**
     * 带像素或其它单位的转换为数字: 2px -> 2
     * @param v
     * @param fractionDigits 保留小数位
     * @returns
     */
    toNumber(v, fractionDigits) {
        if (this.isNumber(v))
            v = Number(v);
        else if (typeof v === 'string')
            v = (parseFloat(v) || 0);
        if (typeof fractionDigits !== 'undefined') {
            v = Number(v.toFixed(fractionDigits));
        }
        return v;
    },
    /**
     * 弧度转角度: Math.PI -> 180
     * @param v
     * @returns
     */
    radToDeg(v) {
        return v * (180 / Math.PI);
    },
    /**
     * 角度转弧度 180 -> Math.PI
     * @param v
     * @returns
     */
    degToRad(v) {
        return v * (Math.PI / 180);
    },
    /**
     * 转为角度格式 1 -> 1deg, 3.14rad -> 180deg
     * @param v
     * @returns
     */
    toDeg(v) {
        if (this.isNumber(v))
            return v + 'deg';
        if (typeof v === 'string' && this.isRadNumber(v))
            return this.toDeg(this.radToDeg(parseFloat(v)));
        return v + '';
    },
    /**
     * 转为弧度格式, 1 -> 1rad,  180deg -> 3.14rad
     * @param v
     * @returns
     */
    toRad(v) {
        if (this.isNumber(v))
            return v + 'rad';
        if (typeof v === 'string' && this.isDegNumber(v))
            return this.toRad(this.degToRad(parseFloat(v)));
        return v + '';
    },
    /**
     * 把数值按比例转为目标数值，比如rgba的 0.5-》0.5*255
     * @param v
     * @param multiple 比例值，默认255
     */
    toMultipleInt(v, multiple = 1) {
        return Math.ceil(v * multiple);
    },
    /**
     * 把rgba颜色转为rgba()串型式
     * multiple倍数，如果是小数，则需要*255转到标准值
     */
    colorToString(color, multiple = 1) {
        let str = `${this.toMultipleInt(color.r, multiple)},${this.toMultipleInt(color.g, multiple)},${this.toMultipleInt(color.b, multiple)}`;
        if (typeof color.a !== 'undefined') {
            str = `rgba(${str},${color.a})`;
        }
        else {
            str = `rgb(${str})`;
        }
        return str;
    },
    /**
     * 获取元素的绝对定位
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
     */
    getElementPosition(el) {
        const pos = { "y": 0, "x": 0 };
        if (!el)
            return pos;
        if (el.offsetParent) {
            while (el.offsetParent) {
                pos.y += el.offsetTop;
                pos.x += el.offsetLeft;
                el = el.offsetParent;
            }
        }
        // @ts-ignore
        else if (el.x) {
            // @ts-ignore
            pos.x += el.x;
        }
        // @ts-ignore
        else if (el.y) {
            // @ts-ignore
            pos.y += el.y;
        }
        return pos;
    },
    /**
     * 获取元素bounds
     * @param el
     * @returns
     */
    getElementBoundingRect(el) {
        let bounds = {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        };
        if (el.getBoundingClientRect) {
            bounds = el.getBoundingClientRect();
            const scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            bounds.x += scrollLeft;
            bounds.y += scrollTop;
        }
        else {
            const pos = this.getElementPosition(el);
            bounds.x = pos.x;
            bounds.y = pos.y;
            bounds.width = el.clientWidth;
            bounds.height = el.clientHeight;
        }
        return bounds;
    },
    /**
     * 把domcument坐标转为指定元素相对坐标
     * @param pos
     * @param dom
     * @returns
     */
    toDomPosition(pos, dom) {
        const domPos = this.getElementBoundingRect(dom);
        return {
            x: pos.x - domPos.x,
            y: pos.y - domPos.y
        };
    },
    /**
     * 把一个或多个点绕某个点旋转一定角度
     * 先把坐标原点移到旋转中心点，计算后移回
     * @param  p - 一个或多个点
     * @param  rp -  旋转中心点
     * @param  r - 旋转角度
     */
    rotatePoints(p, center, r) {
        if (!r || !p)
            return p;
        let cos = Math.cos(r);
        let sin = Math.sin(r);
        if (Array.isArray(p)) {
            for (let i = 0; i < p.length; i++) {
                if (!p[i])
                    continue;
                let x1 = p[i].x - center.x;
                let y1 = p[i].y - center.y;
                p[i].x = x1 * cos - y1 * sin + center.x;
                p[i].y = x1 * sin + y1 * cos + center.y;
            }
        }
        else {
            let x1 = p.x - center.x;
            let y1 = p.y - center.y;
            p.x = x1 * cos - y1 * sin + center.x;
            p.y = x1 * sin + y1 * cos + center.y;
        }
        return p;
    },
    /**
     * 设置dom样式
     * @param dom
     * @param name
     * @param value
     * @returns
     */
    css(dom, name, value) {
        if (!name)
            return;
        if (typeof name === 'object') {
            for (const n of Object.getOwnPropertyNames(name)) {
                this.css(dom, n, name[n]);
            }
        }
        else {
            dom.style[name] = value;
        }
        return this;
    },
    /**
     * 设置或读取dom属性
     * @param dom
     * @param name
     * @param value
     * @returns
     */
    attr(dom, name, value) {
        if (typeof value !== 'undefined') {
            dom.setAttribute(name, value + '');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    /**
     * 设置class样式
     * @param dom 节点
     * @param name 样式名
     * @param remove 如果true则表示删除样式
     */
    class(dom, name, remove = false) {
        if (Array.isArray(name)) {
            for (const n of name) {
                this.class(dom, n, remove);
            }
            return;
        }
        if (remove) {
            dom.classList.remove(name);
        }
        else {
            if (!dom.classList.contains(name))
                dom.classList.add(name);
        }
    },
    /**
     * 设置光标位置
     * @param dom 元素 htmlelement
     */
    setRange(dom, position) {
        let range;
        if (position) {
            //@ts-ignore
            range = document.caretPositionFromPoint ? document.caretPositionFromPoint(position.x, position.y) : document.caretRangeFromPoint(position.x, position.y);
        }
        else {
            // 把光标置于最后
            range = document.createRange();
            if (dom) {
                const nodes = dom.childNodes;
                if (nodes.length) {
                    const last = nodes[nodes.length - 1];
                    range.setStart(last, last.textContent.length);
                }
            }
        }
        const sel = window.getSelection();
        range.collapse(true);
        sel.removeAllRanges();
        sel.addRange(range);
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid() {
        const time = Date.now();
        const rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    /**
     * 获取二点在标准坐标系中的的弧度, 返回值为 0 ~ Math.PI*2
     * @param start
     * @param end
     */
    getPointCoordRotation(start, end) {
        const dy = end.y - start.y;
        const dx = end.x - start.x;
        if (dx === 0) {
            if (dy > 0)
                return Math.PI + Math.PI / 2;
            else if (dy < 0)
                return Math.PI / 2;
            else
                return 0;
        }
        else if (dy === 0) {
            if (dx > 0)
                return 0;
            else if (dx < 0)
                return Math.PI;
            else
                return 0;
        }
        const r = Math.atan2(dy, dx);
        return r <= 0 ? Math.abs(r) : (Math.PI * 2 - r);
    },
    /**
     * 把图片旋转一定角度，返回base64
     * @param url
     * @param rotation
     * @returns
     */
    async rotateImage(url, rotation) {
        if (!url)
            return url;
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.setAttribute('crossorigin', 'anonymous');
            img.onload = function (e) {
                const cvs = document.createElement('canvas');
                cvs.width = img.width;
                cvs.height = img.height;
                const ctx = cvs.getContext('2d');
                ctx.clearRect(0, 0, cvs.width, cvs.height);
                ctx.translate(cvs.width / 2, cvs.height / 2);
                ctx.rotate(rotation);
                ctx.translate(-cvs.width / 2, -cvs.height / 2);
                ctx.drawImage(img, 0, 0);
                const data = cvs.toDataURL();
                resolve(data);
            };
            img.onerror = function (e) {
                reject && reject(e);
            };
            img.src = url;
        });
    },
    /**
     * 请求远程资源
     * @param url
     * @param option
     * @returns
     */
    async request(url, option) {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest(); //新建XMLHttpRequest对象
            const params = [];
            if (option.data) {
                for (const name in option.data) {
                    params.push(`${name}=${encodeURIComponent(option.data[name])}`);
                }
            }
            const method = option.method ? option.method.toUpperCase() : 'GET';
            if (method === 'GET') {
                url += (url.includes('?') ? '&' : '?') + params.join('&');
            }
            request.onreadystatechange = function (e) {
                if (this.readyState === 4) { //成功完成
                    //判断相应结果：
                    if (this.status === 200) {
                        resolve(this.responseText);
                    }
                    else {
                        reject(e);
                    }
                }
            };
            //发送请求：
            request.open(method, url);
            if (option.headers) {
                for (const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
            request.send(method === 'POST' ? params.join('&') : null);
        });
    }
};

const fullCircleRadius = Math.PI * 2;
/**
 * 操作杠指针配置
 */
const Cursors = {
    data: {
        'l': '',
        'lt': '',
        't': '',
        'tr': '',
        'r': '',
        'rb': '',
        'b': '',
        'lb': '',
        'rotate': '',
        'skew': 'pointer'
    },
    // 根据角度旋转指针
    async get(dir, rotation = 0, data = this.data) {
        if (dir === 'rotate' || dir === 'skew')
            return data[dir] || 'pointer';
        if (Math.abs(rotation) > fullCircleRadius)
            rotation = rotation % fullCircleRadius;
        // 2PI 为一个圆，把角度转为一个圆内的值，以免重复生成图片
        const rotationKey = Number(rotation.toFixed(2)); // 精度只取小数2位
        const key = rotationKey === 0 ? dir : `${dir}_${rotationKey}`;
        let cursor = data[key];
        if (!cursor) {
            if (dir === 'l' || dir === 'r' || dir === 't' || dir === 'b') {
                // 如果没有旋转角度，则把ns转90度即可
                if (rotation === 0) {
                    if (!data['t'])
                        return 'pointer';
                    // b t 同指针
                    if (dir === 'b') {
                        cursor = data[dir] = data['t'];
                    }
                    else {
                        cursor = await util.rotateImage(data['t'], Math.PI / 2);
                        if (!data['l'])
                            data['l'] = cursor;
                        if (!data['r'])
                            data['r'] = cursor;
                    }
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0, data);
                    if (!normal || normal === 'pointer')
                        return 'pointer';
                    cursor = await util.rotateImage(normal, rotation);
                    data[key] = cursor;
                }
            }
            else if (dir === 'tr' || dir === 'lb' || dir === 'lt' || dir === 'rb') {
                // 如果没有旋转角度，则把nwse转90度即可
                if (rotation === 0) {
                    if (!data['lt'])
                        return 'pointer';
                    // rb lt同一个指针
                    if (dir === 'rb') {
                        cursor = data[dir] = data['lt'];
                    }
                    else {
                        cursor = await util.rotateImage(data['lt'], Math.PI / 2);
                        if (!data['tr'])
                            data['tr'] = cursor;
                        if (!data['lb'])
                            data['lb'] = cursor;
                    }
                }
                // 如果有旋转角度，则获取标准的再转对应的角度
                else {
                    const normal = await this.get(dir, 0, data);
                    if (!normal || normal === 'pointer')
                        return 'pointer';
                    cursor = await util.rotateImage(normal, rotation);
                    data[key] = cursor;
                }
            }
        }
        return cursor;
    }
};
/**
 * 因为旋转后坐标要回原才好计算操作，
 * @param offset
 * @param oldPosition
 * @param newPosition
 * @param rotation
 * @param center
 * @returns
 */
const getRotateEventPosition = (offset, oldPosition, newPosition, rotation, center) => {
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (rotation) {
        const [pos1, pos2] = util.rotatePoints([oldPosition, newPosition], center, -rotation);
        offset.x = pos2.x - pos1.x;
        offset.y = pos2.y - pos1.y;
    }
    return offset;
};
/**
 *  发生旋转, 计算得到的旋转角度
 */
const rotateChange = (oldPosition, newPosition, center) => {
    // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
    const cx1 = oldPosition.x - center.x;
    const cy1 = oldPosition.y - center.y;
    let angle1 = Math.atan(cy1 / cx1);
    const cx2 = newPosition.x - center.x;
    const cy2 = newPosition.y - center.y;
    let angle2 = Math.atan(cy2 / cx2);
    if (angle1 >= 0 && angle2 < 0) {
        if (cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0)
            angle2 = Math.PI + angle2;
        else if (cx1 <= 0 && cy1 <= 0 && cx2 >= 0 && cy2 <= 0)
            angle2 = Math.PI + angle2;
        //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
    }
    else if (angle1 <= 0 && angle2 >= 0) {
        if (cx1 >= 0 && cy1 <= 0 && cx2 < 0)
            angle2 = angle2 - Math.PI;
        else
            angle2 = -angle2;
    }
    else ;
    return angle2 - angle1;
};
/**
 *  根据操作参数，计算位移，大小和旋转角度等
 */
const getChangeData = (dir, offset, oldPosition, newPosition, center, rotation = 0) => {
    // 当前移动对原对象的改变
    const args = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        rotation: 0,
        skew: {
            x: 0,
            y: 0
        }
    };
    // 先回原坐标，再主算偏移量，这样保证操作更容易理解
    if (rotation) {
        offset = getRotateEventPosition(offset, oldPosition, newPosition, rotation, center);
    }
    switch (dir) {
        case 'l': {
            args.x = offset.x;
            args.width = -offset.x;
            break;
        }
        case 't': {
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'r': {
            args.width = offset.x;
            break;
        }
        case 'b': {
            args.height = offset.y;
            break;
        }
        case 'lt': {
            args.x = offset.x;
            args.width = -offset.x;
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'tr': {
            args.width = offset.x;
            args.y = offset.y;
            args.height = -offset.y;
            break;
        }
        case 'rb': {
            args.width = offset.x;
            args.height = offset.y;
            break;
        }
        case 'lb': {
            args.x = offset.x;
            args.width = -offset.x;
            args.height = offset.y;
            break;
        }
    }
    // 如果中心发生了偏移，则新中心点要移到绕原中心点旋转当前旋转角度的点，才举使图形移动不正常
    if (rotation && (args.x || args.y || args.width || args.height)) {
        const newCenter = {
            x: center.x + args.x + args.width / 2,
            y: center.y + args.y + args.height / 2
        };
        const targetCenter = util.rotatePoints({ ...newCenter }, center, rotation);
        args.x += targetCenter.x - newCenter.x;
        args.y += targetCenter.y - newCenter.y;
    }
    return args;
};

/**
 * 滤镜数据
 */
class FilterData {
    /**
     * 名称
     */
    name;
    /**
     * 中文名
     */
    displayName;
    /**
     * 配置值
     */
    option;
}
class BaseFilterOption {
    constructor(option) {
        if (option) {
            if (typeof option === 'string' || typeof option === 'number') {
                this.value = option;
            }
            else {
                this.value = option.value;
            }
        }
    }
    value;
    toString() {
        return this.value.toString();
    }
    toJSON() {
        return {
            value: this.value
        };
    }
    clone() {
        const obj = new BaseFilterOption();
        // @ts-ignore
        if (this.value && this.value.clone)
            obj.value = this.value.clone();
        else
            obj.value = this.value;
        return obj;
    }
}
class ShadowFilterOptionValue {
    constructor(data) {
        if (data) {
            this.x = data.x;
            this.y = data.y;
            this.blur = data.blur;
            this.color = data.color;
        }
    }
    x;
    y;
    blur;
    color;
    toJSON() {
        return {
            x: this.x,
            y: this.y,
            blur: this.blur || '',
            color: this.color || ''
        };
    }
    toString() {
        return `${this.x} ${this.y} ${this.blur || 0} ${this.color || '#000'}`;
    }
    clone() {
        return new ShadowFilterOptionValue(this);
    }
}
class ShadowFilterOption extends BaseFilterOption {
    constructor(option) {
        super();
        if (option) {
            // @ts-ignore
            if (option instanceof ShadowFilterOption || option.value)
                this.value = new ShadowFilterOptionValue(option.value);
            else
                this.value = new ShadowFilterOptionValue(option);
        }
    }
    toString() {
        return this.value.toString();
    }
}

class Filter {
    constructor(option) {
        if (option) {
            if (option instanceof FilterData) {
                this.name = option.name;
                this.displayName = option.displayName;
                option = option.option;
            }
            if (option instanceof BaseFilterOption) {
                this.option = option;
            }
            else if (typeof option === 'object') {
                this.option = new BaseFilterOption(option);
            }
        }
    }
    name;
    displayName;
    /**
    * 配置值
    */
    option;
    /**
     * 创建同类型的滤镜
     * @param option 滤镜参数
     * @returns
     */
    create(option = this.option, name = this.name, displayName = this.displayName, filterType = Filter) {
        const data = new FilterData();
        data.name = name;
        data.displayName = displayName;
        // @ts-ignore
        data.option = option.clone ? option.clone() : option;
        const obj = new filterType(data);
        return obj;
    }
    // 转成json
    toJSON() {
        return {
            name: this.name || '',
            displayName: this.displayName || '',
            option: this.option.toJSON()
        };
    }
    toString() {
        if (!this.name)
            return '';
        return `${this.name}(${this.option.toString()})`;
    }
}
/**
 * 反色滤镜
 */
class InvertFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 1 }, option);
        super(option);
    }
    name = 'invert';
    displayName = '反色';
}
/**
 * 模糊滤镜 value: 4px
 */
class BlurFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: '4px' }, option);
        super(option);
    }
    name = 'blur';
    displayName = '模糊';
}
/**
 * 亮度滤镜 value: 0-100
 */
class BrightnessFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 2 }, option);
        super(option);
    }
    name = 'brightness';
    displayName = '亮度';
}
/**
 * 灰度滤镜 value: 0-1
 */
class GrayscaleFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 1 }, option);
        super(option);
    }
    name = 'grayscale';
    displayName = '灰度';
}
/**
 * 复古滤镜 value: 0-1
 */
class SepiaFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 1 }, option);
        super(option);
    }
    name = 'sepia';
    displayName = '复古';
}
/**
 * 旋转滤镜 value: 0-360deg 角度 或 弧度 0-2*Math.PI rad
 */
class HueRotateFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: '240deg' }, option);
        super(option);
    }
    name = 'hue-rotate';
    displayName = '旋转';
}
/**
 * 透明度 value: 0-1
 */
class OpacityFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 0.8 }, option);
        super(option);
    }
    name = 'opacity';
    displayName = '透明度';
}
/**
 * 阴影滤镜
 */
class DropShadowFilter extends Filter {
    constructor(option) {
        if (!option)
            option = new ShadowFilterOption();
        option.value = new ShadowFilterOptionValue(option.value || {
            x: '0',
            y: '0',
            blur: '4px',
            color: '#000'
        });
        super(option);
    }
    name = 'drop-shadow';
    displayName = '阴影';
    /**
      * 创建同类型的滤镜
      * @param option 滤镜参数
      * @returns
      */
    create(option = this.option, name = this.name, displayName = this.displayName) {
        const data = new ShadowFilterOption(option);
        const obj = new DropShadowFilter(data);
        obj.name = name;
        obj.displayName = displayName;
        return obj;
    }
}
/**
 * 对比度滤镜  value: 2
 */
class ContrastFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 2 }, option);
        super(option);
    }
    name = 'contrast';
    displayName = '对比度';
}
/**
 * 饱和度滤镜  value: 3
 */
class SaturateFilter extends Filter {
    constructor(option) {
        option = Object.assign({ value: 3 }, option);
        super(option);
    }
    name = 'saturate';
    displayName = '饱和度';
}
const filters = {
    /**
     * 反色滤镜
     */
    invert: new InvertFilter(),
    /**
     * 亮度
     */
    blur: new BlurFilter(),
    /**
     * 亮度
     */
    brightness: new BrightnessFilter(),
    /**
     * 灰度
     */
    grayscale: new GrayscaleFilter(),
    /**
     * 复古
     */
    sepia: new SepiaFilter(),
    /**
     * 旋转滤镜
     */
    hueRotate: new HueRotateFilter(),
    /**
     * 阴影
     */
    dropShadow: new DropShadowFilter(),
    /**
     * 透明度
     */
    opacity: new OpacityFilter(),
    /**
     * 对比度
     */
    contrast: new ContrastFilter(),
    /**
     * 饱和度
     */
    saturate: new SaturateFilter(),
};

class CSSFilters {
    constructor(target, filters) {
        if (target)
            this.target = target;
        if (filters && filters.length) {
            this.add(filters);
        }
    }
    // 所有支持的滤镜
    filters = new Array();
    /**
     * 绑定的dom否元素对象
     */
    target;
    /**
     * 当前滤镜个数
     */
    get count() {
        return this.filters.length;
    }
    /**
     * 根据滤镜名获取滤镜对象
     * @param name
     * @returns
     */
    get(name) {
        for (const f of this.filters) {
            if (f.name === name)
                return f;
        }
    }
    clear() {
        this.filters.splice(0, this.filters.length);
    }
    /**
     * 添加滤镜
     * @param filter
     */
    add(filter, option) {
        if (Array.isArray(filter)) {
            for (const f of filter) {
                this.add(f, option);
            }
            return;
        }
        else if (typeof filter === 'string') {
            const filterObj = filters[filter];
            if (!filterObj) {
                console.error(`${filter}不存在`);
                return;
            }
            filter = filterObj.create(option || filterObj.option);
            return this.add(filter);
        }
        if (filter.name) {
            const existsFilter = this.get(filter.name);
            if (existsFilter) {
                console.error(`${filter.name}已经存在滤镜集合中，不能重复`);
                return;
            }
        }
        if (filter instanceof Filter) {
            this.filters.push(filter);
            this.apply();
            return;
        }
        else if (filter.name) {
            return this.add(filter.name, filter.option);
        }
    }
    /**
     * 移除滤镜
     * @param filter
     */
    remove(filter) {
        if (Array.isArray(filter)) {
            for (const f of filter)
                this.remove(f);
        }
        else {
            for (let i = this.filters.length - 1; i >= 0; i--) {
                if ((typeof filter === 'string' && this.filters[i].name === filter) || this.filters[i] === filter) {
                    this.filters.splice(i, 1);
                }
            }
        }
        this.apply();
    }
    toJSON() {
        const res = [];
        if (this.count) {
            for (const f of this.filters) {
                res.push(f.toJSON());
            }
        }
        return res;
    }
    toString() {
        const res = [];
        for (const f of this.filters) {
            const r = f.toString();
            if (r)
                res.push(r);
        }
        if (res.length)
            return res.join(' ');
        return '';
    }
    /**
     * 生效
     * @param target
     */
    apply(target = this.target) {
        if (target && target.style)
            target.style.filter = this.toString();
    }
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var eventemitter3 = {exports: {}};

(function (module) {

	var has = Object.prototype.hasOwnProperty
	  , prefix = '~';

	/**
	 * Constructor to create a storage for our `EE` objects.
	 * An `Events` instance is a plain object whose properties are event names.
	 *
	 * @constructor
	 * @private
	 */
	function Events() {}

	//
	// We try to not inherit from `Object.prototype`. In some engines creating an
	// instance in this way is faster than calling `Object.create(null)` directly.
	// If `Object.create(null)` is not supported we prefix the event names with a
	// character to make sure that the built-in object properties are not
	// overridden or used as an attack vector.
	//
	if (Object.create) {
	  Events.prototype = Object.create(null);

	  //
	  // This hack is needed because the `__proto__` property is still inherited in
	  // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
	  //
	  if (!new Events().__proto__) prefix = false;
	}

	/**
	 * Representation of a single event listener.
	 *
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
	 * @constructor
	 * @private
	 */
	function EE(fn, context, once) {
	  this.fn = fn;
	  this.context = context;
	  this.once = once || false;
	}

	/**
	 * Add a listener for a given event.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} context The context to invoke the listener with.
	 * @param {Boolean} once Specify if the listener is a one-time listener.
	 * @returns {EventEmitter}
	 * @private
	 */
	function addListener(emitter, event, fn, context, once) {
	  if (typeof fn !== 'function') {
	    throw new TypeError('The listener must be a function');
	  }

	  var listener = new EE(fn, context || emitter, once)
	    , evt = prefix ? prefix + event : event;

	  if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
	  else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
	  else emitter._events[evt] = [emitter._events[evt], listener];

	  return emitter;
	}

	/**
	 * Clear event by name.
	 *
	 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
	 * @param {(String|Symbol)} evt The Event name.
	 * @private
	 */
	function clearEvent(emitter, evt) {
	  if (--emitter._eventsCount === 0) emitter._events = new Events();
	  else delete emitter._events[evt];
	}

	/**
	 * Minimal `EventEmitter` interface that is molded against the Node.js
	 * `EventEmitter` interface.
	 *
	 * @constructor
	 * @public
	 */
	function EventEmitter() {
	  this._events = new Events();
	  this._eventsCount = 0;
	}

	/**
	 * Return an array listing the events for which the emitter has registered
	 * listeners.
	 *
	 * @returns {Array}
	 * @public
	 */
	EventEmitter.prototype.eventNames = function eventNames() {
	  var names = []
	    , events
	    , name;

	  if (this._eventsCount === 0) return names;

	  for (name in (events = this._events)) {
	    if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
	  }

	  if (Object.getOwnPropertySymbols) {
	    return names.concat(Object.getOwnPropertySymbols(events));
	  }

	  return names;
	};

	/**
	 * Return the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Array} The registered listeners.
	 * @public
	 */
	EventEmitter.prototype.listeners = function listeners(event) {
	  var evt = prefix ? prefix + event : event
	    , handlers = this._events[evt];

	  if (!handlers) return [];
	  if (handlers.fn) return [handlers.fn];

	  for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
	    ee[i] = handlers[i].fn;
	  }

	  return ee;
	};

	/**
	 * Return the number of listeners listening to a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Number} The number of listeners.
	 * @public
	 */
	EventEmitter.prototype.listenerCount = function listenerCount(event) {
	  var evt = prefix ? prefix + event : event
	    , listeners = this._events[evt];

	  if (!listeners) return 0;
	  if (listeners.fn) return 1;
	  return listeners.length;
	};

	/**
	 * Calls each of the listeners registered for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @returns {Boolean} `true` if the event had listeners, else `false`.
	 * @public
	 */
	EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return false;

	  var listeners = this._events[evt]
	    , len = arguments.length
	    , args
	    , i;

	  if (listeners.fn) {
	    if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);

	    switch (len) {
	      case 1: return listeners.fn.call(listeners.context), true;
	      case 2: return listeners.fn.call(listeners.context, a1), true;
	      case 3: return listeners.fn.call(listeners.context, a1, a2), true;
	      case 4: return listeners.fn.call(listeners.context, a1, a2, a3), true;
	      case 5: return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
	      case 6: return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
	    }

	    for (i = 1, args = new Array(len -1); i < len; i++) {
	      args[i - 1] = arguments[i];
	    }

	    listeners.fn.apply(listeners.context, args);
	  } else {
	    var length = listeners.length
	      , j;

	    for (i = 0; i < length; i++) {
	      if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);

	      switch (len) {
	        case 1: listeners[i].fn.call(listeners[i].context); break;
	        case 2: listeners[i].fn.call(listeners[i].context, a1); break;
	        case 3: listeners[i].fn.call(listeners[i].context, a1, a2); break;
	        case 4: listeners[i].fn.call(listeners[i].context, a1, a2, a3); break;
	        default:
	          if (!args) for (j = 1, args = new Array(len -1); j < len; j++) {
	            args[j - 1] = arguments[j];
	          }

	          listeners[i].fn.apply(listeners[i].context, args);
	      }
	    }
	  }

	  return true;
	};

	/**
	 * Add a listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.on = function on(event, fn, context) {
	  return addListener(this, event, fn, context, false);
	};

	/**
	 * Add a one-time listener for a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn The listener function.
	 * @param {*} [context=this] The context to invoke the listener with.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.once = function once(event, fn, context) {
	  return addListener(this, event, fn, context, true);
	};

	/**
	 * Remove the listeners of a given event.
	 *
	 * @param {(String|Symbol)} event The event name.
	 * @param {Function} fn Only remove the listeners that match this function.
	 * @param {*} context Only remove the listeners that have this context.
	 * @param {Boolean} once Only remove one-time listeners.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
	  var evt = prefix ? prefix + event : event;

	  if (!this._events[evt]) return this;
	  if (!fn) {
	    clearEvent(this, evt);
	    return this;
	  }

	  var listeners = this._events[evt];

	  if (listeners.fn) {
	    if (
	      listeners.fn === fn &&
	      (!once || listeners.once) &&
	      (!context || listeners.context === context)
	    ) {
	      clearEvent(this, evt);
	    }
	  } else {
	    for (var i = 0, events = [], length = listeners.length; i < length; i++) {
	      if (
	        listeners[i].fn !== fn ||
	        (once && !listeners[i].once) ||
	        (context && listeners[i].context !== context)
	      ) {
	        events.push(listeners[i]);
	      }
	    }

	    //
	    // Reset the array, or remove it completely if we have no more listeners.
	    //
	    if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
	    else clearEvent(this, evt);
	  }

	  return this;
	};

	/**
	 * Remove all listeners, or those of the specified event.
	 *
	 * @param {(String|Symbol)} [event] The event name.
	 * @returns {EventEmitter} `this`.
	 * @public
	 */
	EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
	  var evt;

	  if (event) {
	    evt = prefix ? prefix + event : event;
	    if (this._events[evt]) clearEvent(this, evt);
	  } else {
	    this._events = new Events();
	    this._eventsCount = 0;
	  }

	  return this;
	};

	//
	// Alias methods names because people roll like that.
	//
	EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
	EventEmitter.prototype.addListener = EventEmitter.prototype.on;

	//
	// Expose the prefix.
	//
	EventEmitter.prefixed = prefix;

	//
	// Allow `EventEmitter` to be imported as module namespace.
	//
	EventEmitter.EventEmitter = EventEmitter;

	//
	// Expose the module.
	//
	{
	  module.exports = EventEmitter;
	} 
} (eventemitter3));

var eventemitter3Exports = eventemitter3.exports;
var EventEmitter = /*@__PURE__*/getDefaultExportFromCjs(eventemitter3Exports);

/**
 * EventEmitter 类，继承自 'eventemitter3' 模块的 EventEmiter 类。
 * 用于进行事件的发布与订阅。
 * @public
 */
class JEventEmitter extends EventEmitter {
    /**
     * 私有方法，用于规范化事件名
     * @param name - 可以是字符串、符号或字符串数组
     * @returns 返回符号或字符串数组
     */
    normalizeEventNames(name) {
        if (!name) {
            return [];
        }
        if (typeof name === 'string') {
            return name.split(' ');
        }
        return Array.isArray(name) ? name : [name];
    }
    /**
     * 为给定的事件添加一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @returns 返回 EventEmitter 实例
     */
    on(event, fn, context) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.on(name, fn, context);
        }
        return this;
    }
    /**
     * 移除给定的事件的一个监听器
     * @param event - 事件名，可以是字符串、符号或字符串数组
     * @param fn - 可选，监听函数，参数列表为可变参数
     * @param context - 可选，上下文对象
     * @param once - 可选，是否只执行一次
     * @returns 返回 EventEmitter 实例
     */
    off(event, fn, context, once) {
        const events = this.normalizeEventNames(event);
        for (const name of events) {
            name && super.off(name, fn, context);
        }
        return this;
    }
}

const topZIndex = 10000;
/**
 * 支持的样式属性列表
 * @public
 */
class JElementStyleDeclaration extends JEventEmitter {
    accentColor;
    alignContent;
    alignItems;
    alignSelf;
    alignmentBaseline;
    all;
    animation;
    animationComposition;
    animationDelay;
    animationDirection;
    animationDuration;
    animationFillMode;
    animationIterationCount;
    animationName;
    animationPlayState;
    animationTimingFunction;
    appearance;
    aspectRatio;
    backdropFilter;
    backfaceVisibility;
    background;
    backgroundAttachment;
    backgroundBlendMode;
    backgroundClip;
    backgroundColor;
    backgroundImage;
    backgroundOrigin;
    backgroundPosition;
    backgroundPositionX;
    backgroundPositionY;
    backgroundRepeat;
    backgroundSize;
    baselineShift;
    blockSize;
    border;
    borderBlock;
    borderBlockColor;
    borderBlockEnd;
    borderBlockEndColor;
    borderBlockEndStyle;
    borderBlockEndWidth;
    borderBlockStart;
    borderBlockStartColor;
    borderBlockStartStyle;
    borderBlockStartWidth;
    borderBlockStyle;
    borderBlockWidth;
    borderBottom;
    borderBottomColor;
    borderBottomLeftRadius;
    borderBottomRightRadius;
    borderBottomStyle;
    borderBottomWidth;
    borderCollapse;
    borderColor;
    borderEndEndRadius;
    borderEndStartRadius;
    borderImage;
    borderImageOutset;
    borderImageRepeat;
    borderImageSlice;
    borderImageSource;
    borderImageWidth;
    borderInline;
    borderInlineColor;
    borderInlineEnd;
    borderInlineEndColor;
    borderInlineEndStyle;
    borderInlineEndWidth;
    borderInlineStart;
    borderInlineStartColor;
    borderInlineStartStyle;
    borderInlineStartWidth;
    borderInlineStyle;
    borderInlineWidth;
    borderLeft;
    borderLeftColor;
    borderLeftStyle;
    borderLeftWidth;
    borderRadius;
    borderRight;
    borderRightColor;
    borderRightStyle;
    borderRightWidth;
    borderSpacing;
    borderStartEndRadius;
    borderStartStartRadius;
    borderStyle;
    borderTop;
    borderTopColor;
    borderTopLeftRadius;
    borderTopRightRadius;
    borderTopStyle;
    borderTopWidth;
    borderWidth;
    bottom;
    boxShadow;
    boxSizing;
    breakAfter;
    breakBefore;
    breakInside;
    captionSide;
    caretColor;
    clear;
    clip;
    clipPath;
    clipRule;
    color;
    colorInterpolation;
    colorInterpolationFilters;
    colorScheme;
    columnCount;
    columnFill;
    columnGap;
    columnRule;
    columnRuleColor;
    columnRuleStyle;
    columnRuleWidth;
    columnSpan;
    columnWidth;
    columns;
    contain;
    containIntrinsicBlockSize;
    containIntrinsicHeight;
    containIntrinsicInlineSize;
    containIntrinsicSize;
    containIntrinsicWidth;
    container;
    containerName;
    containerType;
    content;
    counterIncrement;
    counterReset;
    counterSet;
    cssFloat;
    cssText;
    cursor;
    direction;
    display;
    dominantBaseline;
    emptyCells;
    fill;
    fillOpacity;
    fillRule;
    filter;
    flex;
    flexBasis;
    flexDirection;
    flexFlow;
    flexGrow;
    flexShrink;
    flexWrap;
    float;
    floodColor;
    floodOpacity;
    font;
    fontFamily;
    fontFeatureSettings;
    fontKerning;
    fontOpticalSizing;
    fontPalette;
    fontSize;
    fontSizeAdjust;
    fontStretch;
    fontStyle;
    fontSynthesis;
    fontSynthesisSmallCaps;
    fontSynthesisStyle;
    fontSynthesisWeight;
    fontVariant;
    fontVariantAlternates;
    fontVariantCaps;
    fontVariantEastAsian;
    fontVariantLigatures;
    fontVariantNumeric;
    fontVariantPosition;
    fontVariationSettings;
    fontWeight;
    forcedColorAdjust;
    gap;
    grid;
    gridArea;
    gridAutoColumns;
    gridAutoFlow;
    gridAutoRows;
    gridColumn;
    gridColumnEnd;
    gridColumnGap;
    gridColumnStart;
    gridGap;
    gridRow;
    gridRowEnd;
    gridRowGap;
    gridRowStart;
    gridTemplate;
    gridTemplateAreas;
    gridTemplateColumns;
    gridTemplateRows;
    height;
    hyphenateCharacter;
    hyphens;
    imageOrientation;
    imageRendering;
    inlineSize;
    inset;
    insetBlock;
    insetBlockEnd;
    insetBlockStart;
    insetInline;
    insetInlineEnd;
    insetInlineStart;
    isolation;
    justifyContent;
    justifyItems;
    justifySelf;
    left;
    length;
    letterSpacing;
    lightingColor;
    lineBreak;
    lineHeight;
    listStyle;
    listStyleImage;
    listStylePosition;
    listStyleType;
    margin;
    marginBlock;
    marginBlockEnd;
    marginBlockStart;
    marginBottom;
    marginInline;
    marginInlineEnd;
    marginInlineStart;
    marginLeft;
    marginRight;
    marginTop;
    marker;
    markerEnd;
    markerMid;
    markerStart;
    mask;
    maskClip;
    maskComposite;
    maskImage;
    maskMode;
    maskOrigin;
    maskPosition;
    maskRepeat;
    maskSize;
    maskType;
    mathStyle;
    maxBlockSize;
    maxHeight;
    maxInlineSize;
    maxWidth;
    minBlockSize;
    minHeight;
    minInlineSize;
    minWidth;
    mixBlendMode;
    objectFit;
    objectPosition;
    offset;
    offsetDistance;
    offsetPath;
    offsetRotate;
    opacity;
    order;
    orphans;
    outline;
    outlineColor;
    outlineOffset;
    outlineStyle;
    outlineWidth;
    overflow;
    overflowAnchor;
    overflowClipMargin;
    overflowWrap;
    overflowX;
    overflowY;
    overscrollBehavior;
    overscrollBehaviorBlock;
    overscrollBehaviorInline;
    overscrollBehaviorX;
    overscrollBehaviorY;
    padding;
    paddingBlock;
    paddingBlockEnd;
    paddingBlockStart;
    paddingBottom;
    paddingInline;
    paddingInlineEnd;
    paddingInlineStart;
    paddingLeft;
    paddingRight;
    paddingTop;
    page;
    pageBreakAfter;
    pageBreakBefore;
    pageBreakInside;
    paintOrder;
    parentRule;
    perspective;
    perspectiveOrigin;
    placeContent;
    placeItems;
    placeSelf;
    pointerEvents;
    position;
    printColorAdjust;
    quotes;
    resize;
    right;
    rotate;
    rowGap;
    rubyPosition;
    scale;
    scrollBehavior;
    scrollMargin;
    scrollMarginBlock;
    scrollMarginBlockEnd;
    scrollMarginBlockStart;
    scrollMarginBottom;
    scrollMarginInline;
    scrollMarginInlineEnd;
    scrollMarginInlineStart;
    scrollMarginLeft;
    scrollMarginRight;
    scrollMarginTop;
    scrollPadding;
    scrollPaddingBlock;
    scrollPaddingBlockEnd;
    scrollPaddingBlockStart;
    scrollPaddingBottom;
    scrollPaddingInline;
    scrollPaddingInlineEnd;
    scrollPaddingInlineStart;
    scrollPaddingLeft;
    scrollPaddingRight;
    scrollPaddingTop;
    scrollSnapAlign;
    scrollSnapStop;
    scrollSnapType;
    scrollbarGutter;
    shapeImageThreshold;
    shapeMargin;
    shapeOutside;
    shapeRendering;
    stopColor;
    stopOpacity;
    stroke;
    strokeDasharray;
    strokeDashoffset;
    strokeLinecap;
    strokeLinejoin;
    strokeMiterlimit;
    strokeOpacity;
    strokeWidth;
    tabSize;
    tableLayout;
    textAlign;
    textAlignLast;
    textAnchor;
    textCombineUpright;
    textDecoration;
    textDecorationColor;
    textDecorationLine;
    textDecorationSkipInk;
    textDecorationStyle;
    textDecorationThickness;
    textEmphasis;
    textEmphasisColor;
    textEmphasisPosition;
    textEmphasisStyle;
    textIndent;
    textOrientation;
    textOverflow;
    textRendering;
    textShadow;
    textTransform;
    textUnderlineOffset;
    textUnderlinePosition;
    top;
    touchAction;
    transform;
    transformBox;
    transformOrigin;
    transformStyle;
    transition;
    transitionDelay;
    transitionDuration;
    transitionProperty;
    transitionTimingFunction;
    translate;
    unicodeBidi;
    userSelect;
    verticalAlign;
    visibility;
    whiteSpace;
    widows;
    width;
    willChange;
    wordBreak;
    wordSpacing;
    wordWrap;
    writingMode;
    zIndex;
}
/**
 * 样式属性集合
 * @public
 */
class JElementStyleProperty {
    accentColor = '';
    alignContent = '';
    alignItems = '';
    alignSelf = '';
    alignmentBaseline = '';
    all = '';
    animation = '';
    animationComposition = '';
    animationDelay = '';
    animationDirection = '';
    animationDuration = '';
    animationFillMode = '';
    animationIterationCount = '';
    animationName = '';
    animationPlayState = '';
    animationTimingFunction = '';
    appearance = '';
    aspectRatio = '';
    backdropFilter = '';
    backfaceVisibility = '';
    background = '';
    backgroundAttachment = '';
    backgroundBlendMode = '';
    backgroundClip = '';
    backgroundColor = '';
    backgroundImage = '';
    backgroundOrigin = '';
    backgroundPosition = '';
    backgroundPositionX = '';
    backgroundPositionY = '';
    backgroundRepeat = '';
    backgroundSize = '';
    baselineShift = '';
    blockSize = '';
    border = '';
    borderBlock = '';
    borderBlockColor = '';
    borderBlockEnd = '';
    borderBlockEndColor = '';
    borderBlockEndStyle = '';
    borderBlockEndWidth = '';
    borderBlockStart = '';
    borderBlockStartColor = '';
    borderBlockStartStyle = '';
    borderBlockStartWidth = '';
    borderBlockStyle = '';
    borderBlockWidth = '';
    borderBottom = '';
    borderBottomColor = '';
    borderBottomLeftRadius = '';
    borderBottomRightRadius = '';
    borderBottomStyle = '';
    borderBottomWidth = '';
    borderCollapse = '';
    borderColor = '';
    borderEndEndRadius = '';
    borderEndStartRadius = '';
    borderImage = '';
    borderImageOutset = '';
    borderImageRepeat = '';
    borderImageSlice = '';
    borderImageSource = '';
    borderImageWidth = '';
    borderInline = '';
    borderInlineColor = '';
    borderInlineEnd = '';
    borderInlineEndColor = '';
    borderInlineEndStyle = '';
    borderInlineEndWidth = '';
    borderInlineStart = '';
    borderInlineStartColor = '';
    borderInlineStartStyle = '';
    borderInlineStartWidth = '';
    borderInlineStyle = '';
    borderInlineWidth = '';
    borderLeft = '';
    borderLeftColor = '';
    borderLeftStyle = '';
    borderLeftWidth = '';
    borderRadius = '';
    borderRight = '';
    borderRightColor = '';
    borderRightStyle = '';
    borderRightWidth = '';
    borderSpacing = '';
    borderStartEndRadius = '';
    borderStartStartRadius = '';
    borderStyle = '';
    borderTop = '';
    borderTopColor = '';
    borderTopLeftRadius = '';
    borderTopRightRadius = '';
    borderTopStyle = '';
    borderTopWidth = '';
    borderWidth = '';
    bottom = '';
    boxShadow = '';
    boxSizing = '';
    breakAfter = '';
    breakBefore = '';
    breakInside = '';
    captionSide = '';
    caretColor = '';
    clear = '';
    clip = '';
    clipPath = '';
    clipRule = '';
    color = '';
    colorInterpolation = '';
    colorInterpolationFilters = '';
    colorScheme = '';
    columnCount = '';
    columnFill = '';
    columnGap = '';
    columnRule = '';
    columnRuleColor = '';
    columnRuleStyle = '';
    columnRuleWidth = '';
    columnSpan = '';
    columnWidth = '';
    columns = '';
    contain = '';
    containIntrinsicBlockSize = '';
    containIntrinsicHeight = '';
    containIntrinsicInlineSize = '';
    containIntrinsicSize = '';
    containIntrinsicWidth = '';
    container = '';
    containerName = '';
    containerType = '';
    content = '';
    counterIncrement = '';
    counterReset = '';
    counterSet = '';
    cssFloat = '';
    cssText = '';
    cursor = '';
    direction = '';
    display = '';
    dominantBaseline = '';
    emptyCells = '';
    fill = '';
    fillOpacity = '';
    fillRule = '';
    filter = '';
    flex = '';
    flexBasis = '';
    flexDirection = '';
    flexFlow = '';
    flexGrow = '';
    flexShrink = '';
    flexWrap = '';
    float = '';
    floodColor = '';
    floodOpacity = '';
    font = '';
    fontFamily = '';
    fontFeatureSettings = '';
    fontKerning = '';
    fontOpticalSizing = '';
    fontPalette = '';
    fontSize = '';
    fontSizeAdjust = '';
    fontStretch = '';
    fontStyle = '';
    fontSynthesis = '';
    fontSynthesisSmallCaps = '';
    fontSynthesisStyle = '';
    fontSynthesisWeight = '';
    fontVariant = '';
    fontVariantAlternates = '';
    fontVariantCaps = '';
    fontVariantEastAsian = '';
    fontVariantLigatures = '';
    fontVariantNumeric = '';
    fontVariantPosition = '';
    fontVariationSettings = '';
    fontWeight = '';
    forcedColorAdjust = '';
    gap = '';
    grid = '';
    gridArea = '';
    gridAutoColumns = '';
    gridAutoFlow = '';
    gridAutoRows = '';
    gridColumn = '';
    gridColumnEnd = '';
    gridColumnGap = '';
    gridColumnStart = '';
    gridGap = '';
    gridRow = '';
    gridRowEnd = '';
    gridRowGap = '';
    gridRowStart = '';
    gridTemplate = '';
    gridTemplateAreas = '';
    gridTemplateColumns = '';
    gridTemplateRows = '';
    height = '';
    hyphenateCharacter = '';
    hyphens = '';
    imageOrientation = '';
    imageRendering = '';
    inlineSize = '';
    inset = '';
    insetBlock = '';
    insetBlockEnd = '';
    insetBlockStart = '';
    insetInline = '';
    insetInlineEnd = '';
    insetInlineStart = '';
    isolation = '';
    justifyContent = '';
    justifyItems = '';
    justifySelf = '';
    left = '';
    length;
    letterSpacing = '';
    lightingColor = '';
    lineBreak = '';
    lineHeight = '';
    listStyle = '';
    listStyleImage = '';
    listStylePosition = '';
    listStyleType = '';
    margin = '';
    marginBlock = '';
    marginBlockEnd = '';
    marginBlockStart = '';
    marginBottom = '';
    marginInline = '';
    marginInlineEnd = '';
    marginInlineStart = '';
    marginLeft = '';
    marginRight = '';
    marginTop = '';
    marker = '';
    markerEnd = '';
    markerMid = '';
    markerStart = '';
    mask = '';
    maskClip = '';
    maskComposite = '';
    maskImage = '';
    maskMode = '';
    maskOrigin = '';
    maskPosition = '';
    maskRepeat = '';
    maskSize = '';
    maskType = '';
    mathStyle = '';
    maxBlockSize = '';
    maxHeight = '';
    maxInlineSize = '';
    maxWidth = '';
    minBlockSize = '';
    minHeight = '';
    minInlineSize = '';
    minWidth = '';
    mixBlendMode = '';
    objectFit = '';
    objectPosition = '';
    offset = '';
    offsetDistance = '';
    offsetPath = '';
    offsetRotate = '';
    opacity = '';
    order = '';
    orphans = '';
    outline = '';
    outlineColor = '';
    outlineOffset = '';
    outlineStyle = '';
    outlineWidth = '';
    overflow = '';
    overflowAnchor = '';
    overflowClipMargin = '';
    overflowWrap = '';
    overflowX = '';
    overflowY = '';
    overscrollBehavior = '';
    overscrollBehaviorBlock = '';
    overscrollBehaviorInline = '';
    overscrollBehaviorX = '';
    overscrollBehaviorY = '';
    padding = '';
    paddingBlock = '';
    paddingBlockEnd = '';
    paddingBlockStart = '';
    paddingBottom = '';
    paddingInline = '';
    paddingInlineEnd = '';
    paddingInlineStart = '';
    paddingLeft = '';
    paddingRight = '';
    paddingTop = '';
    page = '';
    pageBreakAfter = '';
    pageBreakBefore = '';
    pageBreakInside = '';
    paintOrder = '';
    parentRule;
    perspective = '';
    perspectiveOrigin = '';
    placeContent = '';
    placeItems = '';
    placeSelf = '';
    pointerEvents = '';
    position = '';
    printColorAdjust = '';
    quotes = '';
    resize = '';
    right = '';
    rotate = '';
    rowGap = '';
    rubyPosition = '';
    scale = '';
    scrollBehavior = '';
    scrollMargin = '';
    scrollMarginBlock = '';
    scrollMarginBlockEnd = '';
    scrollMarginBlockStart = '';
    scrollMarginBottom = '';
    scrollMarginInline = '';
    scrollMarginInlineEnd = '';
    scrollMarginInlineStart = '';
    scrollMarginLeft = '';
    scrollMarginRight = '';
    scrollMarginTop = '';
    scrollPadding = '';
    scrollPaddingBlock = '';
    scrollPaddingBlockEnd = '';
    scrollPaddingBlockStart = '';
    scrollPaddingBottom = '';
    scrollPaddingInline = '';
    scrollPaddingInlineEnd = '';
    scrollPaddingInlineStart = '';
    scrollPaddingLeft = '';
    scrollPaddingRight = '';
    scrollPaddingTop = '';
    scrollSnapAlign = '';
    scrollSnapStop = '';
    scrollSnapType = '';
    scrollbarGutter = '';
    shapeImageThreshold = '';
    shapeMargin = '';
    shapeOutside = '';
    shapeRendering = '';
    stopColor = '';
    stopOpacity = '';
    stroke = '';
    strokeDasharray = '';
    strokeDashoffset = '';
    strokeLinecap = '';
    strokeLinejoin = '';
    strokeMiterlimit = '';
    strokeOpacity = '';
    strokeWidth = '';
    tabSize = '';
    tableLayout = '';
    textAlign = '';
    textAlignLast = '';
    textAnchor = '';
    textCombineUpright = '';
    textDecoration = '';
    textDecorationColor = '';
    textDecorationLine = '';
    textDecorationSkipInk = '';
    textDecorationStyle = '';
    textDecorationThickness = '';
    textEmphasis = '';
    textEmphasisColor = '';
    textEmphasisPosition = '';
    textEmphasisStyle = '';
    textIndent = '';
    textOrientation = '';
    textOverflow = '';
    textRendering = '';
    textShadow = '';
    textTransform = '';
    textUnderlineOffset = '';
    textUnderlinePosition = '';
    top = '';
    touchAction = '';
    transform = '';
    transformBox = '';
    transformOrigin = '';
    transformStyle = '';
    transition = '';
    transitionDelay = '';
    transitionDuration = '';
    transitionProperty = '';
    transitionTimingFunction = '';
    translate = '';
    unicodeBidi = '';
    userSelect = '';
    verticalAlign = '';
    visibility = '';
    webkitAlignContent = '';
    webkitAlignItems = '';
    webkitAlignSelf = '';
    webkitAnimation = '';
    webkitAnimationDelay = '';
    webkitAnimationDirection = '';
    webkitAnimationDuration = '';
    webkitAnimationFillMode = '';
    webkitAnimationIterationCount = '';
    webkitAnimationName = '';
    webkitAnimationPlayState = '';
    webkitAnimationTimingFunction = '';
    webkitAppearance = '';
    webkitBackfaceVisibility = '';
    webkitBackgroundClip = '';
    webkitBackgroundOrigin = '';
    webkitBackgroundSize = '';
    webkitBorderBottomLeftRadius = '';
    webkitBorderBottomRightRadius = '';
    webkitBorderRadius = '';
    webkitBorderTopLeftRadius = '';
    webkitBorderTopRightRadius = '';
    webkitBoxAlign = '';
    webkitBoxFlex = '';
    webkitBoxOrdinalGroup = '';
    webkitBoxOrient = '';
    webkitBoxPack = '';
    webkitBoxShadow = '';
    webkitBoxSizing = '';
    webkitFilter = '';
    webkitFlex = '';
    webkitFlexBasis = '';
    webkitFlexDirection = '';
    webkitFlexFlow = '';
    webkitFlexGrow = '';
    webkitFlexShrink = '';
    webkitFlexWrap = '';
    webkitJustifyContent = '';
    webkitLineClamp = '';
    webkitMask = '';
    webkitMaskBoxImage = '';
    webkitMaskBoxImageOutset = '';
    webkitMaskBoxImageRepeat = '';
    webkitMaskBoxImageSlice = '';
    webkitMaskBoxImageSource = '';
    webkitMaskBoxImageWidth = '';
    webkitMaskClip = '';
    webkitMaskComposite = '';
    webkitMaskImage = '';
    webkitMaskOrigin = '';
    webkitMaskPosition = '';
    webkitMaskRepeat = '';
    webkitMaskSize = '';
    webkitOrder = '';
    webkitPerspective = '';
    webkitPerspectiveOrigin = '';
    webkitTextFillColor = '';
    webkitTextSizeAdjust = '';
    webkitTextStroke = '';
    webkitTextStrokeColor = '';
    webkitTextStrokeWidth = '';
    webkitTransform = '';
    webkitTransformOrigin = '';
    webkitTransformStyle = '';
    webkitTransition = '';
    webkitTransitionDelay = '';
    webkitTransitionDuration = '';
    webkitTransitionProperty = '';
    webkitTransitionTimingFunction = '';
    webkitUserSelect = '';
    whiteSpace = '';
    widows = '';
    width = '';
    willChange = '';
    wordBreak = '';
    wordSpacing = '';
    wordWrap = '';
    writingMode = '';
    zIndex = 0;
}
/**
 * @public
 */
class JElementCssStyle extends JElementStyleDeclaration {
    static styleNamesMap = [];
    // 所有样式名称
    get names() {
        if (!JElementCssStyle.styleNamesMap.length) {
            const map = new JElementStyleProperty();
            const keys = Object.getOwnPropertyNames(map);
            for (const k of keys) {
                const t = typeof map[k];
                if (t === 'string' || t === 'number')
                    JElementCssStyle.styleNamesMap.push(k);
            }
        }
        return JElementCssStyle.styleNamesMap;
    }
    // 可以保存的样式白名单
    styleSaveMap;
}
// 最外层容器默认样式
const ContainerDefaultStyle = {
    position: 'absolute',
    left: '0',
    top: '0',
    width: 'auto',
    height: 'auto',
    right: 'auto',
    bottom: 'auto',
    padding: '0',
    transformOrigin: 'center center',
    transform: 'none',
    "paddingTop": '0',
    "paddingLeft": '0',
    "paddingRight": '0',
    "paddingBottom": '0',
    margin: '0',
    "marginTop": '0',
    "marginLeft": '0',
    "marginRight": '0',
    "marginBottom": '0',
    zIndex: '0',
    display: 'inline-block',
    overflow: 'visible',
    'filter': 'none',
};
/**
 * 默认编辑器样式
 */
const editorDefaultCssContent = `.j-design-editor-container {
        border: 1px solid transparent;
    }
    .j-design-editor-container.selected {
        box-shadow: none!important;
        border: 1px solid rgba(6,155,181,1);
    }
    .j-design-editor-container:hover {
        box-shadow: 0 0 1px 1px rgba(0,0,0,0.2);
    }
    .j-design-editor-controller .item-skew {
        box-shadow: 0 0 2px 2px #ccc;
        opacity: 0.2;
    }
    .j-design-editor-controller .item-skew:hover {
        opacity: 0.9;
    }
    .j-design-editor-controller .item-rotate {
        opacity: 0.5;
    }
    .j-design-editor-controller .item-rotate:hover {
        opacity: 1;
    }
    `;

const SupportEventNames = [
    'mousedown', 'mouseup', 'mouseover', 'mousemove', 'mouseout', 'mouseleave', 'mousewheel', 'click', 'dblclick', 'keydown', 'keypress', 'keyup', 'blur', 'change', 'focus', 'drag', 'dragenter', 'dragleave', 'dragover', 'dragstart', 'drop', 'contextmenu'
];
// 元素监听的自定议事件
const ElementWatchEventNames = ['select', 'styleChange', 'dataChange', 'elementChange', 'childAdded'];
/**
 * @public
 */
class JEvent {
    target;
    constructor(target) {
        if (target)
            this.target = target;
    }
    // 规范化事件名
    normalizeEventNames(name) {
        if (!this.target || !name) {
            return [];
        }
        let events = name;
        if (typeof name === 'string') {
            events = name.split(' ');
        }
        // 过滤掉不支持的事件
        return events.filter(k => SupportEventNames.includes(k));
    }
    /**
     * 初始化所有支持的事件，在init之前不要on，不然在init的时候会被释放掉。
     * @param handler - 事件处理函数
     * @param target - 元素
     */
    init(handler, target) {
        if (target) {
            // 释放掉原target的事件
            this.dispose();
            this.target = target;
        }
        this.on(SupportEventNames, handler, false);
    }
    _eventCache = [];
    /**
     * 绑定事件到html对象
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    on(name, fun, opt = false) {
        const events = this.normalizeEventNames(name);
        for (const n of events) {
            this.target.addEventListener(n, fun, opt);
            this._eventCache.push([n, fun, opt]);
        }
        return this;
    }
    /**
     * 从对象中移除事件
     * 不传 的时候删除所有事件
     * @param  name - 事件名称
     * @param  fun - 事件处理函数
     * @param opt - 配置选项
     */
    off(name, fun, opt = false) {
        const events = this.normalizeEventNames(name);
        this._eventCache = this._eventCache.filter(item => {
            if (events.length && !events.includes(item[0])) {
                return true;
            }
            if ((fun && fun !== item[1]) || (typeof opt !== 'undefined' && opt !== item[2])) {
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

class Transform extends JEventEmitter {
    constructor(option, targetOption) {
        super();
        if (option)
            Object.assign(this, option);
        if (targetOption)
            this.bind(targetOption);
    }
    // 响应变化换元素和属性
    targets = [];
    // x偏移量
    translateX = 0;
    get translateXString() {
        let x = this.translateX;
        if (util.isNumber(x))
            x = util.toPX(x);
        return `translateX(${x})`;
    }
    // y偏移量
    translateY = 0;
    get translateYString() {
        let y = this.translateY;
        if (util.isNumber(y))
            y = util.toPX(y);
        return `translateY(${y})`;
    }
    // z偏移量
    translateZ = 0;
    get translateZString() {
        let x = this.translateZ;
        if (util.isNumber(x))
            x = util.toPX(x);
        return `translateZ(${x})`;
    }
    rotateX = 0;
    get rotateXString() {
        return `rotateX(${util.toRad(this.rotateX)})`;
    }
    rotateY = 0;
    get rotateYString() {
        return `rotateY(${util.toRad(this.rotateY)})`;
    }
    rotateZ = 0;
    get rotateZString() {
        return `rotateZ(${util.toRad(this.rotateZ)})`;
    }
    scaleX = 1;
    get scaleXString() {
        return `scaleX(${this.scaleX})`;
    }
    scaleY = 1;
    get scaleYString() {
        return `scaleY(${this.scaleY})`;
    }
    scaleZ = 1;
    get scaleZString() {
        return `scaleZ(${this.scaleZ})`;
    }
    skewX = 0;
    get skewXString() {
        return `skewX(${util.toRad(this.skewX)})`;
    }
    skewY = 0;
    get skewYString() {
        return `skewY(${util.toRad(this.skewY)})`;
    }
    from(data) {
        if (data)
            Object.assign(this, data);
    }
    // 生效
    apply(target = this.targets) {
        if (Array.isArray(target)) {
            for (const t of target) {
                this.apply(t);
            }
            return;
        }
        else {
            if (target.target && target.target.css)
                target.target.css('transform', this.toString(target.watchProps));
            else if (target.target)
                target.target.style.transform = this.toString(target.watchProps);
        }
    }
    // 绑定并刷新到目标上
    bind(target) {
        this.targets.push(target);
        this.apply(target);
    }
    unbind(target) {
        for (let i = this.targets.length - 1; i > -1; i--) {
            if (this.targets[i].target === target.target) {
                this.targets.splice(i, 1);
            }
        }
    }
    // 生成transform代理
    static createProxy(obj = {}, el) {
        const transform = new Transform(obj, el);
        // 代理处理
        const proxy = new Proxy(transform, {
            get(target, p, receiver) {
                const v = target[p];
                return v;
            },
            set(target, p, value, receiver) {
                target[p] = value;
                target.apply(); // 生效
                return true;
            }
        });
        return proxy;
    }
    toString(watchProps) {
        const res = [];
        if (!watchProps) {
            watchProps = ['translateX', 'translateY', 'translateZ', "rotateX", 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'skewX', 'skewY'];
        }
        for (const n of watchProps) {
            const nv = this[n + 'String'];
            if (typeof this[n] !== 'undefined' && typeof nv !== 'undefined') {
                res.push(nv);
            }
        }
        return res.join(' ');
    }
    toJSON() {
        return {
            translateX: this.translateX,
            translateY: this.translateY,
            translateZ: this.translateZ,
            rotateX: this.rotateX,
            rotateY: this.rotateY,
            rotateZ: this.rotateZ,
            scaleX: this.scaleX,
            scaleY: this.scaleY,
            scaleZ: this.scaleZ,
            skewX: this.skewX,
            skewY: this.skewY,
        };
    }
}

const NumberStyleMap = ['left', 'top', 'right', 'bottom', 'width', 'height'];
class JElementStyle extends JElementCssStyle {
    constructor(option, maps = []) {
        super();
        if (option) {
            this.apply(option, this, maps);
        }
        this.styleSaveMap = maps;
    }
    // 保存的白名单列表, 如果指定了，则不在白名单内的就不会tojson
    styleSaveMap = [];
    // 把样式应用到元素或当前对象
    apply(data, target = this, maps = this.styleSaveMap) {
        target = target || this;
        for (const name of this.names) {
            if (typeof name !== 'string')
                continue;
            // 如果指定了白名单，不包含则不采用
            if (maps && maps.length && !maps.includes(name))
                continue;
            if (typeof data[name] === 'string' || typeof data[name] === 'number') {
                if (target instanceof JElementStyle) {
                    target.setStyle(name, data[name]);
                }
                else {
                    target[name] = data[name];
                }
            }
        }
        return target;
    }
    // 样式对应的元素
    applyTo(element) {
        this.apply(this, element.style);
    }
    // 设置样式
    setStyle(name, value) {
        this[name] = value;
        this.emit('change', {
            name,
            value
        });
    }
    // 触发所有更新到dom
    refresh() {
        this.apply(this);
    }
    // 转为json
    toJSON(maps = this.styleSaveMap) {
        const obj = {};
        for (const name of this.names) {
            // 如果不在白名单内则不处理
            if (maps && maps.length && !maps.includes(name))
                continue;
            if (typeof this[name] === 'undefined')
                continue;
            obj[name] = this[name];
        }
        return obj;
    }
    // 生成样式代理
    static createProxy(style = {}, maps = []) {
        const jstyle = new JElementStyle(style, maps);
        // 样式代理处理
        const proxy = new Proxy(jstyle, {
            get(target, p, receiver) {
                const v = target[p];
                // 数字样式，处理px问题
                if (typeof p === 'string' && NumberStyleMap.includes(p)) {
                    if (v === '0' || typeof v === 'undefined')
                        return 0;
                    if (util.isPXNumber(v))
                        return util.toNumber(v);
                }
                return v;
            },
            set(target, p, value, receiver) {
                // 非白名单样式不支持设置
                if (typeof p !== 'string' || !target.names.includes(p)) {
                    target[p] = value;
                    return true;
                }
                // 数字样式，处理px问题
                if (NumberStyleMap.includes(p)) {
                    value = typeof value === 'number' || util.isNumber(value) ? `${value}px` : value;
                }
                target.setStyle(p, value); // 应用到元素和类
                return true;
            }
        });
        return proxy;
    }
}

/**
 * JData 类：提供了一种方式来处理和管理数据
 * @public
 */
class JData extends JEventEmitter {
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
class JElementData extends JData {
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
class JImageData extends JElementData {
    src;
}
/**
 * svg
 * @public
 */
class JSvgData extends JImageData {
    url;
    svg;
}
/**
 * 文本元素的数据类，继承自元素的基础数据类 JElementData
 * @public
 */
class JTextData extends JElementData {
    text;
}

/**
 * @public
 */
class JElement extends JEventEmitter {
    constructor(option = {}) {
        super();
        this._id = this.id || option.id || util.uuid();
        this._type = this.type || option.type || '';
        const nodeType = option.nodeType || 'div';
        // @ts-ignore
        this._dom = document.createElement(nodeType);
        this.attr('data-id', this.id);
        this.attr('data-type', this.type);
        if (option.editor)
            this.editor = option.editor;
        this._option = option;
        // 样式代理处理
        this.style = JElementStyle.createProxy();
        this.style.on('change', (s) => {
            this.setDomStyle(s.name, s.value);
            this.emit('styleChange', {
                type: 'styleChange',
                data: s,
                target: this
            });
        });
        const dataType = option.dataType || JElementData;
        // @ts-ignore
        this.data = JElementData.createProxy(new dataType());
        // 名称
        this.name = option.name || '';
        // 如果是组件，不在这里进行数据初始化调用
        this.initData(option);
        // @ts-ignore
        if (option.className)
            this.className = option.className;
        // 变换控制的是核心元素 . 这里要放在initData后，不然会被覆盖
        this.transform = Transform.createProxy(option.transform, {
            target: this,
            // 如果指定了只响应某几个属性
            watchProps: option.transformWatchProps
        });
        this.bindEvent(); // 事件绑定
    }
    // 初始化一些基础属性
    initData(option) {
        // 属性变化映射到style
        this.data.watch([
            'left', 'top', 'width', 'height', 'zIndex', 'visible'
        ], {
            set: (item) => {
                if (item.name === 'visible') {
                    this.style.display = item.value ? 'block' : 'none';
                }
                else if (item.name === 'rotation') {
                    this.transform.rotateZ = item.value;
                }
                else if (item.name === 'angle') {
                    this.transform.rotateZ = util.degToRad(item.value);
                }
                else
                    this.style[item.name] = item.value;
            },
            get: (name) => {
                if (name === 'width') {
                    let w = this.style.width || 0;
                    if ((!w || w === 'auto') && this.dom && this.dom.clientWidth)
                        return this.dom.clientWidth;
                    return w;
                }
                else if (name === 'height') {
                    let h = this.style.height || 0;
                    if ((!h || h === 'auto') && this.dom && this.dom.clientHeight)
                        return this.dom.clientHeight;
                    return h;
                }
                else if (name === 'rotation') {
                    return this.transform.rotateZ;
                }
                else if (name === 'angle') {
                    return util.radToDeg(this.transform.rotateZ);
                }
                else if (name === 'visible') {
                    return this.style.display !== 'none';
                }
                return this.style[name];
            }
        });
        if (option.style)
            this.style.apply(option.style);
        if (option.editable === false)
            this.editable = false;
        if (option.visible === false)
            this.visible = false;
        if (option.data) {
            this.data.from(option.data);
        }
    }
    // 绑定事件
    bindEvent(dom) {
        // 事件托管
        this.event = new JEvent(dom || this.dom);
        this.event.init((e) => {
            this.emit(e.type, e);
        });
    }
    _id = '';
    get id() {
        return this._id;
    }
    // 名称
    get name() {
        return this.attr('title');
    }
    set name(v) {
        this.attr('title', v);
    }
    _option;
    get option() {
        return this._option;
    }
    // 类型名称
    _type = '';
    get type() {
        return this._type;
    }
    // 子元素
    _children = [];
    get children() {
        return this._children;
    }
    // 控件最外层的容器
    _dom;
    get dom() {
        return this._dom;
    }
    // 父元素
    parent;
    // 当前编辑器
    editor;
    // 事件处理
    event;
    // 样式代理
    style;
    data;
    get className() {
        return this.dom.className;
    }
    set className(v) {
        this.dom.className = v;
    }
    get visible() {
        return this.data.visible;
    }
    set visible(v) {
        this.data.visible = v;
    }
    // 元素框
    get bounds() {
        const rect = util.getElementBoundingRect(this.dom);
        if (this.editor) {
            const pos = this.editor.toEditorPosition(rect);
            rect.x = pos.x;
            rect.y = pos.y;
        }
        return rect;
    }
    // 是否可编辑
    editable = true;
    // 变换
    transform;
    // 当前子元素最大的level层
    get childrenMaxLevel() {
        let level = 0;
        for (const c of this.children) {
            level = Math.max(c.data.zIndex, level);
        }
        return level;
    }
    // 设置css到dom
    setDomStyle(name, value) {
        if (name === 'backgroundImage' && value) {
            if (!/^\s*url\(/.test(value))
                value = `url(${value})`;
        }
        util.css(this.dom, name, value);
    }
    // 设置样式
    css(name, value) {
        util.css(this, name, value);
        return this;
    }
    // dom属性
    attr(name, value) {
        return util.attr(this.dom, name, value);
    }
    // 移位
    move(dx, dy) {
        const x = util.toNumber(this.data.left) + dx;
        const y = util.toNumber(this.data.top) + dy;
        this.data.left = Number(x.toFixed(2));
        this.data.top = Number(y.toFixed(2));
        this.emit('move', { dx, dy });
    }
    // 把子元素按zIndex排序
    childrenSort() {
        return this.children.sort((a, b) => a.data.zIndex - b.data.zIndex);
    }
    // 重置大小
    resize(w, h) {
        if (typeof w === 'number') {
            this.data.width = w;
        }
        if (typeof h === 'number') {
            this.data.height = h;
        }
    }
    // 新增子元素
    addChild(child, parent = this) {
        if (Array.isArray(child)) {
            for (const c of child) {
                parent.addChild(c);
            }
            return parent;
        }
        if (child instanceof JElement) {
            if (!child.parent)
                child.parent = parent;
            // 如果没有指定层级，则新加的都在最大
            if (!child.data.zIndex || child.data.zIndex == 0) {
                child.data.zIndex = this.childrenMaxLevel + 1;
            }
            parent.dom.appendChild(child.dom);
            parent.children.push(child);
            this.emit('childAdded', child);
        }
        else if (child instanceof HTMLElement) {
            parent.dom.appendChild(child);
        }
    }
    // 移除自已
    remove() {
        if (this.parent)
            this.parent.removeChild(this);
    }
    // 移除子元素
    removeChild(el) {
        // @ts-ignore
        if (el.dom && el.dom.parentElement === this.dom)
            this.dom.removeChild(el.dom || el);
        // @ts-ignore
        if (el.selected)
            el.selected = false;
        for (let i = this.children.length - 1; i > -1; i--) {
            if (this.children[i] === el)
                this.children.splice(i, 1);
        }
        // @ts-ignore
        delete el.parent;
    }
    // 转为json
    toJSON(props = [], ig = (p) => true) {
        const fields = ['type', 'data', 'style', 'transform', 'id', 'filters', ...props];
        const obj = {
            children: []
        };
        for (const k of fields) {
            const v = this[k];
            if (typeof v === 'string' || typeof v === 'number') {
                obj[k] = this[k];
            }
            else if (v && v.toJSON) {
                obj[k] = v.toJSON();
            }
        }
        if (this.children && this.children.length) {
            for (const child of this.children) {
                if (child === this || ig(child) === false)
                    continue;
                obj.children.push(child.toJSON());
            }
        }
        return obj;
    }
    toString() {
        const obj = this.toJSON();
        return JSON.stringify(obj);
    }
    toHtml() {
        return this.dom.outerHTML;
    }
    // 丢弃
    dispose() {
        this.event.dispose();
        if (this.data) {
            this.data.removeAllListeners();
            delete this.data;
        }
        if (this.style) {
            this.style.removeAllListeners();
            delete this.style;
        }
        this.removeAllListeners();
    }
}

/**
 * @public
 */
class JBaseComponent extends JElement {
    constructor(option = {}) {
        option.style = option.style || {};
        // position和overflow预设的值优先级最高
        option.style = Object.assign({ ...ContainerDefaultStyle }, option.style, {
            position: ContainerDefaultStyle.position,
            //overflow: ContainerDefaultStyle.overflow
        });
        super({
            ...option,
            //transformWatchProps: null,
            nodeType: 'div',
            className: 'j-design-editor-container',
        });
        this.componentType = new.target;
        option.target = option.target || {};
        const targetOption = {
            ...(option.target || option),
            visible: true,
            data: {},
            transformWatchProps: null,
            style: {
                display: 'block',
                cursor: 'pointer',
                width: '100%',
                height: '100%',
            }
        };
        // 是否可以移动
        if (typeof option.moveable === 'boolean')
            this.moveable = option.moveable;
        if (!targetOption.nodeType)
            targetOption.nodeType = option.nodeType;
        // 生成当前控制的元素
        this.target = new JElement(targetOption);
        this.addChild(this.target.dom);
        // 变换改为控制主元素
        /*this.transform.bind({
            target: this.target,
            watchProps: [
                'rotateX', 'rotateY', 'translateX', 'translateY', 'skewX', 'skewY'
            ]
        });*/
        this.filters = new CSSFilters(this, option.filters); // 滤镜
        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }
    // 当前控件的核心元素
    target;
    filters;
    /**
     * 类型名称
     */
    get typeName() {
        return 'base';
    }
    /**
     * 是否支持移动
     */
    moveable = true;
    /**
     * 当前组件new指向的class，可用于复制
     */
    componentType;
    // 选中
    _selected = false;
    get selected() {
        return this._selected;
    }
    set selected(v) {
        this._selected = v;
        // 如果选中则加上样式
        util.class(this.dom, 'selected', !v);
        this.emit('select', {
            type: 'select',
            target: this,
            selected: v
        });
    }
    // 设置层级，指定数字或操作, next下一层，pre上一层，top顶层，bottom最底层
    setLevel(level) {
        if (typeof level === 'number')
            this.data.zIndex = level;
        if (!this.parent)
            return;
        const maxLevel = this.parent.childrenMaxLevel;
        switch (level) {
            case 'next': {
                const res = this.getMyNextLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = 0; // 如果没找到下一层的，则直接赋到bottom层0
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'pre': {
                const res = this.getMyPreLevelChildren();
                if (res.level < 0)
                    this.data.zIndex = maxLevel; // 如果没找到上一层的，则直接赋到top层
                else {
                    res.elements.map((el) => {
                        el.data.zIndex = this.data.zIndex;
                    });
                    this.data.zIndex = res.level;
                }
                break;
            }
            case 'top': {
                this.data.zIndex = maxLevel + 1;
                break;
            }
            case 'bottom': {
                this.parent.children.map((el) => {
                    el !== this && (el.data.zIndex += 1);
                }); // 所有子元素上移一层，除了当前元素
                this.data.zIndex = 0;
            }
        }
    }
    // 获取我下一层的所有元素
    getMyNextLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let nextLevel = -1;
        for (let i = children.length - 1; i >= 0; i--) {
            const c = children[i];
            if (c.data.zIndex < this.data.zIndex && c !== this) {
                if (nextLevel < 0)
                    nextLevel = c.data.zIndex;
                if (c.data.zIndex === nextLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: nextLevel
        };
    }
    // 获取我上一层的所有元素
    getMyPreLevelChildren() {
        const elements = [];
        if (!this.parent)
            return;
        const children = this.parent.childrenSort();
        let preLevel = -1;
        for (let i = 0; i < children.length; i++) {
            const c = children[i];
            if (c.data.zIndex > this.data.zIndex && c !== this) {
                if (preLevel < 0)
                    preLevel = c.data.zIndex;
                if (c.data.zIndex === preLevel)
                    elements.push(c);
            }
        }
        return {
            elements,
            level: preLevel
        };
    }
    // 添加元素到画布
    addChild(child) {
        if (child === this.target || child instanceof HTMLElement) {
            return super.addChild(child);
        }
        this.bindElementEvent(child);
        child.parent = this; // 把父设置成编辑器
        child.editor = child.editor || this.editor;
        child.editable = this.editable; // 当前是否可编辑
        // 刷新样式
        child.style.refresh();
        this.target.addChild(child);
        if (child.option?.children?.length) {
            for (const opt of child.option.children) {
                const c = child.editor.createShape(opt.type, opt);
                c && child.addChild(c);
            }
        }
    }
    // 移除
    removeChild(el) {
        if (el === this.target) {
            //console.warn('不能移除自已');
            return;
        }
        this.target.removeChild(el);
        if (el instanceof JElement) {
            el.off(SupportEventNames);
            el.off(ElementWatchEventNames);
        }
    }
    // 绑定元素事件
    bindElementEvent(el) {
        const self = this;
        // 监听样式改变
        el.on([
            ...SupportEventNames,
            ...ElementWatchEventNames
        ], function (e) {
            self.emit('elementChange', {
                type: e.type,
                data: {
                    id: this.id,
                    ...e.data
                },
                event: e.event || e,
                target: this
            });
        });
    }
    // 通过ID获取子元素
    getChild(id) {
        for (const child of this.children) {
            if (child.id === id)
                return child;
            // 如果子元素也是一个element，则也轮循它的子元素。
            if (child instanceof JBaseComponent) {
                const el = child.getChild(id);
                if (el)
                    return el;
            }
        }
    }
    // 设置css到dom
    setDomStyle(name, value) {
        // 如果外层容器的样式，则加到container上
        if (name in ContainerDefaultStyle) {
            super.setDomStyle(name, value);
        }
        else {
            this.target && this.target.css(name, value);
        }
    }
    toJSON(props = []) {
        // 转json忽略渲染组件
        const obj = super.toJSON(props, (el) => {
            return el !== this.target;
        });
        if (this.target) {
            // target不转换children
            obj.target = this.target.toJSON([], (p) => false);
        }
        return obj;
    }
    /**
     * 复制当前组件
     * @returns 当前组件同类型副本
     */
    clone() {
        const option = this.toJSON();
        // @ts-ignore
        delete option.id;
        const el = new this.componentType(option);
        return el;
    }
}

/**
 * 文本组件类 JText，继承于基础组件 Base。
 * @public
 */
class JText extends JBaseComponent {
    /**
     * JText组件构造函数。
     * @example
     * ```
     * const textInstance = new JText({
     *   text: 'Hello World',
     *   style: {
     *     color: 'red',
     *     fontSize: '18px'
     *   }
     * });
     * ```
     * @param option - 文本组件选项，包括 text, style 等。
     */
    constructor(option = {}) {
        option.style = {
            fontFamily: 'Arial',
            textAlign: 'left',
            fontSize: 22,
            fontWeight: 'normal',
            fontStyle: 'normal',
            wordBreak: "keep-all",
            wordWrap: "break-word",
            ...option.style
        };
        super({
            ...option,
            nodeType: 'div',
            type: option.type || 'text',
            dataType: option.dataType || JTextData
        });
        // 'text' 属性变化映射到 innerText
        this.data.watch([
            'text', 'fontFamily', 'fontSize'
        ], {
            set: (item) => {
                if (item.name === 'text')
                    this.target.dom.innerText = item.value;
                else
                    this.style[item.name] = item.value;
            },
            get: (name) => {
                if (name === 'text')
                    return this.target.dom.innerText;
                else
                    return this.style[name];
            }
        });
        // 如果在选项中提供，设置 'text' 属性
        // @ts-ignore
        const text = option.text;
        if (text)
            this.data.text = text;
        // 添加双击事件监听器，进入编辑状态
        this.on('dblclick', (e) => {
            this.edit(e);
        });
        // 添加选择事件监听器，退出编辑状态
        this.on('select', () => {
            if (!this.selected)
                this.closeEdit();
        });
        this.target.on('click', (e) => {
            util.setRange(this.target.dom, e); // 光标位置在点击位置
        });
        this.target.on('blur', () => {
            this.closeEdit();
        });
        JText.TextControlCache.set(this.id, this); // 缓存起来
    }
    // 所有 JText 实例的缓存
    static TextControlCache = new Map();
    /**
     * 类型名称
     */
    get typeName() {
        return 'text';
    }
    /**
     * 当前编辑状态
     */
    get contenteditable() {
        return util.attr(this.target.dom, 'contenteditable');
    }
    set contenteditable(v) {
        if (!this.editable && v)
            return; // 组件不支持编辑则不处理
        util.attr(this.target.dom, 'contenteditable', v.toString());
    }
    /**
     * 进入文本编辑状态
     */
    edit(e) {
        if (!this.editable)
            return;
        this.editor.elementController.visible = false;
        this.contenteditable = true; // 编辑态
        util.setRange(this.target.dom, e); // 光标位置在最后
        this.target.dom.focus(); // 进入控件
    }
    /**
     * 退出文本编辑状态
     */
    closeEdit() {
        this.contenteditable = false;
    }
    /**
     * 移除 JText 实例
     */
    dispose() {
        JText.TextControlCache.delete(this.id);
        super.dispose();
    }
}

/**
 * 图像组件类 JImage，继承于基础组件 Base。
 * @public
 */
class JImage extends JBaseComponent {
    /**
     * JImage组件构造函数。
     * @param option - 图像选项，包括 url, src 等。
     */
    constructor(option = {}) {
        if (!option.style)
            option.style = {};
        if (!option.style.overflow)
            option.style.overflow = 'hidden';
        super({
            ...option,
            nodeType: 'img',
            type: option.type || 'image',
            dataType: option.dataType || JImageData
        });
        // 图像加载完成时触发 'load' 事件
        this.target.dom.onload = (e) => {
            this.emit('load', e);
        };
        // 图像加载错误时触发 'error' 事件
        this.target.dom.onerror = (e) => {
            this.emit('error', e);
        };
        // 允许跨域获取图像资源（避免CORS问题）
        this.target.attr('crossorigin', 'anonymous');
        // 'src' 属性变化映射到 style
        this.data.watch([
            'src'
        ], {
            // 设置 'src' 属性
            set: (item) => {
                if (item.name === 'src')
                    this.target.dom.src = item.value;
            },
            get: (name) => {
                if (name === 'src')
                    return this.target.dom.src;
            }
        });
        // 如果在选项中提供，设置 'src' 或 'url' 属性
        // @ts-ignore
        const src = option.url || option.src;
        if (src)
            this.data.src = src;
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'image';
    }
    // 设置css到dom
    setDomStyle(name, value) {
        // transform应用于图片元素上面
        if (name === 'transform') {
            return this.target && this.target.setDomStyle(name, value);
        }
        return super.setDomStyle(name, value);
    }
    toJSON(props = []) {
        return super.toJSON([
            'filters',
            ...props
        ]);
    }
}

class JSvg extends JBaseComponent {
    constructor(option = {}) {
        super({
            ...option,
            type: option.type || 'svg',
            dataType: option.dataType || JSvgData
        });
        // 属性变化映射到style
        this.data.watch([
            'url', 'svg', 'src'
        ], {
            set: (item) => {
                if (item.name === 'url') {
                    this.load(item.value);
                }
                if (item.name === 'src') {
                    this.data.url = item.value;
                }
                else if (item.name === 'svg') {
                    this.target.dom.innerHTML = item.value;
                }
            }
        });
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'svg';
    }
    // 替换变量
    renderSvg(svg) {
        this.data.map((name, value) => {
            svg = svg.replace(new RegExp(`\\{${name}\\}`, 'g'), value);
        });
        return svg;
    }
    // 加载svg内容
    async load(url = this.data.url) {
        const svg = await util.request(url);
        this.data.svg = svg;
    }
}

class JContainer extends JBaseComponent {
    constructor(option = {}) {
        super({
            ...option,
            type: option.type || 'svg',
            dataType: option.dataType || JElementData
        });
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'container';
    }
}

// 控制元素移动和矩阵变换
class JControllerItem extends JElement {
    constructor(option) {
        option.style = {
            border: '1px solid rgba(6,155,181,1)',
            backgroundColor: '#fff',
            pointerEvents: 'auto',
            ...option.style,
            position: 'absolute'
        };
        if (option.dir && !option.className) {
            option.className = 'item-' + option.dir;
        }
        super(option);
        this.dir = option.dir || '';
        if (option.size) {
            this.data.width = this.data.height = this.size = option.size;
        }
        this.editor = option.editor;
        if (this.editor) {
            // @ts-ignore
            this.editor.view.on('mouseup', (e) => {
                if (e.button === 0)
                    this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mouseleave', (e) => {
                if (!this.isMoving || e.target !== this.editor.view.dom)
                    return; // 不是out编辑器，不处理
                this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.view.on('mousemove', (e) => {
                this.onDragMove(e);
            });
        }
        this.on('mousedown', (e) => {
            // 如果是左健
            if (e.button === 0) {
                this.onDragStart(e);
            }
        });
    }
    dir = '';
    size = 0;
    _isMoving = false;
    get isMoving() {
        return this._isMoving;
    }
    set isMoving(v) {
        this._isMoving = v;
    }
    // 拖放位置
    dragStartPosition = {
        x: 0,
        y: 0,
    };
    onDragMove(event) {
        if (!this.isMoving)
            return;
        const pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };
        const offX = (pos.x - this.dragStartPosition.x);
        const offY = (pos.y - this.dragStartPosition.y);
        this.emit('change', {
            dir: this.dir,
            offX,
            offY,
            oldPosition: this.dragStartPosition,
            newPosition: {
                x: pos.x,
                y: pos.y
            },
            event
        });
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;
        //event.stopPropagation();
        event.preventDefault && event.preventDefault();
    }
    onDragStart(event) {
        const pos = {
            x: event.pageX || event.x,
            y: event.pageY || event.y,
        };
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition = {
            x: pos.x,
            y: pos.y
        };
        this.isMoving = true;
        event.stopPropagation && event.stopPropagation();
        event.preventDefault && event.preventDefault();
    }
    onDragEnd(event) {
        if (this.isMoving) {
            this.isMoving = false;
        }
    }
    // 计算指针
    async resetCursor(rotation = 0, data = {}) {
        try {
            if (!this.dir)
                return;
            let cursor = await Cursors.get(this.dir, rotation, data);
            if (!cursor)
                return;
            // 先简单处理
            this.style.cursor = cursor.includes('\/') ? `url(${cursor}) 12 12,pointer` : cursor;
        }
        catch (e) {
            console.error(e);
        }
    }
}
// 元素大小位置控制器
class JControllerComponent extends JControllerItem {
    constructor(option) {
        option.style = {
            cursor: 'move',
            backgroundColor: 'transparent',
            itemStyle: {
                border: '1px solid #ccc',
            },
            ...option.style,
            pointerEvents: 'none',
        };
        option.dir = 'element';
        option.className = 'j-design-editor-controller';
        option.data = {
            ...option.data,
            zIndex: topZIndex
        };
        super(option);
        if (!this.editor.editable)
            return;
        // 鼠标指针
        this.cursorData = option.itemCursors || {};
        this.init(option);
        this.editor.dom.appendChild(this.dom);
        this.resetCursor(this.transform.rotateZ);
    }
    init(option) {
        const itemSize = option.itemSize || 8;
        const pointSize = itemSize * 1.5;
        const sideSize = {
            width: itemSize,
            height: itemSize * 2
        };
        this.createItem('l', {
            style: {
                ...option.style.itemStyle,
                left: 0,
                top: '50%',
            },
            data: {
                ...sideSize
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: 0,
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            style: {
                ...option.style.itemStyle,
                left: '50%',
                top: 0,
            },
            data: {
                width: sideSize.height,
                height: sideSize.width
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: '100%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            style: {
                ...option.style.itemStyle,
                left: '100%',
                top: '50%',
            },
            data: {
                ...sideSize
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: '100%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            style: {
                ...option.style.itemStyle,
                left: '50%',
                top: '100%',
            },
            data: {
                width: sideSize.height,
                height: sideSize.width
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            size: pointSize,
            style: {
                borderRadius: '50% 50%',
                ...option.style.itemStyle,
                left: 0,
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            size: 20,
            style: {
                left: '50%',
                top: '-40px',
                //backgroundColor: 'transparent',
                //border: 'none',
                //boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.style.itemStyle,
                ...option.style.rotateStyle,
                'backgroundSize': '100%',
                backgroundImage: option.itemIcons?.rotate || ''
            },
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            size: 24,
            style: {
                left: '50%',
                top: '50%',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.style.itemStyle,
                border: '9px solid rgba(0,0,0,0.8)',
                backgroundColor: '#fff',
                'backgroundSize': '100%',
                //backgroundImage: option.itemIcons?.skew || ''
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        }); // 旋转块 
        if (option.tipVisible !== false) {
            const tipOption = {
                data: {
                    height: '16px',
                    width: 'auto'
                },
                style: {
                    left: '2px',
                    top: '0',
                    border: 'none',
                    backgroundColor: 'rgba(100, 100, 100, 0.1)',
                    color: 'blue',
                    fontSize: '10px',
                    padding: '2px',
                    overflow: 'hidden',
                    ...option.style.tipStyle,
                    pointerEvents: 'none',
                }
            };
            //提示信息
            this.positionItem = this.createItem('tip', {
                ...tipOption,
                transform: {
                    translateY: '-100%'
                }
            });
            this.sizeItem = this.createItem('tip', {
                ...tipOption,
                style: {
                    ...tipOption.style,
                    left: 'auto',
                    top: '100%',
                    right: '4px'
                }
            });
        }
        if (this.editor) {
            this.editor.on('mousedown', (e) => {
                if (!this.isEditor || e.button === 2)
                    return; // 不是编辑器，不处理
                this.onDragStart(e);
            });
        }
        this.on('change', (e) => {
            this.change(e);
        });
    }
    // 鼠标指针
    cursorData;
    items = [];
    rotateItem;
    skewItem;
    positionItem;
    sizeItem;
    target;
    // 选择框边距
    paddingSize = 0;
    isEditor = false; // 当前关联是否是编辑器
    bindTargetPositionAndSizeHandler;
    get center() {
        const center = {
            x: util.toNumber(this.data.left) + util.toNumber(this.data.width) / 2,
            y: util.toNumber(this.data.top) + util.toNumber(this.data.height) / 2,
        };
        return center;
    }
    // 生成控制点
    createItem(id, option) {
        const item = new JControllerItem({
            dir: id,
            editor: this.editor,
            ...option
        });
        this.addChild(item);
        this.items.push(item);
        const self = this;
        item.on('change', function (e) {
            self.change(e);
        });
        item.resetCursor(this.transform.rotateZ, this.cursorData);
        return item;
    }
    // 发生改变响应
    change(e) {
        if (!this.target)
            return;
        let { dir, offX, offY, oldPosition, newPosition } = e;
        // 当前移动对原对象的改变
        let args = {
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            rotation: 0,
            skew: {
                x: 0,
                y: 0
            }
        };
        const center = this.center;
        const width = util.toNumber(this.data.width);
        const height = util.toNumber(this.data.height);
        if (dir === 'rotate') {
            // 编辑器坐标, 因为是在编辑器渲染区域操作，需要把坐标转到此区域再处理
            const pos1 = this.editor.toEditorPosition(oldPosition);
            const pos2 = this.editor.toEditorPosition(newPosition);
            args.rotation = rotateChange(pos1, pos2, center);
        }
        else if (dir === 'skew') {
            const rx = offX / width * Math.PI;
            const ry = offY / height * Math.PI;
            args.skew.x = ry;
            args.skew.y = rx;
        }
        else if (dir === 'element') {
            // 元素位置控制器
            args.x = offX;
            args.y = offY;
        }
        else {
            // 根据操作参数，计算大小和偏移量
            args = getChangeData(dir, {
                x: offX,
                y: offY
            }, oldPosition, newPosition, center, this.transform.rotateZ);
        }
        // 位移 
        if (args.x || args.y) {
            // 只有没锁定才可以移动
            if (this.target.moveable)
                this.move(args.x, args.y);
        }
        if (args.width) {
            const oldWidth = util.toNumber(this.data.width);
            const width = oldWidth + args.width;
            this.data.width = Math.max(Number(width.toFixed(2)), 1);
            // 如果是编辑器，且不支持移动， 则需要保持居中，移动一半大小改变一半
            /*if(!this.target.moveable && this.isEditor) {
                const offx = this.data.width - oldWidth;
                this.move(-offx/2, 0);
            }*/
        }
        if (args.height) {
            const oldHeight = util.toNumber(this.data.height);
            const height = oldHeight + args.height;
            this.data.height = Math.max(Number(height.toFixed(2)), 1);
            // 如果是编辑器，且不支持移动， 则需要保持居中，移动一半大小改变一半
            /*if(!this.target.moveable && this.isEditor) {
                const offy = this.data.height - oldHeight;
                this.move(0, -offy/2);
            }*/
        }
        // x,y旋转
        if (args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }
        // 如果有操作旋转
        if (args.rotation) {
            this.transform.rotateZ += args.rotation;
            if (Math.abs(this.transform.rotateZ) > fullCircleRadius)
                this.transform.rotateZ = this.transform.rotateZ % fullCircleRadius;
            this.transform.apply();
            // 发生了旋转，要处理指针图标
            this.resetCursor();
        }
        this.applyToTarget();
    }
    // 把变换应用到目标元素
    applyToTarget() {
        if (!this.target)
            return;
        /*
                const pos = {
                    x: util.toNumber(this.data.left) + (this.isEditor?util.toNumber(this.target.data.left):0),
                    y: util.toNumber(this.data.top) + (this.isEditor?util.toNumber(this.target.data.top):0)
                };
        
                this.target.data.left = pos.x;
                this.target.data.top = pos.y;
        */
        // 编辑器相对位置一直是0
        if (this.isEditor) {
            this.data.left = 0;
            this.data.top = 0;
        }
        this.target.transform.from({
            //skewX: this.transform.skewX,
            //skewY: this.transform.skewY,
            rotateZ: this.transform.rotateZ,
        });
        const width = util.toNumber(this.data.width) - this.paddingSize * 2;
        const height = util.toNumber(this.data.height) - this.paddingSize * 2;
        if (this.target.data.width !== width)
            this.target.data.width = width;
        if (this.target.data.height !== height)
            this.target.data.height = height;
        this.setTip();
    }
    // 移动
    move(dx, dy) {
        if (!this.isEditor) {
            // 如果有多选，则移动多个
            const selectedElements = this.editor.selectedElements;
            if (selectedElements.length) {
                for (const el of selectedElements) {
                    el.move(dx, dy);
                }
            }
        }
        else if (this.target)
            this.target.move(dx, dy);
        return super.move(dx, dy);
    }
    // 重置
    reset(isEditor = this.isEditor) {
        this.isMoving = false;
        delete this.target;
        // 编辑器不让旋转和skew
        for (const item of this.items) {
            item.isMoving = false;
        }
        this.transform.from({
            rotateZ: 0,
        });
    }
    // 是否正在操控中
    get isControling() {
        if (this.isMoving)
            return true;
        for (const item of this.items) {
            if (item.isMoving)
                return true;
        }
        return false;
    }
    async resetCursor(rotation = this.transform.rotateZ) {
        // 发生了旋转，要处理指针图标
        for (const item of this.items) {
            item.resetCursor(rotation, this.cursorData);
        }
    }
    // 绑定到操作的对象
    bind(target) {
        if (!target.editable)
            return;
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);
        this.target = target;
        this.bindTargetPositionAndSize();
        this.data.visible = true;
        // 编辑器不让旋转和skew
        const itemVisible = target.editable;
        for (const item of this.items) {
            switch (item.dir) {
                case 'skew': {
                    item.visible = itemVisible && !this.isEditor && this.target.typeName === 'image';
                    break;
                }
                case 'rotate': {
                    item.visible = itemVisible && !this.isEditor;
                    break;
                }
                default: {
                    item.data.visible = itemVisible;
                }
            }
        }
        this.bindTargetPositionAndSizeHandler = (e) => {
            if (e.target !== this.target || this.isControling)
                return;
            this.bindTargetPositionAndSize();
        };
        // 如果数据改变，则响应
        this.target.on('dataChange', this.bindTargetPositionAndSizeHandler);
    }
    // 同步目标位置等信息
    bindTargetPositionAndSize() {
        if (!this.target)
            return;
        // 编辑器的话，需要把它的坐标转为相对于容器的
        const pos = {
            x: (this.isEditor ? 0 : util.toNumber(this.target.data.left)),
            y: (this.isEditor ? 0 : util.toNumber(this.target.data.top))
        };
        this.data.left = pos.x;
        this.data.top = pos.y;
        this.data.width = util.toNumber(this.target.data.width) + this.paddingSize * 2;
        this.data.height = util.toNumber(this.target.data.height) + this.paddingSize * 2;
        this.transform.from({
            // rotateX: target.transform.rotateX,
            // rotateY: target.transform.rotateY,
            rotateZ: this.target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        // 初始化图标
        this.resetCursor();
        this.setTip();
    }
    // 显示提示信息
    setTip() {
        if (this.positionItem && this.positionItem.visible) {
            const pos = {
                x: util.toNumber(this.data.left, 2) + (this.isEditor ? util.toNumber(this.target.data.left, 2) : 0),
                y: util.toNumber(this.data.top, 2) + (this.isEditor ? util.toNumber(this.target.data.top, 2) : 0)
            };
            this.positionItem.dom.innerHTML = `X: ${pos.x} Y: ${pos.y}`;
        }
        if (this.sizeItem && this.sizeItem.visible)
            this.sizeItem.dom.innerHTML = `${util.toNumber(this.data.width, 2)} X ${util.toNumber(this.data.height, 2)}`;
    }
    // 解除绑定
    unbind(target) {
        if (target && this.target === target) {
            this.reset(false);
            this.data.visible = false;
            // 如果数据改变，则响应
            if (this.bindTargetPositionAndSizeHandler) {
                target.off('dataChange', this.bindTargetPositionAndSizeHandler);
                delete this.bindTargetPositionAndSizeHandler;
            }
        }
    }
}

class JFontData {
    constructor(family, url, font) {
        this.family = family;
        this.url = url;
        this.font = font;
    }
    family;
    url;
    // 中文名
    label;
    font;
    get status() {
        if (this.font)
            return this.font.status;
        return 'unloaded';
    }
    async load(url = this.url) {
        this.url = url || this.url;
        if (!this.font)
            this.font = new FontFace(this.family, `url("${this.url}")`);
        const f = await this.font.load();
        document.fonts.add(f); // 生效
        return this;
    }
    toHtml() {
        return `@font-face {font-family: "${this.family}"; src: url("${this.url}")}`;
    }
}
class JFonts extends JEventEmitter {
    constructor(fonts) {
        super();
        // 初始化默认支持的字体
        if (Array.isArray(fonts)) {
            this.registry(fonts);
        }
        else if (fonts) {
            for (const name in fonts) {
                if (fonts[name] && typeof fonts[name] === 'object')
                    this.registry(fonts[name]);
            }
        }
        this.init();
    }
    fontConfigs = new Map();
    fonts = new Map();
    init() {
        if (document.fonts) {
            const fonts = document.fonts.values();
            let font = fonts.next();
            while (font && font.done && font.value) {
                if (font.value) {
                    const f = new JFontData(font.value.family);
                    f.font = font.value;
                    this.fonts.set(f.family, f);
                }
                font = fonts.next();
            }
        }
        // 系统默认的一些字体支持
        this.fonts.set('arial', new JFontData('Arial', '', new FontFace('Arial', '')));
    }
    /**
     * 注入字体配置
     * @param font 字体
     */
    registry(font) {
        // 初始化默认支持的字体
        if (Array.isArray(font)) {
            for (const f of font) {
                this.registry(f);
            }
        }
        else if (font) {
            this.fontConfigs.set(font.family.toLocaleLowerCase(), font);
        }
    }
    // 加载字体
    async load(name, url) {
        let font = this.get(name);
        if (font) {
            if (font.url && (font.status === 'unloaded' || font.status === 'error'))
                return font.load();
            return font;
        }
        if (!url) {
            const config = this.fontConfigs.get(name.toLocaleLowerCase());
            // 没有配置支持的字体，则报错
            if (!config) {
                throw Error(`没有支持的 ${name} 字体配置`);
            }
            url = config.url;
        }
        font = new JFontData(name, url);
        this.fonts.set(name.toLocaleLowerCase(), font);
        const f = await font.load();
        this.emit('load', f); // 加载字本事件
        return f;
    }
    // 获取已加载的字体
    get(name) {
        if (this.fonts) {
            name = name.toLocaleLowerCase();
            if (this.fonts.has(name))
                return this.fonts.get(name);
        }
        return null;
    }
    // 检查加载的字体是否存在，存在则返回字体对象
    check(name) {
        const font = this.get(name);
        return !!font;
    }
}

/**
 * @public
 */
class JEditor extends JBaseComponent {
    constructor(option = {}) {
        option.style = option.style || {};
        Object.assign(option.style, {
            'boxShadow': '0 0 10px 10px #ccc',
            'position': 'absolute',
            'backgroundSize': '100% 100%',
        });
        // @ts-ignore 外层只响应Z轴旋转
        /*option.transformWatchProps = [
            'rotateZ', 'scaleX', 'scaleY'
        ];*/
        option.type = option.type || 'editor';
        super(option);
        if (typeof option.container === 'string')
            option.container = document.getElementById(option.container);
        this.view = new JElement({
            style: {
                'border': '0',
                'padding': '0',
                'margin': '0',
                'position': 'relative',
                'width': '100%',
                'height': '100%',
            }
        });
        // 字体管理实例
        this.fonts = new JFonts(option.fonts);
        this.target.css({
            'overflow': 'hidden'
        });
        if (option.container)
            option.container.appendChild(this.view.dom);
        this.view.addChild(this.dom);
        // @ts-ignore
        this.regShape({
            'image': JImage,
            'img': JImage,
            'text': JText,
            'span': JText,
            'svg': JSvg,
            'container': JContainer,
            'div': JContainer,
        });
        this.init(option);
        this.bindEvent(this.view.dom);
    }
    // 初始化整个编辑器
    init(option) {
        if (option.style.containerBackgroundColor)
            this.dom.style.backgroundColor = option.style.containerBackgroundColor;
        // 生成控制器
        this.elementController = new JControllerComponent({
            ...option.controllerOption,
            visible: false,
            editor: this,
        });
        const styleNode = document.createElement('style');
        if (this.editable)
            styleNode.innerHTML = editorDefaultCssContent;
        this.dom.appendChild(styleNode);
        // 字体加载成功，同时加入到dom结构中
        this.fonts.on('load', (font) => {
            styleNode.append(font.toHtml());
        });
        this.on('select', (e) => {
            this.select(this); // 选中自已
        });
        this.on('mousedown', function (e) {
            if (e.button === 0) {
                this.select(this, e);
            }
        });
        // 刷新样式
        this.style.refresh();
        this.resize(); // 触发一次大小改变
        // 属性变化
        this.data.watch([
            'width', 'height'
        ], {
            set: (item) => {
                this.sizeChange();
            }
        });
        // 编辑器只支持保留 部分样式
        this.style.styleSaveMap = [
            'backgroundColor',
            'backgroundImage'
        ];
    }
    /**
     * 类型名称
     */
    get typeName() {
        return 'editor';
    }
    // 外层用于定位的容器
    view;
    // 所有支持的类型
    shapes = new Map();
    // 元素控帛器
    elementController;
    fonts; // 字体管理器
    // 重写子集为target
    get children() {
        return this.target.children;
    }
    // 被选中的元素
    get selectedElements() {
        const res = [];
        for (const el of this.children) {
            if (el instanceof JBaseComponent && el.selected) {
                res.push(el);
            }
        }
        return res;
    }
    // 绑定事件
    bindEvent(dom) {
        if (!this.view) {
            return;
        }
        super.bindEvent(this.view.dom); // 编辑器事件绑到整个容器上
        // 监听子元素改变
        this.on(['elementChange'], (e) => {
            const isComponent = e.target instanceof JBaseComponent;
            // 左健选中
            if (e.type === 'mousedown' && isComponent) {
                this.select(e.target, e.event);
            }
            // 选中状态改变
            else if (e.type === 'select' && isComponent) {
                this.select(e.target);
            }
            // 如果是字体依赖，则检查字体支持情况
            else if (e.type === 'styleChange') {
                // 字体发生改变，需要做check, 并加载字体生效
                if (e.data.name === 'fontFamily' && e.data.value) {
                    this.fonts.load(e.data.value).catch((e) => {
                        console.error(e);
                    }); // 异步加载字体
                }
            }
        });
    }
    // 选中某个元素
    select(el, event = null) {
        // 不可编辑的情况下不响应选择事件
        if (!el.editable)
            return false;
        if (event) {
            // shift 或 ctrl 时，表示多先
            const isMutilSelect = (event?.ctrlKey || event?.shiftKey) && el !== this; // 编辑器不能与其它元素多选
            // 选把所有已选择的取消
            // 如果按下ctrl或本来就是选中的，则不取消其它元素
            if (!isMutilSelect && !el.selected) {
                this.selectedElements.map(p => {
                    if (p !== el) {
                        p.selected = false;
                        return p;
                    }
                });
            }
            // 编辑器要消选
            if (el !== this && this.selected)
                this.selected = false;
            if (!el.selected) {
                el.selected = true;
            }
            // 多选情况下，已选中的再点击取消选择
            else if (isMutilSelect) {
                el.selected = false;
            }
            if (event?.button === 0)
                this.elementController && this.elementController.onDragStart(event);
            event?.stopPropagation && event.stopPropagation();
        }
        else {
            if (el.selected) {
                if (el.editable)
                    this.elementController && this.elementController.bind(el);
            }
            else
                this.elementController && this.elementController.unbind(el);
        }
    }
    resize(width = this.data.width, height = this.data.height) {
        this.data.width = width;
        this.data.height = height;
        this.sizeChange(width, height);
    }
    // 尺寸改变响应
    sizeChange(width = this.data.width, height = this.data.height) {
        this.attr('data-size', `${width}*${height}`);
        this.emit('resize', {
            width,
            height
        });
    }
    // 添加元素到画布
    addChild(child) {
        child.editor = this;
        return super.addChild(child);
    }
    // 把domcument坐标转为编辑器相对坐标
    toEditorPosition(pos, dom = this.target.dom) {
        return util.toDomPosition(pos, dom);
    }
    clear() {
        this.css({
            'backgroundColor': '#fff',
            'backgroundImage': ''
        });
        for (let i = this.children.length - 1; i >= 0; i--) {
            const el = this.children[i];
            this.removeChild(el);
        }
        this.elementController && (this.elementController.data.visible = false);
    }
    // 缩放
    scale(x, y = x) {
        if (x < 0.1 || y < 0.1)
            return;
        this.transform.scaleX = x;
        this.transform.scaleY = y;
    }
    // 注册自定义组件
    regShape(name, shape) {
        if (typeof name === 'object') {
            for (const n in name) {
                this.regShape(n, name[n]);
            }
            return;
        }
        if (this.shapes.has(name))
            console.warn(`元素类型${name}已经存在`);
        this.shapes.set(name, shape);
        return shape;
    }
    // 创建元素
    createShape(type, option = {}) {
        const shape = typeof type === 'string' ? this.shapes.get(type) : type;
        if (!shape) {
            console.warn(`${type}不存在的元素类型`);
            return;
        }
        // @ts-ignore
        const el = new shape({
            ...option,
            editor: this,
            type,
        });
        return el;
    }
    fromJSON(data) {
        this.clear();
        //if(typeof data === 'string') data = JSON.parse(data);
        if (data.style) {
            this.style.apply(data.style); // 应用样式
        }
        this.resize(data.width || data.data.width, data.height || data.data.height);
        for (const c of data.children) {
            if (!c.type)
                continue;
            const item = this.createShape(c.type, c);
            item && this.addChild(item);
        }
    }
    /**
     * 生成编辑器对象
     * @param data
     * @param option
     */
    static create(option, data) {
        const editor = new JEditor(option);
        data && editor.fromJSON(data);
        return editor;
    }
    /**
     * 渲染成html结构
     * @param container 容器
     * @param data
     */
    static async renderDom(data, option) {
        let editor;
        if (data instanceof JEditor) {
            editor = data;
        }
        else {
            option = {
                ...option,
                editable: false,
                style: {
                    transformOrigin: 'left top',
                }
            };
            editor = await this.create(option, data);
        }
        // 如果指定了宽度，则把dom缩放到指定的大小
        if (option?.data?.width) {
            const scale = util.toNumber(option.data.width) / util.toNumber(editor.data.width);
            editor.scale(scale);
        }
        else if (option?.data?.width) {
            const scale = util.toNumber(option.data.height) / util.toNumber(editor.data.height);
            editor.scale(scale);
        }
        const dom = editor.dom;
        dom.style.position = 'relative';
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(editor);
            }, 200);
        });
    }
}

export { filters as CssFilters, JBaseComponent, JData, JEditor, JElement, JElementCssStyle, JElementData, JElementStyleDeclaration, JElementStyleProperty, JEvent, JImage, JImageData, JSvgData, JText, JTextData, JEditor as default, util };
