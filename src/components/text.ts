import Base from './base';
import JElement from '../core/element';

export default class JText extends Base<HTMLDivElement> {
    constructor(option) {
        super({
            ...option,
            nodeType: 'div'
        });
    }
}