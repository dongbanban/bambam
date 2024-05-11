import React from "react";

import classNames from "classnames";

const SharinganEye = ({ style, children, className, id }) => {
  return (
    <div
      id={id}
      style={style}
      className={classNames("sharingan-eye", {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

export default SharinganEye;
