// 兼容旧浏览器的 addEventListener
export function addEvent(element, eventName, handler, opt) {
    if (opt === void 0) { opt = false; }
    if (element.addEventListener) {
        element.addEventListener(eventName, handler, opt);
    }
    else if (element.attachEvent) {
        // IE8及以下版本浏览器
        element.attachEvent('on' + eventName, handler);
    }
    else {
        // 最老版本浏览器使用赋值方式
        element['on' + eventName] = handler;
    }
}
// 兼容旧浏览器的 removeEventListener
export function removeEvent(element, eventName, handler, opt) {
    if (opt === void 0) { opt = false; }
    if (element.removeEventListener) {
        element.removeEventListener(eventName, handler, opt);
    }
    else if (element.detachEvent) {
        // IE8及以下版本浏览器
        element.detachEvent('on' + eventName, handler);
    }
    else {
        // 最老版本浏览器使用赋值方式
        element['on' + eventName] = null;
    }
}
