import Base from '../core/baseComponent';
import { IJBaseComponent } from '../constant/types';
import { topZIndex } from '../constant/styleMap';
import util from '../lib/util';
import JElement from '../core/element';

export default class JText extends Base<HTMLDivElement> implements IJBaseComponent {
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
            nodeType: 'div'
        });

        if(option.text) this.text = option.text;

        // 双击可编辑
        this.on('dblclick', ()=>{
            this.edit();
        });
        this.on('select', ()=>{
            this.closeEdit();
        });
    }

    get text() {
        return this.target.dom.innerText;
    }
    set text(v: string) {
        this.target.dom.innerText = v;
    }

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
        editEl.dom.value = this.text;

        const w = util.toNumber(this.width) * 1.2;
        const h = util.toNumber(this.height) * 1.2;

        const style = {} as any;
        style.width = Math.max(w, 100) + 'px';
        style.height = Math.max(h, 100) + 'px';

        style.top = this.top;
        style.left = this.left;
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
        this.text = editEl.dom.value;
        editEl.visible = false;
    }

    toJSON(props = []) {
        props.push('text');
        return super.toJSON(props);
    }
}