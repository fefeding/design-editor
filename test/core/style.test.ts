// @vitest-environment happy-dom
import { expect, describe, test, beforeEach, afterEach } from 'vitest'
import JElementStyle from '../../src/core/style';
import JElementCssStyle from  '../../src/constant/styleMap';

// 对这个类的 beforeEach callback
let elementStyle;
beforeEach(() => {
    elementStyle = new JElementStyle({color: 'red'});
});
afterEach(() => {
    elementStyle = null;
});

describe('JElementStyle', () => {
    describe('#Constructor', () => {
        test('should properly construct the instance', () => {
            let instance = new JElementStyle();
            expect(instance.color).toBe(undefined);
            expect(instance instanceof JElementCssStyle).toBe(true); // 验证它是 JElementCssStyle 的实例
        });
        test('should apply options if provided', () => {
            let instance = new JElementStyle({color: 'red'});
            expect(instance.color).toBe('red');
        });
    });
    describe('#Apply', () => {
        test('should apply style to the target', () => {
            const newStyle = {color: 'blue'};
            elementStyle.apply(newStyle);
            expect(elementStyle.color).toBe('blue');
        });
    });
    describe('#ApplyTo', () => {
        test('should apply style to the HTMLElement', () => {
            const div = document.createElement('div');
            document.body.appendChild(div);
            elementStyle.applyTo(div);
            expect(div.style.color).toBe('red');
            document.body.removeChild(div);
        });
    });
    describe('#SetStyle', () => {
        test('should set style correctly', () => {
            elementStyle.setStyle('color', 'blue');
            expect(elementStyle.color).toBe('blue');
        });
    });
    describe('#Refresh', () => {
        // 需要对这个方法添加可能的相关测试
    });
    describe('#ToJSON', () => {
        test('should convert style to JSON object', () => {
            const json = elementStyle.toJSON();
            expect(json.color).toBe('red');
        });
    });
    describe('.CreateProxy', () => {
        test('should create proxy for the instance', () => {
            const jstyle = new JElementStyle({color: 'red'});
            const proxy = JElementStyle.createProxy(jstyle);
            proxy.color = 'blue';
            expect(jstyle.color).toBe('blue');
        });
    });
});