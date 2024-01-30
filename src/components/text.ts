import Base from '../core/baseComponent';
import { IJTextComponent } from '../constant/types';
import { JTextData } from '../constant/data';
import { topZIndex } from '../constant/styleMap';
import util from '../lib/util';
import JElement from '../core/element';

export default class JText extends Base<HTMLDivElement> implements IJTextComponent {
    constructor(option = {} as any) {

        option.style = {
            fontFamily: 'Arial',
            textAlign: 'left',
            fontSize: 22,
            fontWeight: 'normal',
            fontStyle: 'normal',
            wordWrap: true,
            wordBreak: "keep-all",
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

        const text = option.text;
        if(text) this.data.text = text;

        // 双击可编辑
        this.on('dblclick', ()=>{
            this.edit();
        });
        this.on('select', ()=>{
            this.closeEdit();
        });
    }

    data: JTextData;

    // 进入编辑状态
    edit() {
        if(!this.editable) return;
        let editEl = this.editor.textEditElement;
        if(!editEl) {
            editEl = this.editor.textEditElement = new JElement<HTMLTextAreaElement>({
                nodeType: 'textarea',
                visible: false,
                zIndex: topZIndex,
                style: {
                    boxSizing: 'border-box',
                    padding: '4px',
                    position: 'absolute',
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

        const w = util.toNumber(this.data.width) * 1.2;
        const h = util.toNumber(this.data.height) * 1.2;

        const style = {} as any;
        style.width = Math.max(w, 100) + 'px';
        style.height = Math.max(h, 100) + 'px';

        style.top = this.data.top;
        style.left = this.data.left;
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
        if(!editEl) return;
        // 编辑的是当前元素，才采用它的值
        if(editEl.attr('data-target') === this.id) {
            this.data.text = editEl.dom.value;
        }
        editEl.data.visible = false;
        editEl.dom.value = '';// 置空
    }

    toJSON(props = []) {
        props.push('text');
        return super.toJSON(props);
    }
}