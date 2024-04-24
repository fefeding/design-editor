import CssFilterManager from 'j-css-filters';
import JElement from '../core/element';
/**
 * @public
 */
export default class JBaseHtmlElement extends JElement {
    constructor(option = {}) {
        option.style = option.style || {};
        super({
            ...option,
            // @ts-ignore
            nodeType: option.type || 'div',
        });
        this.filters = new CssFilterManager(this, option.filters); // 滤镜
        // 属性变化映射到style
        this.data.watch([
            'text', 'html'
        ], {
            set: (item) => {
                if (item.name === 'text') {
                    this.dom.textContent = item.value || '';
                }
                else if (item.name === 'html') {
                    this.dom.innerHTML = item.value || '';
                }
            },
            get: (name) => {
                if (name === 'text') {
                    return this.dom.textContent;
                }
                else if (name === 'html') {
                    return this.dom.innerHTML;
                }
            }
        });
        // @ts-ignore
        if (option.text)
            this.data.text = option.text;
        // @ts-ignore
        if (option.html)
            this.data.html = option.html;
        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }
    filters;
    /**
     * 类型名称
     */
    get typeName() {
        return this.type;
    }
}
