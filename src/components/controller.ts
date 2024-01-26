
import util from 'src/lib/util';
import JElement from '../core/element';

// 鼠标指针
const GCursors = {
    'l': 'w-resize',
    'lt': 'nw-resize',
    't': 'n-resize',
    'tr': 'ne-resize',
    'r': 'e-resize',
    'rb': 'se-resize',
    'b': 's-resize',
    'lb': 'sw-resize',
    'rotate': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAgVBMVEUAAAAiK9MjKdUfKNYjKdUiKNYiKdUeHuAjKNYjKNYiKNYyMswiKNYiKNYiKNYiKNYhKNYiKdUiKNYiKNYjKdUjKNYgJ9cjJdYiKNYiKNYiKdUhJ9cjKNYiKdUdLNMrK9MiKNYiKNYiKdUiKNYjKNYjKdUjKdUjKNYjKdUjKdUjKdaUW7eVAAAAKnRSTlMAFdMY1/v4CPXo4wXuyLh6RfKRjWpAJxykb1tSTjARC8OslYVgOivQrqey7caqAAABM0lEQVRIx+2U6W6DMBCEDdSE+2wg950e3/s/YGOBQI0hMf+qKvODHYsZe9derXjh32C2PsU+BIcyCw3kVhnRIUj3z/TvEcTp1RGizs42BJvH+kqSbPtlFkP52LFc353oshCTMM8pJzpchuuwrLEs8fdDes9zRhwH0gG9DbY1khR+OKQfd9hkuv4Nbp/hrFIKXe+ANebIiHW9gJbod2fhN7zTq+Shpb/3UusQ2fGeuMw6rtBv1vxraX9UgNNwPV1l0NONmbdMd7jUenkFqRhzyKEr3/DZENNHDSOuKpq3zZlEBfPG3EVcVDRv/RX5VkzCAv9jkiFMyO+GwHb1eOgt4Kvq104hverJIMshea/CG61X3y6yeDb7nJMHyChwVTia1LS7HAMJ+MmyNp/gO2cmXvjD+AHprhpoJKiYYAAAAABJRU5ErkJggg==',
    'skew': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAdVBMVEUAAABlY/97e/9kYv9kY/9nZ/9lY/9kYv9kY/9kYv9kY/9lY/9kYv9kY/9pYP9oYP9kYv9kYv9kY/9kYv9iYv9nY/9kYv9lYv9kYv9lYv9lY/9kYv9lYv9kY/9kYv9lZf9lY/9kYv9kYv9lYv9kYv9lY/9lY/+ktQNRAAAAJnRSTlMA/ATv3xHmW/V0TtO3khcNy8XBUh8U6ti+ppt5bksnGTqygmNEZ0ctpdUAAAEmSURBVEjH7VPbloIwDKSloAUqF6kgd123//+Ja+jSSpGqD74xbynJycxkcDZs+BIOAa2ygrgIuaQoKxocbN03FooFQnZ73u1RIlZQUG/ZvzsJC9zGaOeZkEAJa9ou9zD28q5tWIKERDZb0kvu+3MQm5vj4LyXWh7k42Rce/VW1F1d+J5g9fILddmv29eX0PGj6vReRdhmOI7uLakqgWTnWNGBRFWBo7l9IAeRqgKGFzulCzirjyZAxGRb6/tHM2GREq1VC7eWtvpCoN3M1nq0NX3gwAt9OBiACfNwZKaSRyoaVST0xJBN0UjNMzVG+NCog0zho0tP4noebwKP/2zq+Ll5AwuNAYpEyIZXv+hJU3I4d17iiKToN6Fs/WDgg34djQ0bvo4/naYvgs8xmvwAAAAASUVORK5CYII='
};

// 控制元素移动和矩阵变换
export class JControllerItem extends JElement<HTMLDivElement> {
    constructor(option) {

        option.style = option.style || {};
        option.style.backgroundColor = option.style.backgroundColor || '#fff';
        option.style.border =  option.style.border|| '1px solid rgba(6,155,181,1)';
        option.style.position = 'absolute';

        super(option);

        this.dir = option.dir || '';
        this.size = option.size || 8;
        this.style.cursor = this.style.cursor || GCursors[this.dir];
        this.width = this.height = this.size;

        this.editor = option.editor;

        if(this.editor) {
            // @ts-ignore
            this.editor.container.on('mouseup', (e) => {
                this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.container.on('mouseout', (e) => {
                if(e.target !== this.editor.dom) return;// 不是out编辑器，不处理
                this.onDragEnd(e);
            });
            // @ts-ignore
            this.editor.container.on('mousemove', (e) => {
                this.onDragMove(e);
            });
        }
        this.on('mousedown', (e) => {
            this.onDragStart(e);
        });
    }

    dir: string = '';
    size: number = 8;
    // 当前编辑器
    editor: JElement;

    protected _isMoving = false;
    get isMoving() {
        return this._isMoving;
    }
    set isMoving(v) {
        this._isMoving = v;
    }

    // 拖放位置
    dragStartPosition = {
        x: 0,
        y: 0,
    };

    onDragMove(event: MouseEvent, pos: {x: number, y: number} = event) {
        if(!this.isMoving) return;
        
        const offX = (pos.x - this.dragStartPosition.x);
        const offY = (pos.y - this.dragStartPosition.y);
        
        this.emit('change', {
            dir: this.dir,
            offX,
            offY,
            oldPosition: this.dragStartPosition,
            newPosition: {
                x: pos.x,
                y: pos.y
            },
            event
        });
        
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition.x = pos.x;
        this.dragStartPosition.y = pos.y;

        event.stopPropagation();
        event.preventDefault();
    }
    
    onDragStart(event: MouseEvent, pos: {x: number, y: number} = event)   {
        
        // 选中的是渲染层的坐标，转为控制层的
        this.dragStartPosition = {
            x: pos.x,
            y: pos.y,
        };

        this.isMoving = true;

        event.stopPropagation && event.stopPropagation();
        event.preventDefault && event.preventDefault();
    }
    
    onDragEnd(event: MouseEvent, pos: {x: number, y: number} = event)  {
        if(this.isMoving) {
            this.isMoving = false;
        }
    }

    // 计算指针
    resetCursor(rotation: number) {
        
        // 先简单处理
        if(!rotation || (rotation > -Math.PI/6 && rotation< Math.PI/6)) {
            this.style.cursor = GCursors[this.dir];
        }
        else {
            this.style.cursor = 'move';
        }
    }

}

// 元素大小位置控制器
export default class JControllerComponent extends JControllerItem {
    constructor(option) {
        option.zIndex = 100000;
        option.style = option.style || {};
        option.style.cursor = option.style.cursor || 'move';
        option.dir = 'element';
        option.style.backgroundColor = option.style.backgroundColor || 'transparent';
        //option.style.boxShadow = '0 0 2px 2px #ccc';
        super(option);
        this.init(option);
        // html2canvas不渲染
        this.attr('data-html2canvas-ignore', 'true');
    }

    init(option) {
        
        this.createItem('l', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: 0,
                top: '50%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lt', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: 0,
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('t', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '50%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('tr', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '100%',
                top: 0,
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('r', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '100%',
                top: '50%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('rb', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '100%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('b', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: '50%',
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });
        this.createItem('lb', {
            shape: 'rect', 
            style: {
                ...option.itemStyle,
                left: 0,
                top: '100%',
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });

        // 旋转块
        this.rotateItem = this.createItem('rotate', {
            shape: 'circle', 
            size: 24,
            style: {
                left: '50%',
                top: '-40px',
                //backgroundColor: 'transparent',
                border: 'none',
                boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.itemStyle,
                'backgroundSize': '100%',
                backgroundImage: GCursors.rotate
            },
            transform: {
                translateX: '-50%',
            }
        });
        this.skewItem = this.createItem('skew', {
            shape: 'circle', 
            size: 24,
            style: {
                left: '50%',
                top: '50%',
                border: 'none',
                boxShadow: '0 0 2px 2px #ccc',
                borderRadius: '50%',
                cursor: `pointer`,
                ...option.itemStyle,
                'backgroundSize': '100%',
                backgroundImage: GCursors.skew
            },
            transform: {
                translateX: '-50%',
                translateY: '-50%'
            }
        });// 旋转块 
        
        
        if(this.editor) {
            this.editor.on('mousedown', (e) => {
                if(!this.isEditor) return;// 不是编辑器，不处理
                this.onDragStart(e);
            });
        }
        
        this.on('change', (e)=> {
            this.change(e);
        });
    }

    items = [] as Array<JControllerItem>;

    rotateItem: JControllerItem;
    skewItem: JControllerItem;

    target: JElement;
    // 选择框边距
    paddingSize = 1;

    isEditor = false;// 当前关联是否是编辑器

    // 生成控制点
    createItem(id, option) {
        const item = new JControllerItem({
            dir: id,
            editor: this.editor,
            ...option
        });
        this.addChild(item);
        this.items.push(item);

        const self = this;
        item.on('change', function(e) {
            self.change(e);
            // 重置指针
            this.resetCursor(self.transform.rotateZ);
        });
        return item;
    }

    // 发生改变响应
    change(e) {
        if(!this.target) return;
        let {dir, offX, offY, } = e;
        // 当前移动对原对象的改变
        const args = {
            x: 0, 
            y: 0, 
            width: 0, 
            height: 0,
            rotation: 0,
            skew: {
                x: 0,
                y: 0
            }
        };
        if(dir === 'rotate') {
            this.rotateChange(e, args);
        }
        else if(dir === 'element') {
            // 元素位置控制器
            args.x = offX;
            args.y = offY;
        }
        else {
            // 先回原坐标，再主算偏移量，这样保证操作更容易理解
            if(this.transform.rotateZ) {
                const pos = this.getRotateEventPosition(e);
                offX = pos.offX;
                offY = pos.offY;
            }

            switch(dir) {                
                case 'l': {
                    args.x = offX;
                    args.width = -offX;
                    break;
                }
                case 't': {
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'r': {
                    args.width = offX;
                    break;
                }
                case 'b': {
                    args.height = offY;
                    break;
                }
                case 'lt':{   
                    args.x = offX;
                    args.width = -offX; 
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'tr':{   
                    args.width = offX; 
                    args.y = offY;
                    args.height = -offY;
                    break;
                }
                case 'rb':{   
                    args.width = offX; 
                    args.height = offY;
                    break;
                }
                case 'lb':{   
                    args.x = offX;
                    args.width = -offX; 
                    args.height = offY;
                    break;
                }
                case 'skew': {                    
                    const rx = offX / util.toNumber(this.width) * Math.PI;
                    const ry = offY / util.toNumber(this.height) * Math.PI;
                    args.skew.x = ry;
                    args.skew.y = rx;
                    break;
                }            
            }
        }
        // 位移
        if(args.x || args.y) {
            this.move(args.x, args.y);
        }
        if(args.width) {
            this.width = Math.max(util.toNumber(this.width) + args.width, 1);
        }
        if(args.height) {
            this.height = Math.max(util.toNumber(this.height) + args.height, 1);
        }
        // x,y旋转
        if(args.skew.x || args.skew.y) {
            this.target.transform.rotateX += args.skew.x;
            this.target.transform.rotateY += args.skew.y;
            this.target.transform.apply();
        }

        this.applyToTarget();
    }

    // 因为旋转后坐标要回原才好计算操作，
    getRotateEventPosition(e) {
        let {offX, offY, oldPosition, newPosition} = e;
        // 先回原坐标，再主算偏移量，这样保证操作更容易理解
        if(this.transform.rotateZ) {
            const center = {
                x: util.toNumber(this.left) + util.toNumber(this.width)/2,
                y: util.toNumber(this.top) + util.toNumber(this.height)/2,
            };
            const [pos1, pos2] = util.rotatePoints([oldPosition, newPosition], center, -this.transform.rotateZ);
            offX = pos2.x - pos1.x;
            offY = pos2.y - pos1.y;
        }
        return {
            offX,
            offY
        }
    }

    // 发生旋转
    rotateChange(e, args) {
        const {oldPosition, newPosition} = e;
        const center = {
            x: util.toNumber(this.left) + util.toNumber(this.width)/2,
            y: util.toNumber(this.top) + util.toNumber(this.height)/2,
        };
        // 编辑器坐标
        // @ts-ignore
        const pos1 = this.editor.toEditorPosition(oldPosition);
        // @ts-ignore
        const pos2 = this.editor.toEditorPosition(newPosition);

        // 因为center是相对于编辑器的，所以事件坐标也需要转到编辑器
        const cx1 = pos1.x - center.x;
        const cy1 = pos1.y - center.y;
        let angle1 = Math.atan(cy1 / cx1);
        const cx2 = pos2.x - center.x;
        const cy2 = pos2.y - center.y;
        let angle2 = Math.atan(cy2 / cx2);


        if(angle1 >= 0 && angle2 < 0) {
            if(cx1 >= 0 && cy1 >= 0 && cx2 <= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
            else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 <= 0) angle2 = Math.PI + angle2;
            //else if(cx1 <= 0 && cy1 <=0 && cx2 >= 0 && cy2 >= 0) angle2 = Math.PI + angle2;
        }
        else if(angle1 <= 0 && angle2 >= 0) {
            if(cx1 >= 0 && cy1 <= 0 && cx2 < 0) angle2 = angle2 - Math.PI;
            else angle2 = -angle2;
        }
        else if(angle1 >= 0 && angle2 > 0) {
            //if(cy2 === 0) angle2 = 0;
        }
        args.rotation = angle2 - angle1;

        if(args.rotation) {
            this.transform.rotateZ += args.rotation;
            this.transform.apply();
        }
    }

    // 把变换应用到目标元素
    applyToTarget() {

        if(!this.target) return;

        this.target.left = util.toNumber(this.left) - (this.isEditor? 0 : util.toNumber(this.editor.left)) + this.paddingSize;
        this.target.top = util.toNumber(this.top) - (this.isEditor? 0 : util.toNumber(this.editor.top)) + this.paddingSize;

        this.target.transform.from({
            //skewX: this.transform.skewX,
            //skewY: this.transform.skewY,
            rotateZ: this.transform.rotateZ,
        });

        const width = util.toNumber(this.width) - this.paddingSize * 2;
        const height = util.toNumber(this.height) - this.paddingSize * 2;
        if(this.target.width !== width) this.target.width = width;
        if(this.target.height !== height) this.target.height = height;

    }

    // 重置
    reset(isEditor = this.isEditor) {
        this.isMoving = false;
        delete this.target;
        // 编辑器不让旋转和skew
        for(const item of this.items) {
            item.isMoving = false;
            item.visible = !isEditor;
        }
        this.transform.from({
             rotateZ: 0,
         });
    }

    // 绑定到操作的对象
    bind(target: JElement) {
        this.isEditor = target === this.editor;
        this.reset(this.isEditor);

        this.left = util.toNumber(target.left) + (this.isEditor? 0 : util.toNumber(this.editor.left)) - this.paddingSize;
        this.top = util.toNumber(target.top) + (this.isEditor? 0 : util.toNumber(this.editor.top)) - this.paddingSize;

        this.width = util.toNumber(target.width) + this.paddingSize * 2;
        this.height = util.toNumber(target.height) + this.paddingSize * 2;

        this.transform.from({
           // rotateX: target.transform.rotateX,
           // rotateY: target.transform.rotateY,
            rotateZ: target.transform.rotateZ,
            //scaleX: target.transform.scaleX,
            //scaleY: target.transform.scaleY,
            //scaleZ: target.transform.scaleZ,
        });
        this.target = target;
        this.visible = true;

        // 如果是编辑器，则不能捕获事件
        this.css({
            pointerEvents: this.isEditor? 'none' : 'auto'
        });
    }
    // 解除绑定
    unbind(target: JElement) {
        if(this.target === target) {
           this.reset(false);
        }
    }
}