import util from 'j-design-util';
import CssFilterManager, { filters as cssFilters, IFilterManager } from 'j-css-filters';
import { IElementOption, IJBaseComponent, IJElement } from '../constant/types';
import { ContainerDefaultStyle } from '../constant/styleMap';
import { SupportEventNames, ElementWatchEventNames } from '../core/event';
import JElement from '../core/element';
import { JDomElement } from '../constant/elementTypes';
/**
 * @public
 */
export default class JBaseHtmlElement extends JElement {
    constructor(option = {} as IElementOption) {
        option.style = option.style || {};
        super({
            ...option,
            // @ts-ignore
            nodeType: option.type || 'div',
        });

        this.filters = new CssFilterManager(this, option.filters);// 滤镜

        // 属性变化映射到style
        this.data.watch([
            'text', 'html'
        ], {
            set: (item) => {
                if(item.name === 'text') {
                    this.dom.textContent = item.value || '';
                }
                else if(item.name === 'html') {
                    this.dom.innerHTML = item.value || '';
                }
            },
            get: (name: string) => {
                if(name === 'text') {
                    return this.dom.textContent;
                }
                else if(name === 'html') {
                    return this.dom.innerHTML;
                }
            }
        });
        // @ts-ignore
        if(option.text) this.data.text = option.text;
        // @ts-ignore
        if(option.html) this.data.html = option.html;

        this.data.on('change', (e) => {
            this.emit('dataChange', {
                type: 'dataChange',
                target: this,
                data: e
            });
        });
    }

    filters: IFilterManager;

    /**
     * 类型名称
     */
    get typeName(): string {
        return this.type;
    }
}