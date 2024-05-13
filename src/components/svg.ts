import Base from '../core/baseComponent';
import util from '@fefeding/utils';
import { JSvgData } from '../constant/data';
import { IJSvgComponent, ISvgOption, IJBaseComponent, IJElement, IElementOption } from '../constant/types';
import { DomNode, JDomElement } from '../constant/elementTypes';
import JElement from '../core/element';

export default class JSvg extends Base<SVGElement> implements IJSvgComponent {
    constructor(option={} as ISvgOption) {
        super({
            ...option,
            type: option.type || 'svg',
            nodeType: 'svg',
            dataType: option.dataType || JSvgData
        });

        
        // 属性变化映射到style
        this.data.watch([
            'url', 'svg', 'src'
        ], {
            set: (item) => {
                if(item.name === 'url') {
                    this.load(item.value);
                }
                if(item.name === 'src') {
                    this.data.url = item.value;
                }
                else if(item.name === 'svg') {
                    this.target.dom.innerHTML = item.value;
                }
            }
        });
    }

    declare data: JSvgData;

    /**
     * 类型名称
     */
    get typeName(): string {
        return 'svg';
    }

    // 添加元素到画布
    addChild(child: IJBaseComponent | IJElement | JDomElement) {
        if(child === this.target || child instanceof Element || !(child instanceof Base)) {
            return super.addChild(child);
        }
        const children = child.option?.children || child.option?.target?.children;
        if(children?.length) {
            for(const opt of child.option.children) {
                const c = this.createSvgElement(opt.type || opt.nodeType, opt);
                c && child.addChild(c);
            }
        }

        return child;
    }
    
    createSvgElement(tag, node: IElementOption) {
        const el = new JElement<JDomElement>({
            ...node,
            nodeType: tag,            
        });
    
        this.renderSvgElement(node, el);
       
        return el;
    }
    
    // 设置dom属性
    renderSvgElement(node: IElementOption, el: JElement) {
        // @ts-ignore
        if(node.preserveRatio && node.type === 'img') el.style.height = 'auto';
        // @ts-ignore
        if(node.fill) el.attr('fill', node.fill); 
        if(node.id) el.attr('id', node.id);    
        if(node.name) el.attr('data-name', node.name);    
    
        if(node.children) {
            for(const child of node.children) {
                if(child.visible === false) continue;
                const c = this.createSvgElement(child.type||child.nodeType, child);
                c && el.addChild(c);
            }
        }
        return el;
    }

    // 加载svg内容
    async load(url: string = this.data.url) {
        const svg = await util.request(url);
        this.data.svg = svg;
    }
}