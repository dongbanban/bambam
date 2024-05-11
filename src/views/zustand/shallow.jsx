import React from "react";

// store
import { useDemoStore } from "stores";
import { shallow } from "zustand/shallow";

const Shallow = () => {
  const value2 = useDemoStore((state) => ({ value2: state.value2 }), shallow); // 只有value2改变才会re-render
  console.log("re-rendered");

  return <>{JSON.stringify(value2)}</>;
};

export default Shallow;
