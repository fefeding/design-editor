import Base from './base';
import { IJBaseComponent } from '../constant/types';

export default class JText extends Base<HTMLDivElement> implements IJBaseComponent {
    constructor(option = {} as any) {
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