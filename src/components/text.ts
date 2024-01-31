import Base from '../core/baseComponent';
import { IJTextComponent, ITextOption } from '../constant/types';
import { JTextData } from '../constant/data';
import { topZIndex } from '../constant/styleMap';
import util from '../lib/util';
import JElement from '../core/element';

export default class JText extends Base<HTMLDivElement> implements IJTextComponent {
    constructor(option = {} as ITextOption) {

        option.style = {
            fontFamily: 'Arial',
            textAlign: 'left',
            fontSize: 22,
            fontWeight: 'normal',
            fontStyle: 'normal',
            wordBreak: "keep-all",
            wordWrap: "break-word",
            ...option.style
        };

        super({
            ...option,
            nodeType: 'div',
            dataType: JTextData
        });

        // 属性变化映射到style
        this.data.watch([
            'text'
        ], {
            set: (item) => {
                this.target.dom.innerText = item.value;
            },
            get: (name: string) => {
                return this.target.dom.innerText;
            }
        });
        // @ts-ignore
        const text = option.text;
        if(text) this.data.text = text;

        // 双击可编辑
        this.on('dblclick', ()=>{
            this.edit();
        });
        this.on('select', ()=>{
            this.closeEdit();
        });

        JText.TextControlCache.set(this.id, this);// 缓存起来
    }

    data: JTextData;

    // 所有控件缓存
    static TextControlCache = new Map<string, JText>();

    // 进入编辑状态
    edit() {
        if(!this.editable) return;
        let editEl = this.editor.textEditElement;
        if(!editEl) {
            editEl = this.editor.textEditElement = new JElement<HTMLTextAreaElement>({
                nodeType: 'textarea',
                visible: false,
                style: {
                    boxSizing: 'border-box',
                    padding: '4px',
                    position: 'absolute',
                    zIndex: topZIndex,
                    resize: 'both'
                }
            });
            editEl.on('blur', (e) => {
                this.closeEdit();
            });
            editEl.on('click dblclick mousedown', (e)=>{ 
                e.stopPropagation();                
            });
            this.editor.dom.appendChild(editEl.dom);
        }
        editEl.dom.value = this.data.text;
        editEl.attr('data-target', this.id);

        const w = util.toNumber(this.data.width) * 1.5;
        const h = util.toNumber(this.data.height) * 1.2;

        const style = {} as any;
        style.width = Math.max(w, 100) + 'px';
        style.height = Math.max(h, 100) + 'px';

        style.top = util.toNumber(this.data.top) - 4;
        style.left = util.toNumber(this.data.left) - 4;
        style.fontSize = this.style.fontSize;
        style.fontFamily = this.style.fontFamily;
        style.fontWeight = this.style.fontWeight;
        style.display = 'inline-block';

        util.css(editEl, style);
        editEl.dom.focus();// 进入控件
    }
    // 结束编辑 
    closeEdit() {
        const editEl = this.editor.textEditElement;
        if(!editEl || !editEl.visible) return;
        // 编辑的是当前元素，才采用它的值
        const id = editEl.attr('data-target');
        const target = JText.TextControlCache.get(id);
        if(target instanceof JText) {
            target.data.text = editEl.dom.value;
            editEl.data.visible = false;
            editEl.dom.value = '';// 置空
        }
    }

    toJSON(props = []) {
        props.push('text');
        return super.toJSON(props);
    }

    dispose(): void {
        JText.TextControlCache.delete(this.id); 
        super.dispose();
    }
}