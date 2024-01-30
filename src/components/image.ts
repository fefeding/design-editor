import Base from '../core/baseComponent';
import { JImageData } from '../constant/data';
import { IJImageComponent } from '../constant/types';

export default class JImage extends Base<HTMLImageElement> implements IJImageComponent {
    constructor(option={} as any) {
        super({
            ...option,
            nodeType: 'img',
            dataType: JImageData
        });

        this.target.dom.onload = (e) => {
            this.emit('load', e);
        };
        this.target.dom.onerror = (e) => {
            this.emit('error', e);
        };

        this.target.attr('crossorigin', 'anonymous');

        
        // 属性变化映射到style
        this.data.watch([
            'src'
        ], {
            set: (item) => {
                this.target.dom.src = item.value;
            },
            get: (name: string) => {
                return this.target.dom.src;
            }
        });
        const src = option.url || option.src;
        if(src) this.data.src = src;
    }

    data: JImageData;

    toJSON(props = []) {
        props.push('src');
        return super.toJSON(props);
    }
}