import Base from './base';
import JElement from '../core/element';

export default class JText extends Base<HTMLDivElement> {
    constructor(option) {
        super({
            ...option,
            nodeType: 'div'
        });

        if(option.text) this.text = option.text;
    }

    get text() {
        return this.target.dom.innerText;
    }
    set text(v: string) {
        this.target.dom.innerText = v;
    }

    toJSON(props = []) {
        props.push('text');
        return super.toJSON(props);
    }
}