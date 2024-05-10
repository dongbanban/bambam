/*
 * @FilePath: /Users/i104/bambam/src/views/sharingan/item/eye.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
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
