/*
 * @FilePath: /src/views/cssDemo/conicGradient.jsx
 * @author: dongyang
 */
import React, { useEffect } from "react";

import "./conicGradient.less";

const ConicGradient = () => {
  useEffect(() => {
    const container = document.getElementById("g-container");
    const img = document.getElementById("g-img");

    container.addEventListener("mousemove", (event) => {
      img.style.visibility = "visible";

      const target = event.target;
      const rect = target.getBoundingClientRect();

      var offsetX = event.clientX - rect.left;
      var offsetY = event.clientY - rect.top;

      var percentX = (
        Math.min(Math.max(offsetX / rect.width, 0), 1) * 100
      ).toFixed(2);
      var percentY = (
        Math.min(Math.max(offsetY / rect.height, 0), 1) * 100
      ).toFixed(2);

      console.log("X: " + percentX + "%");
      console.log("Y: " + percentY + "%");

      container.setAttribute("style", `--x: ${percentX}%;--y: ${percentY}%;`);
    });

    container.addEventListener("mouseout", (event) => {
      img.style.visibility = "hidden";
    });
  }, []);

  return (
    <div id="g-container">
      <div id="g-filter"></div>
      <div id="g-img"></div>
    </div>
  );
};

export default ConicGradient;
