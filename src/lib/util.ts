export default {
    // 是否是数字
    isNumber(v: string|number) {
        return typeof v === 'number' ||  /^\s*[\d\.]+\s*$/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber(v: string) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    },
    // 是否是带角度单位的字符串
    isDegNumber(v: string) {
        return /^\s*[\d\.]+\s*deg\s*/i.test(v);
    },
    // 是否是带弧度单位的字符串
    isRadNumber(v: string) {
        return /^\s*[\d\.]+\s*rad\s*/i.test(v);
    },
    // 转为像素字符串格式 
    toPX(v: string|number) {
        if(this.isNumber(v)) return v + 'px';
        return v;
    },
    // 带像素或其它单位的转换为数字
    toNumber(v: string|number) {
        if(this.isNumber(v)) return Number(v);
        else if(typeof v === 'string') return parseFloat(v);
    },
    // 弧度转角度
    radToDeg(v: number) {
        return v * (180 / Math.PI);
    },
    // 角度转弧度
    degToRad(v: number) {
        return v * (Math.PI / 180);
    },
    // 转为角度格式
    toDeg(v: string|number) {
        if(this.isNumber(v)) return v + 'deg';
        if(typeof v === 'string' && this.isRadNumber(v)) return this.toDeg(this.radToDeg(parseFloat(v)));
        return v;
    },
    // 转为弧度格式
    toRad(v: string|number) {
        if(this.isNumber(v)) return v + 'rad';
        if(typeof v === 'string' && this.isDegNumber(v)) return this.toRad(this.degToRad(parseFloat(v)));
        return v;
    },
    /**
     * 获取元素的绝对定位
     *
     * @method getElementPosition
     * @static
     * @param {element} el 目标元素对象
     * @return {position} 位置对象(top,left)
     */
    getElementPosition(el: HTMLElement) {    
        const pos = {"y": 0, "x": 0};
        if(!el) return pos;

        if (el.offsetParent) {
            while (el.offsetParent) {
                pos.y += el.offsetTop;
                pos.x += el.offsetLeft;
                el = el.offsetParent as HTMLElement;
            }
        }
        // @ts-ignore
        else if(el.x) {
            // @ts-ignore
            pos.x += el.x;
        }
        // @ts-ignore
        else if(el.y){
            // @ts-ignore
            pos.y += el.y;
        } 
        return pos;
    },
    /**
     * 把一个或多个点绕某个点旋转一定角度
     * 先把坐标原点移到旋转中心点，计算后移回
     * @method rotatePoints
     * @static
     * @param {Array/object} p 一个或多个点
     * @param {x: number, y: number} rp 旋转中心点
     * @param {*} r 旋转角度
     */
    rotatePoints<T extends ({x: number, y: number}|Array<{x: number, y: number}>)>(p: T, center:　{x: number, y: number}, r: number): T {
        if(!r || !p) return p;
        let cos = Math.cos(r);
        let sin = Math.sin(r);
        if(Array.isArray(p)) {
            for(let i=0;i<p.length;i++) {
                if(!p[i]) continue;
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
    }
}