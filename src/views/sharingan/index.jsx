import React from "react";
import { Space } from "antd";
import SharinganEyelids from "./item/eyelids";
import SharinganEye from "./item/eye";
import { useWhirl } from "utils/hooks";

const SharinganGroup = () => {
  useWhirl({
    ids: [
      "Magatama",
      "kaleidoscope",
      "kaleidoscope_eternal",
      "itachi",
      "shisui",
    ],
  });

  return (
    <>
      <Space>
        <SharinganEyelids>
          <SharinganEye id="Magatama">
            <div className="sharingan-circle-line"></div>
            <div className="sharingan-pupil"></div>
            <div className="sharingan-magatama sharingan-magatama-top" />
            <div className="sharingan-magatama sharingan-magatama-left" />
            <div className="sharingan-magatama sharingan-magatama-right" />
          </SharinganEye>
        </SharinganEyelids>

        <SharinganEyelids>
          <SharinganEye id="kaleidoscope" style={{ background: "black" }}>
            <div className="sharingan-pupil"></div>
            <div
              className="sharingan-kaleidoscope"
              style={{ transform: "rotate(-55deg)" }}
            ></div>
            <div className="sharingan-kaleidoscope-fill1"></div>
            <div className="sharingan-kaleidoscope"></div>
            <div
              className="sharingan-kaleidoscope"
              style={{ transform: "rotate(55deg)" }}
            ></div>
            <div className="sharingan-kaleidoscope-fill2"></div>
          </SharinganEye>
        </SharinganEyelids>

        <SharinganEyelids>
          <SharinganEye
            id="kaleidoscope_eternal"
            style={{ background: "black" }}
          >
            <div className="sharingan-pupil eternal"></div>
            <div
              className="sharingan-kaleidoscope"
              style={{ transform: "rotate(-55deg)" }}
            ></div>
            <div className="sharingan-kaleidoscope-fill1"></div>
            <div className="sharingan-kaleidoscope"></div>
            <div
              className="sharingan-kaleidoscope"
              style={{ transform: "rotate(55deg)" }}
            ></div>
            <div className="sharingan-kaleidoscope-fill2"></div>
            <div
              className="sharingan-kaleidoscope-eternal"
              style={{ transform: "rotate(-55deg)" }}
            ></div>
            <div
              className="sharingan-kaleidoscope-eternal"
              style={{ transform: "rotate(180deg)" }}
            ></div>
            <div
              className="sharingan-kaleidoscope-eternal"
              style={{ transform: "rotate(55deg)" }}
            ></div>
          </SharinganEye>
        </SharinganEyelids>

        <SharinganEyelids>
          <SharinganEye id="itachi">
            <div className="sharingan-pupil itachi"></div>
            <div className="sharingan-kaleidoscope-itachi sharingan-kaleidoscope-itachi-top" />
            <div className="sharingan-kaleidoscope-itachi sharingan-kaleidoscope-itachi-left" />
            <div className="sharingan-kaleidoscope-itachi sharingan-kaleidoscope-itachi-right" />
          </SharinganEye>
        </SharinganEyelids>

        <SharinganEyelids>
          <SharinganEye id="shisui">
            <div className="sharingan-pupil shisui"></div>
            <div className="sharingan-kaleidoscope-shisui sharingan-kaleidoscope-shisui-top" />
            <div className="sharingan-kaleidoscope-shisui sharingan-kaleidoscope-shisui-bottom" />
            <div className="sharingan-kaleidoscope-shisui sharingan-kaleidoscope-shisui-left" />
            <div className="sharingan-kaleidoscope-shisui sharingan-kaleidoscope-shisui-right" />
          </SharinganEye>
        </SharinganEyelids>
      </Space>
    </>
  );
};

export default SharinganGroup;
