/*
 * @FilePath: /src/views/cssDemo/radialGradient.jsx
 * @author: dongyang
 */
import React from "react";

import "./radialGradient.less";

const RadialGradient = () => {
  // circle at center 指定了圆形渐变，并且渐变的中心在矩形的中心。
  // transparent 0 指定了第一个渐变颜色为透明，位置是从中心开始。
  // transparent 20px 指定了第二个渐变颜色也为透明，位置距离中心 20px。
  // #ddd 20px 指定了第三个渐变颜色为淡灰色，位置距离中心 20px，第三个渐变颜色之后的颜色都是淡灰色
  return <div className="radialGradient"></div>;
};

export default RadialGradient;
