export default {
    // 是否是数字
    isNumber(v: string|number) {
        return typeof v === 'number' ||  /\s*[\d\.]+\s*/.test(v);
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
    }
}