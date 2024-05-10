/*
 * @FilePath: /Users/i104/bambam/src/views/cssDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */

import React from "react";
import BackdropFilter from "./cssDemo/backdropFilter";
import Grid from "./cssDemo/grid";
import LightCard from "./cssDemo/lightCard";
import CubicBezier from "./cssDemo/cubicBezier";

const CssDemo = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <BackdropFilter />
      <Grid />
      <LightCard />
      <CubicBezier />
    </div>
  );
};

export default CssDemo;
