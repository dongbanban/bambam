import React, { useRef, useState, useEffect } from "react";

import "./lightCard.less";

const LightCard = () => {
  const cardRef = useRef(null); //卡片
  // const lightRef = useRef(null) //光源
  const [isShowLight, setIsShowLight] = useState(false); //是否显示光源
  // 光源随鼠标移动
  const [pos, setPos] = useState({
    left: "0px",
    top: "0px",
  });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cardRef.current) {
        setIsShowLight(true); // 进入盒子显示光源

        const { x, y } = cardRef.current.getBoundingClientRect(); // 父元素相对于页面窗口
        const { clientX, clientY } = e; // 鼠标在页面位置
        const offsetX = clientX - x; // 计算鼠标在盒子内的水平偏移量
        const offsetY = clientY - y; // 计算鼠标在盒子内的垂直偏移量

        // 设置光源左上角在盒子里的定位
        setPos({
          left: `${offsetX - 75}px`, // 75为光源宽度的1/2
          top: `${offsetY - 75}px`, // 75为光源高度的1/2
        });

        const maxXRotation = 20; // 最大绕 X 轴旋转角度
        const maxYRotation = 20; // 最大绕 Y 轴旋转角度

        const rangeX = 300 / 2; // X 轴旋转范围
        const rangeY = 300 / 2; // Y 轴旋转范围

        const rotateX = ((offsetY - rangeY) / rangeY) * maxXRotation; // 根据鼠标在 Y 轴上的位置计算绕 X 轴的旋转角度
        const rotateY = -1 * ((offsetX - rangeX) / rangeX) * maxYRotation; // 根据鼠标在 X 轴上的位置计算绕 Y 轴的旋转角度

        cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`; // 设置3D透视
      }
    };

    const handleMouseLeave = () => {
      setIsShowLight(false); // 离开盒子隐藏光源
      if (cardRef.current) {
        cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`; // 设置3D透视
      }
    };

    cardRef.current?.addEventListener("mousemove", handleMouseMove);
    cardRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cardRef.current?.removeEventListener("mousemove", handleMouseMove);
      cardRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="flex-box light-box">
      <div className="light-card" ref={cardRef}>
        <div
          className={`${isShowLight ? "" : "hidden"} light`}
          // ref={lightRef}
          style={pos}
        ></div>
      </div>
    </div>
  );
};

export default LightCard;
