import Base from './base';
import JElement from '../core/element';

export default class JImage extends Base<HTMLImageElement> {
    constructor(option) {
        super({
            ...option,
            nodeType: 'img'
        });

        this.dom.onload = (e) => {
            this.emit('load', e);
        };
        this.dom.onerror = (e) => {
            this.emit('error', e);
        };

        this.src = option.url || option.src || '';
    }

    get src() {
        return this.target.dom.src;
    }
    set src(v: string) {
        this.target.dom.src = v;
    }
}