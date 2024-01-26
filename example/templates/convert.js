const fs = require('fs');


for(const id of [1,2,3,4]) {

    let data = JSON.parse(fs.readFileSync(`./${id}.json`, 'utf8'));
    const res = {
        id,
        data: null
    }
    res.data = convertElement(data.data || data);

    fs.writeFileSync(`./${id}.json`, JSON.stringify(res), 'utf8');
}

function convertElement(el) {
    const res = {
        style: el.style || {},
        width: el.width || 0,
        height: el.height || 0,
        id: el.id || '',
        type: el.type || '',
        children: []
    };

    if(el.text) res.text = el.text;
    if(el.rotation) res.rotation = el.rotation;
    if(el.backgroundUrl) res.style.backgroundImage = el.backgroundUrl;
    if(el.backgroundColor) res.style.backgroundColor = el.backgroundColor;

    if(el.x) {
        res.left = el.x - res.width/2;
    }
    if(el.y) {
        res.top = el.y - res.height/2;
    }

    if(el.url) res.src = el.url;

    for(let k in res.style) {
        let v = res.style[k];
        if(k.startsWith('_')) {            
            delete res.style[k];
            k = k.replace(/^_/, '');
            res.style[k] = v;
        }
        if((res.type === 'text' || res.type === 'image')) {            
            if(k === 'fill') {
                if(Array.isArray(v)) v = v[0];
                res.style.color = v;
                delete res.style[k];
            }
            if(k === 'align') {
                res.style['textAlign'] = v;
                delete res.style[k];
            }
        }
        if(k === 'fontSize' && v && !(v+'').includes('px')) {
            if(res.style['lineHeight'] && !(res.style['lineHeight']+'').includes('px')) {
                res.style['lineHeight'] = (v * res.style['lineHeight']) + 'px';
            }
            res.style[k] = v + 'px';
        }
        

        if(k === 'wordWrap' && v) {
            res.style['wordWrap'] = 'break-word';
            res.style['wordBreak'] = 'keep-all';
            res.style['whiteSpace'] = 'pre-wrap';
        }
    }

    if(el.children) {
        for(const c of el.children) {
            res.children.push(convertElement(c));
        }
    }
    return res;
}
