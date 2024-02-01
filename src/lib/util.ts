


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
     * @param  el - 目标元素对象
     * @returns  位置对象(top,left)
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
    // 获取元素bounds
    getElementBoundingRect(el: HTMLElement) {
        let bounds = {
            height: 0,
            width: 0,
            x: 0,
            y: 0
        };
        if(el.getBoundingClientRect) {
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
    // 把domcument坐标转为指定元素相对坐标
    toDomPosition(pos: {x: number, y: number}, dom: HTMLElement) {
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
    },

    // 设置样式
    css(dom: any, name: string|Object, value?: string|number) {
        if(!name) return;
        if(typeof name === 'object') {
            for(const n of Object.getOwnPropertyNames(name)) {
                this.css(dom, n, name[n]);
            }
        }
        else {
            dom.style[name] = value;
        }
        return this;
    },
    // dom属性
    attr(dom: any, name: string, value: string|number|undefined) {
        if(typeof value !== 'undefined') {
            dom.setAttribute(name, value+'');
            return value;
        }
        else {
            return dom.getAttribute(name);
        }
    },
    // 本地唯一ID，这个只要保证当前线程唯一即可，非全球唯一
    uuid() {
        const time = Date.now();
        const rnd = Math.floor(Math.random() * 10000000000);
        return (time + rnd).toString();
    },
    // 把图片旋转一定角度，返回base64
    async rotateImage(url: string, rotation: number): Promise<string> {
        return new Promise((resolve, reject)=>{
            const img = new Image();
            img.onload = function(e) {
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
            img.onerror = function(e){
                reject && reject(e);
            }
            img.src=url;
        });
    },
    // 请求远程资源
    async request(url: string, option?: {
        method?: string,
        headers?: {[key:string]: string},
        data?: {[key:string]: string}
    }): Promise<string> {
        option = option || {};
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();//新建XMLHttpRequest对象
            if(option.headers) {
                for(const name in option.headers) {
                    request.setRequestHeader(name, option.headers[name]);
                }
            }
            const params = [];
            if(option.data) {
                for(const name in option.data) {
                    params.push(`${name}=${encodeURIComponent(option.data[name])}`);
                }
            }
            const method = option.method? option.method.toUpperCase() : 'GET';
            if(method === 'GET') {
                url += (url.includes('?')?'&':'?') + params.join('&')
            }
            request.onreadystatechange = function (e) { //状态发生变化时，函数被回调
                if (this.readyState === 4) { //成功完成
                    //判断相应结果：
                    if (this.status ===200) {
                        resolve(this.responseText);
                    } else {
                        reject(e);
                    }
                }
            }
            //发送请求：
            request.open(method, url);
            request.send(method === 'POST'? params.join('&'): null);
        });
    }
}