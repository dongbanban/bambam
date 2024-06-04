/*
 * @FilePath: /src/views/cssDemo.jsx
 * @author: dongyang
 */
import React from "react";
import BackdropFilter from "./cssDemo/backdropFilter";
import Grid from "./cssDemo/grid";
import LightCard from "./cssDemo/lightCard";
import CubicBezier from "./cssDemo/cubicBezier";
import ConicGradient from "./cssDemo/conicGradient";
import Coupon from "./cssDemo/coupon";
import RadialGradient from "./cssDemo/radialGradient";

const CssDemo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <BackdropFilter />
      <Grid />
      <LightCard />
      <CubicBezier />
      <ConicGradient />
      <Coupon />
      <RadialGradient />
    </div>
  );
};

export default CssDemo;
