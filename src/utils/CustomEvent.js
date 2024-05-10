/*
 * @FilePath: /Users/i104/bambam/src/utils/CustomEvent.js
 * @author: dongyang(yang.dong@derbysoft.net)
 */

function add(ele, eventType, fn, isCaptureCatch = false) {
  // 添加事件监听
  if (ele.addEventListener) {
    ele.addEventListener(eventType, fn, isCaptureCatch);
  } else if (ele.attachEvent) {
    ele.attachEvent("on" + eventType, fn);
  } else {
    ele["on" + eventType] = fn;
  }
  ele.eventMap[eventType] = fn;
}

function remove(ele, eventType) {
  if (ele?.eventMap?.[eventType]) {
    // 移除事件监听
    if (ele.removeEventListener) {
      ele.removeEventListener(eventType, ele.eventMap[eventType]);
    } else if (ele.detachEvent) {
      ele.detachEvent("on" + eventType, ele.eventMap[eventType]);
    } else {
      ele["on" + eventType] = null;
    }
    delete ele.eventMap[eventType];
  }
}

export function registerEvent(
  ele,
  eventType,
  fn,
  isCaptureCatch = false,
  forceRegister = false
) {
  if (ele == undefined || eventType === undefined || fn === undefined) {
    throw new Error("传入的参数错误");
  }

  if (typeof ele !== "object") {
    throw new TypeError("不是对象");
  }

  if (typeof eventType !== "string") {
    throw new TypeError("事件类型错误");
  }

  if (typeof fn !== "function") {
    throw new TypeError("fn不是函数");
  }

  if (ele.eventMap === undefined) {
    ele.eventMap = {};
  }

  if (ele?.eventMap?.[eventType]) {
    if (!forceRegister) {
      return "已经绑定过同名事件";
    } else {
      remove(ele, eventType);
    }
  }

  // 添加事件监听
  add(ele, eventType, fn, isCaptureCatch);
}

export function removeEvent(ele, eventType) {
  if (ele == undefined || eventType === undefined) {
    throw new Error("传入的参数错误！");
  }

  if (typeof ele !== "object") {
    throw new TypeError("不是对象！");
  }

  if (typeof eventType !== "string") {
    throw new TypeError("事件类型错误！");
  }

  remove(ele, eventType);
}

export default {
  registerEvent,
  removeEvent,
};
