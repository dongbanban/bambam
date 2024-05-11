
import React from "react";
import { Row } from "antd";
import GetSet from "./zustand/get&set";
import Shallow from "./zustand/shallow";

const ZustandDemo = () => {
  return (
    <>
      <Row>
        <GetSet />
      </Row>
      <Row>
        <Shallow />
      </Row>
    </>
  );
};

export default ZustandDemo;
