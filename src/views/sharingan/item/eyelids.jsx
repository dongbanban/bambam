import React from "react";

import classNames from "classnames";

const SharinganEyelids = ({ children, className, style = {} }) => {
  return (
    <div
      style={style}
      className={classNames("sharingan-eyelids", {
        [className]: className,
      })}
    >
      {children}
    </div>
  );
};

export default SharinganEyelids;
