
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
        this.transform.bind(this);
    }

    dir: string = '';
    size: number = 8;
    // 当前编辑器
    editor: JElement;

}

// 元素大小位置控制器
export default class JControllerComponent extends JControllerItem {
    constructor(option) {
        option.zIndex = 100000;
        option.style = option.style || {};
        option.style.cursor = option.style.cursor || 'move';
        option.style.backgroundColor = option.style.backgroundColor || 'rgba(0,0,0,0.01)';
        super(option);
        this.init(option);
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
        
        this.hoverItem = this.createItem('hover', {
            shape: 'rect',  
            style: {
                ...option.itemStyle,
                borderStyle: 'dotted',// 虚线
                backgroundColor: 'transparent'
            }
        });
        this.hoverItem.visible = false;        
    }

    items = [] as Array<JControllerItem>;

    rotateItem: JControllerItem;
    skewItem: JControllerItem;
    hoverItem: JControllerItem;

    // 拖放位置
    dragStartPosition = {
        x: 0,
        y: 0,
    };

    // 生成控制点
    createItem(id, option) {
        const item = new JControllerItem({
            dir: id,
            ...option
        });
        this.addChild(item);
        this.items.push(item);
/*
        const self = this;
        item.on('mousedown', function(event) {
            if(event.button === 2) {
                return;
            }
            self.onDragStart(event, this);
        });

        item.on('change', ({x, y, width, height, rotation, skew} = event) => {
            const w = this.width + width;
            const h = this.height + height;

            // 大小最少要有1
            if(w < 1) {
                x = 0;
            }
            else if(width !== 0) {
                this.width = w;
            }
            if(h < 1) {
                y = 0;
            }
            else if(height !== 0) {
                this.height = h;
            }
            
            if(x !== 0 || y !== 0 || width !== 0 || height !== 0) {
                this.move(x, y);
                //this.initShapes();  
            }   
            
            if(rotation) {
                this.rotation += rotation;
            }

            if(skew && (skew.x !== 0 || skew.y !== 0)) {
                //this.skew.x += skew.x;
                //this.skew.y += skew.y;
            }
        });*/
        return item;
    }

    // 绑定到操作的对象
    bind(target: JElement) {
        this.left = Number(target.left) + Number(this.editor.left);
        this.top = Number(target.top) + Number(this.editor.top);

        this.width = target.width;
        this.height = target.height;

        this.transform.from({
            rotateX: target.transform.rotateX,
            rotateY: target.transform.rotateY,
            rotateZ: target.transform.rotateZ,
            scaleX: target.transform.scaleX,
            scaleY: target.transform.scaleY,
            scaleZ: target.transform.scaleZ,
        });
    }
}