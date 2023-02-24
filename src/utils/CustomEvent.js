/*
 * @FilePath: /click/Users/i104/vite/src/utils/CustomEvent.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

export function registerEvent(ele, eventType, fn, isCaptureCatch = false) {
    if (ele == undefined || eventType === undefined || fn === undefined) {
        throw new Error('传入的参数错误');
    }

    if (typeof ele !== 'object') {
        throw new TypeError('不是对象');
    }

    if (typeof eventType !== 'string') {
        throw new TypeError('事件类型错误');
    }

    if (typeof fn !== 'function') {
        throw new TypeError('fn不是函数');
    }

    if (ele.eventList === undefined) {
        ele.eventList = {};
    }

    if (ele?.eventList?.[eventType]) {
        return '已经绑定过同名事件'
    }

    // 添加事件监听
    if (ele.addEventListener) {
        ele.addEventListener(eventType, fn, isCaptureCatch);
    } else if (ele.attachEvent) {
        ele.attachEvent('on' + eventType, fn);
    } else {
        ele['on' + eventType] = fn
    }
    ele.eventList[eventType] = fn;
}

export function removeEvent(ele, eventType) {
    if (ele == undefined || eventType === undefined) {
        throw new Error('传入的参数错误！');
    }

    if (typeof ele !== 'object') {
        throw new TypeError('不是对象！');
    }

    if (typeof eventType !== 'string') {
        throw new TypeError('事件类型错误！');
    }

    if (ele?.eventList?.[eventType]) {
        // 添加事件监听
        if (ele.removeEventListener) {
            ele.removeEventListener(eventType, ele.eventList[eventType]);
        } else if (ele.detachEvent) {
            ele.detachEvent('on' + eventType, ele.eventList[eventType]);
        } else {
            ele['on' + eventType] = null
        }
        delete ele.eventList[eventType];
    }
}

export default {
    registerEvent,
    removeEvent
};