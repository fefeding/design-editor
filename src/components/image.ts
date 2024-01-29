import Base from './base';
import { IJBaseComponent } from 'src/constant/types';

export default class JImage extends Base<HTMLImageElement> implements IJBaseComponent {
    constructor(option={} as any) {
        super({
            ...option,
            nodeType: 'img'
        });

        this.target.dom.onload = (e) => {
            this.emit('load', e);
        };
        this.target.dom.onerror = (e) => {
            this.emit('error', e);
        };

        this.target.attr('crossorigin', 'anonymous');

        this.src = option.url || option.src || '';
    }

    get src() {
        return this.target.dom.src;
    }
    set src(v: string) {
        this.target.dom.src = v;
    }

    toJSON(props = []) {
        props.push('src');
        return super.toJSON(props);
    }
}