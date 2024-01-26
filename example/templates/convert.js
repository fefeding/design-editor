const fs = require('fs');


for(const id of [1,2,3,4]) {

const data = JSON.parse(fs.readFileSync(`./${id}.json`, 'utf8'));

const res = convertElement(data);

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

    for(const k in res.style) {
        if(k.startsWith('_')) delete res.style[k];
        if((res.type === 'text' || res.type === 'image')) {            
            if(k === 'fill') {
                if(Array.isArray(res.style[k])) res.style[k] = res.style[k][0];
                res.style.color = res.style[k];
                delete res.style[k];
            }
            if(k === 'align') {
                res.style['text-align'] = res.style['align'];
                delete res.style[k];
            }
        }
    }

    if(el.children) {
        for(const c of el.children) {
            res.children.push(convertElement(c));
        }
    }
    return res;
}
