/// <reference path="../dist/index.d.ts" />
import './lib/html-to-image.js';
import JEditor, { util, CssFilters, JImage } from "../dist/index.esm.js";

	const container = document.getElementById('myeditor_container');
	container.style.height = window.innerHeight + 'px';

	// 默认支持的字体
	const fonts = {
        'Zcool Kuaile Regular': {
            label: 'Zcool Kuaile Regular',
            family: 'Zcool Kuaile Regular',
            url: 'fonts/zcool-kuaile-regular.woff2'
        }
    };

	const editor = new JEditor({
		fonts,
		data: {
			width: 800,
			height: 600,
		},
		// editable: false,
		moveable: false, // 锁定编辑器不支持移动
		style: {
			backgroundColor: '#fff',
			containerBackgroundColor: '#eee',
			//marginTop: '50%',
			//marginLeft: '50%'
		},
		transform: {
			//translateX: '-50%',
			//translateY: '-50%'
		},
		controllerOption: {
			tipVisible: true, // 是否展示坐标和大小数据
			style: {
				//itemStyle?: IJElementStyleDeclaration
				// 标线
				//markingLineStyle?: IJElementStyleDeclaration
				// 提示信息
				//tipStyle?: IJElementStyleDeclaration,
				rotateStyle: {
					//backgroundColor: 'transparent',
					//border:'none'
				}
			},
			// 操作点的指针, 指定二个就可以，其它的会旋转得到，你也可以指定全部
			itemCursors: {				
				't': 'images/ns_cursor.png',
				'lt': 'images/nwes_cursor.png',
				'rotate': 'images/rotate_cursor.png',
			},
			// 图标
			itemIcons: {
				rotate: 'images/rotate_icon.png',
				skew: 'images/skew_icon.png'
			}
		}
	});

	container.appendChild(editor.view.dom);

	editor.on('select', (e)=>{
		console.log('editor selected',e.selected);
	})

	// 大小改变后居中, 并且显示全部
	editor.on('resize', function (size) {
		const domWidth = util.toNumber(this.view.dom.clientWidth);
		const domHeight = util.toNumber(this.view.dom.clientHeight);
		// 居中
		this.data.left = Math.max((domWidth - util.toNumber(size.width)) / 2, 0);
        this.data.top = Math.max((domHeight - util.toNumber(size.height)) / 2, 0);
	});

	// 禁止编辑器默认菜单
	editor.on('contextmenu', (e) => {
		e.preventDefault();
	});

	// 元素发生改变事件
	editor.on('elementChange', async (e) => {
		//console.log(e);
		if(e.type === 'styleChange') {
    		// 字体发生改变，需要做check, 并加载字体生效
			if(e.data.name === 'fontFamily') {
				// 如果没有在默认支持的字体内，这里会返回false
				if(editor.fonts.check(e.data.value)) return;// 已经加载，则跳过
				const con = fonts[e.data.value];
				if(con) {
					const f = await editor.fonts.load(con.family, con.url);// 加载
					console.log('load font', e.data.value, f.status);
				}
			}
		}
		// 元素的右健菜单
		else if(e.type == 'mousedown') {
			e.event.preventDefault();
			if(e.event.button == 2) showElementMenu(e.target.id, e.event);
			else hideElementMenu();// 其它按健隐藏菜单
		}
		else if(e.type === 'contextmenu') {
			e.event.preventDefault();
		}
		else if(e.type === 'select') {
			
		}
	});

	// 点击编辑器隐去菜单
	editor.on('mousedown', ()=>{
		hideElementMenu();// 其它按健隐藏菜单
	});

	// 让编辑器在可视范转内
	function resetScale() {
		const domWidth = util.toNumber(editor.view.dom.clientWidth);
		const domHeight = util.toNumber(editor.view.dom.clientHeight);

		const scale = Math.min(domWidth / (editor.data.width * 1.4), domHeight / (editor.data.height * 1.4));
		if (scale < 1 && scale < editor.transform.scaleX) {
			console.log('scale', scale);
			editor.scale(scale);
		}
	}

	// 操作元素菜单
	function showElementMenu(id, pos) {
		pos = editor.toEditorPosition(pos, editor.view.dom); // 因为菜单放在最外层，所以要指定相对位置是最外层的view
		const menu = document.getElementById('element_menu');
		menu.querySelector('.title').innerHTML = id;
		menu.style.left = (pos.x ) + 'px';
		menu.style.top = (pos.y) + 'px';
		menu.style.display = 'inline';

		menu.removeEventListener('click', menuClick);
		menu.addEventListener('click', menuClick);
	}
	function hideElementMenu() {
		const menu = document.getElementById('element_menu');
		menu.style.display = 'none';
	}
	// 菜单点击
	function menuClick(e) {

		const item = e.srcElement;			
		const action = util.attr(item, 'data-action');
		if(!action) return;

		const menu = document.getElementById('element_menu');
		const id = menu.querySelector('.title').innerHTML;
		const el = editor.getChild(id);
		if(!el) return;

		if(action === 'delete') {
			if(confirm('确定删除？')) {				
				if(el) el.remove();
			}
		}
		else if(action === 'prelevel') {
			// 上一层
			el.setLevel('pre');
		}
		else if(action === 'nextlevel') {
			// 下一层
			el.setLevel('next');
		}
		else if(action === 'toplevel') {
			// 顶层
			el.setLevel('top');
		}
		else if(action === 'bottomlevel') {
			// 底层
			el.setLevel('bottom');
		}
		// 复制
		else if(action === 'copy') {
			const newEl = el.clone();
			newEl.data.left += 50;
			newEl.data.top += 50;
			editor.addChild(newEl);
		}
		menu.style.display = 'none';
	}
/*
    editor.fromJSON({"children":[{"children":[],"type":"image","data":{"height":128,"left":113.5,"src":"https://jtcospublic.ciccten.com/config-server/1705561487067855645/1622830_gallery_landskape_mountains_nature_photo_icon.png","top":159,"width":128,"_eventsCount":0,"zIndex":1},"style":{"bottom":"auto","display":"inline-block","height":128,"left":113.5,"margin":"0","overflow":"visible","padding":"0","position":"absolute","right":"auto","top":159,"transform":"translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(1.243040762768259rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)","width":128,"zIndex":1},"transform":{"translateX":0,"translateY":0,"translateZ":0,"rotateX":0,"rotateY":0,"rotateZ":1.243040762768259,"scaleX":1,"scaleY":1,"scaleZ":1,"skewX":0,"skewY":0},"id":"1708770687717","filters":[{"name":"sepia","displayName":"复古","option":{"value":1}}],"target":{"children":[],"type":"","data":{},"style":{"bottom":0,"cursor":"pointer","display":"block","filter":"sepia(1)","height":"100%","left":0,"right":0,"top":0,"transform":"translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)","width":"100%"},"transform":{"translateX":0,"translateY":0,"translateZ":0,"rotateX":0,"rotateY":0,"rotateZ":0,"scaleX":1,"scaleY":1,"scaleZ":1,"skewX":0,"skewY":0},"id":"1714293496322"}},{"children":[],"type":"text","data":{"height":91,"left":400,"top":200,"width":156,"text":"请输入文本zxvxzcv","_eventsCount":0,"zIndex":2},"style":{"bottom":"auto","display":"inline-block","fontFamily":"Arial","fontSize":22,"fontStyle":"normal","fontWeight":"normal","height":91,"left":400,"margin":"0","overflow":"visible","padding":"0","position":"absolute","right":"auto","textAlign":"left","top":200,"transform":"translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)","width":156,"wordBreak":"keep-all","wordWrap":"break-word","zIndex":2},"transform":{"translateX":0,"translateY":0,"translateZ":0,"rotateX":0,"rotateY":0,"rotateZ":0,"scaleX":1,"scaleY":1,"scaleZ":1,"skewX":0,"skewY":0},"id":"1717072516614","filters":[{"name":"drop-shadow","displayName":"阴影","option":{"value":{"x":"0","y":"0","blur":"4px","color":"#000"}}},{"name":"blur","displayName":"模糊","option":{"value":"4px"}}],"target":{"children":[],"type":"","data":{},"style":{"bottom":0,"cursor":"pointer","display":"block","filter":"drop-shadow(0 0 4px #000) blur(4px)","fontFamily":"Arial","fontSize":22,"fontStyle":"normal","fontWeight":"normal","height":"100%","left":0,"right":0,"textAlign":"left","top":0,"transform":"translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)","width":"100%","wordBreak":"keep-all","wordWrap":"break-word"},"transform":{"translateX":0,"translateY":0,"translateZ":0,"rotateX":0,"rotateY":0,"rotateZ":0,"scaleX":1,"scaleY":1,"scaleZ":1,"skewX":0,"skewY":0},"id":"1715640403146"}}],"type":"","data":{"width":643,"height":425,"_eventsCount":0,"left":97.5,"top":351.5},"style":{"backgroundColor":"#fff","backgroundImage":"","backgroundSize":"100% 100%","bottom":"auto","boxShadow":"0 0 10px 10px #ccc","display":"inline-block","height":425,"left":97.5,"margin":"0","overflow":"visible","padding":"0","position":"absolute","right":"auto","top":351.5,"transform":"translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)","width":643,"zIndex":"0"},"transform":{"translateX":0,"translateY":0,"translateZ":0,"rotateX":0,"rotateY":0,"rotateZ":0,"scaleX":1,"scaleY":1,"scaleZ":1,"skewX":0,"skewY":0},"id":"1710438350239","filters":[],"target":{"children":[],"type":"","data":{},"style":{"backgroundColor":"#fff","backgroundImage":"","backgroundSize":"100% 100%","bottom":0,"boxShadow":"0 0 10px 10px #ccc","cursor":"pointer","display":"block","height":"100%","left":0,"overflow":"hidden","right":0,"top":0,"transform":"translateX(0px) translateY(0px) translateZ(0px) rotateX(0rad) rotateY(0rad) rotateZ(0rad) scaleX(1) scaleY(1) scaleZ(1) skewX(0rad) skewY(0rad)","width":"100%"},"transform":{"translateX":0,"translateY":0,"translateZ":0,"rotateX":0,"rotateY":0,"rotateZ":0,"scaleX":1,"scaleY":1,"scaleZ":1,"skewX":0,"skewY":0},"id":"1718236963278"}})
*/
	/*loadTemplate(1, (tmpl) => {
		editor.fromJSON(tmpl);
	});*/
	/*const img = editor.createShape('image', {
		data: {
			height: "auto",
			left: 325.5,
			src: "https://jtcospublic.ciccten.com/config-server/1705561487067855645/1622830_gallery_landskape_mountains_nature_photo_icon.png",
			top: 78,
			width: "auto"
		}
	});
	editor.addChild(img);

	const txt = editor.createShape('text', {
		data: {
			height: "auto",
			left: 400,
			top: 200,
			width: "auto",
			text: '请输入文本'
		}
	});
	editor.addChild(txt);*/

	// 加载模板
	async function loadTemplate(id, cb) {
		const url = `templates/${id}.json`;
        const request = new XMLHttpRequest();//新建XMLHttpRequest对象
        request.onreadystatechange = function (e) { //状态发生变化时，函数被回调
            if (this.readyState === 4) { //成功完成
                //判断相应结果：
                if (this.status ===200) {
                    const tmpl = JSON.parse(this.responseText);
                    cb(tmpl);
					
					resetScale();// 重置可视范围
                } else {
                    console.log(e);
                    alert('加载模板失败');
                }
            }
        }
        //发送请求：
        request.open('GET', url);
        request.send();
	}

	// 模板点击
	document.getElementById('tmpl_container').addEventListener('click', function (e) {
		if (e.target.nodeName === 'IMG') {
			const idAttr = e.target.attributes['data-tmplid'];
			if (idAttr && idAttr.value) {
				loadTemplate(idAttr.value, (tmpl) => {                    
		            editor.fromJSON(tmpl);
                });
			}
		}
	});

	loadTemplate(1, (tmpl) => {                    
		editor.fromJSON(tmpl);
	});

	// 滤镜
	const buttonContainer = document.getElementById('css_filters');
	function buttonClick(e) {
		const name = this.getAttribute('data-filter');
		const filter = CssFilters[name];
		
		const elements = editor.selectedElements;
		for(const el of elements) {
			//el.filters.clear();// 只支持一个滤镜先，可以设置多个，但最好同一个滤镜不要重复
			el.filters.add(filter);
		}
	}
	for(const name in CssFilters) {
		const filter = CssFilters[name];
		const button = document.createElement('button');
		button.textContent = filter.displayName || name;
		button.setAttribute('data-filter', name);
		button.onclick = buttonClick;
		buttonContainer.appendChild(button);
	}


	// 放大缩小
	document.getElementById('btn_zoomin').onclick = function () {
		editor.scale(editor.transform.scaleX + 0.1);
	}
	document.getElementById('btn_zoomout').onclick = function () {
		editor.scale(editor.transform.scaleX - 0.1);
	}

	// 调整大小
	window.onresize = function () {
		//editor.resize();
	}

	const preview = document.getElementById('previewImg');
	async function createPreivew() {
		// https://github.com/bubkoo/html-to-image

		//const fontEmbedCss = await htmlToImage.getFontEmbedCSS(editor.target.dom);
		//html2Image.toSVG(element1, { fontEmbedCss });
		//console.log(fontEmbedCss);
        // 截图取target的dom节点，才是真的编辑渲染区域
		const img = await window.htmlToImage.toPng(editor.target.dom);
		preview.src = img;

		//const data = editor.toString();
		//console.log(data);

		setTimeout(createPreivew, 10000);


	};
	setTimeout(createPreivew, 2000);

    window.editor = editor;