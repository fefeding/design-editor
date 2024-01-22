
const fs = require('fs');
const request = require('request');

exports.getImageData = async function(url, file) {
    return new Promise(resolve=>{
        
        request(url).pipe(fs.createWriteStream(file)).on('close', ()=>{
            resolve();
        });
    })
}

exports.saveToTemplate = async function (tmpl) {
    let imgIndex = 1;
    if(tmpl.data.backgroundUrl) {
        const file = `images/${tmpl.id}_${++imgIndex}.png`;
        await exports.getImageData(tmpl.data.backgroundUrl, `${__dirname}/${file}`);
        tmpl.data.backgroundUrl= `templates/${file}`;
    }
    for(const w of tmpl.data.children) {
        if(w.type === 'image' && w.url.startsWith('http')) {
            const file = `images/${tmpl.id}_${++imgIndex}.${w.fileType||'png'}`;
            await exports.getImageData(w.url, `${__dirname}/${file}`);
            w.url = `templates/${file}`;
        }
    }
    fs.writeFileSync(`${createTemplateFile(tmpl.id)}`, JSON.stringify(tmpl));
}

function createTemplateFile(id) {
    return `${__dirname}/${id}.json`;
}

// 生成ID
exports.getTemplateId = function() {
    let id = 1;
    while(true) {
        const file = createTemplateFile(id);
        if(fs.existsSync(file)) {
            id ++
        }
        else {
            break;
        }
    }
    return id;
}

/**
     * 16进制颜色转为r g b a 对象 {r, g , b, a}
     * @param {string}} hex 16进度的颜色
     */
 exports.hexToRGBA = function(hex) {
    if(hex && typeof hex === 'string') hex = hex.trim();   
    else return hex;


    let res = hex;


    //当为7位时，表示需要转为带透明度的rgba
    if(res[0] == '#') {
        const color = {
            a: 1
        };
        if(res.length >= 8) {
            color.r = res.substr(1,2);
            color.b = res.substr(5,2);
            color.a = res.substr(7,2);
            color.g = res.substr(3,2);
            //透明度
            color.a = Number((hexToNumber(color.a) / 255).toFixed(4));

            color.r = hexToNumber(color.r||0);
            color.g = hexToNumber(color.g||0);
            color.b = hexToNumber(color.b||0);
            res = color; 
        }
        // #cccccc || #ccc
        else if(res.length === 7 || res.length === 4) {
            // #ccc这种情况，把每个位复制一份
            if(res.length === 4) {
                color.g = res.substr(2, 1);
                color.g = color.g + color.g;
                color.b = res.substr(3, 1);
                color.b = color.b + color.b;
                color.r = res.substr(1, 1);
                color.r = color.r + color.r;
            }
            else {
                color.g = res.substr(3, 2);//除#号外的第二位
                color.b = res.substr(5, 2);
                color.r = res.substr(1, 2);
            }

            color.r = hexToNumber(color.r||0);
            color.g = hexToNumber(color.g||0);
            color.b = hexToNumber(color.b||0);
            
            res = color; 
        }
        //如果是5位的话，# 则第2位表示A，后面依次是r,g,b
        else if(res.length === 5) {
            color.a = res.substr(1,1);
            color.g = res.substr(3,1);//除#号外的第二位
            color.b = res.substr(4,1);
            color.r = res.substr(2,1);

            color.r = hexToNumber(color.r||0);
            color.g = hexToNumber(color.g||0);
            color.b = hexToNumber(color.b||0);
            //透明度
            color.a = Number((hexToNumber(color.a) / 255).toFixed(4));
            res = color; 
        }
    }  
    
    return typeof res !== 'string'?`rgba(${res.r},${res.g},${res.b},${res.a})`:res;     
}

/**
     * 转换16进制为数值
     *
     * @method hexToNumber
     * @static
     * @param {string} h 16进制颜色表达
     * @return {number} 10进制表达
     */
 function hexToNumber(h) {
    if(typeof h !== 'string') return h;

    h = h.toLowerCase();
    let hex = '0123456789abcdef';
    let v = 0;
    let l = h.length;
    for(let i=0;i<l;i++) {
        let iv = hex.indexOf(h[i]);
        if(iv == 0) continue;
        
        for(let j=1;j<l - i;j++) {
            iv *= 16;
        }
        v += iv;
    }
    return v;
}
