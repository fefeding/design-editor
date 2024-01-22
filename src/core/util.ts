export default {
    // 是否是数字
    isNumber(v: string|number) {
        return typeof v === 'number' ||  /\s*[\d\.]+\s*/.test(v);
    },
    // 是否是带像素单位的字符串
    isPXNumber(v: string) {
        return /^\s*[\d\.]+\s*px\s*/i.test(v);
    }
}