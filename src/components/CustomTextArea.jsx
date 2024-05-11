import React, {
  useEffect,
  useCallback,
  useState,
  useRef,
  useMemo,
} from "react";

// Components
import { Button, Modal, Tooltip } from "antd";

// Vendors
import classNames from "classnames";
import { registerEvent, removeEvent } from "utils/CustomEvent";

// Styles
import "./style.less";

const CustomTextArea = ({
  hasPermission = true,
  matchData = [],
  validateFn,
  handleApply,
  labelConfig,
}) => {
  const addRef = useRef(null);
  const memorized = useRef(null);

  const [valid, setValid] = useState([]);
  const [inValid, setInValid] = useState([]);
  const [open, setOpen] = useState(false);

  const btnDisabled = useMemo(
    () => valid.length === 0 || inValid.length > 0,
    [valid, inValid]
  );
  const [matchCount, unfoundCount] = [valid?.length, inValid?.length];

  const handleOpen = () => {
    setOpen(true);
    setTimeout(() => {
      addRef.current && open && batchAddTags(addRef.current);
    }, 0);
  };

  const handleClose = () => {
    memorized.current = null;
    addRef.current.innerText = null;
    setValid([]);
    setInValid([]);
    setOpen(false);
  };

  const handleOk = () => {
    memorized.current = addRef.current.innerText;
    handleApply?.(valid, () => {
      memorized.current = null;
      addRef.current.innerText = null;
      setValid([]);
      setInValid([]);
      setOpen(false);
    });
  };

  const handleClearAll = () => {
    memorized.current = null;
    addRef.current.innerText = null;
    setValid([]);
    setInValid([]);
  };

  // 展示光标
  const showInlast = useCallback((textArea) => {
    if (window.getSelection && textArea.innerText.trim() !== "") {
      textArea.focus(); //解决ff不获取焦点无法定位问题
      const sel = window.getSelection(); //创建range
      sel.selectAllChildren(textArea); //range 选择obj下所有子内容
      sel.collapseToEnd(); //光标移至最后
    }
  }, []);

  // 实时更新并获取合法/非法tag
  const convertToTags = (textArea) => {
    const content = memorized.current || textArea.innerText || "";
    const tagList = [
      ...new Set([
        ...content
          ?.replaceAll("\n", " ")
          ?.replaceAll(/\,/g, " ")
          ?.replaceAll(/\，/g, " ")
          ?.trim()
          ?.split(/\s+/),
      ]),
    ];
    const tempValid = [],
      tempInValid = [];
    tagList.forEach((item) => {
      const tag = item?.trim();
      tag &&
        ((validateFn ? validateFn(tag, matchData) : true)
          ? tempValid
          : tempInValid
        ).push(tag);
    });
    setValid(tempValid);
    setInValid(tempInValid);
    return [tempValid, tempInValid];
  };

  // 删除tag
  const deleteTag = (child) => {
    memorized.current = null;
    const [tempValid, tempInValid] = convertToTags(addRef.current);
    const [cls, tag] = child.id.split("~"),
      deleteType = cls.includes("inValid"),
      target = deleteType ? [...tempInValid] : [...tempValid],
      idx = (deleteType ? tempInValid : tempValid).findIndex(
        (item) => item === tag
      ),
      matchBlank = document.getElementById(`${cls}-blank~${tag}`); // 找到批量添加时创建的对应的blank
    target.splice(idx, 1);
    deleteType ? setInValid(target) : setValid(target);
    addRef.current.removeChild(matchBlank);
    addRef.current.removeChild(child);
    // 当有效输入为空时移除tag容器
    if (
      (deleteType &&
        target.length === tempValid.length &&
        tempValid.length === 0) ||
      (!deleteType &&
        target.length === tempInValid.length &&
        tempInValid.length === 0 &&
        addRef.current)
    ) {
      const wrapperSpans = addRef.current.getElementsByTagName("span");
      Array.from(wrapperSpans).forEach((item) => {
        addRef.current.removeChild(item);
      });
    }
    convertToTags(addRef.current);
    showInlast(addRef.current);
  };

  // 创建tag
  const addTag = (parent, tag = "", cls = "") => {
    const span = document.createElement("span");
    span.contentEditable = false;
    span.className = cls;
    span.title = tag;
    span.id = `${cls}~${tag}`;
    const label = document.createElement("label");
    label.innerHTML = cls.includes("blank") ? " " : tag;
    span.appendChild(label);
    if (!cls.includes("blank") && tag !== " ") {
      const icon = document.createElement("i");
      icon.contentEditable = false;
      icon.className = "dsicon dsicon-close-circle-sd close-icon";
      registerEvent(icon, "click", (e) => deleteTag(span));
      span.appendChild(icon);
    }
    parent.appendChild(span);
  };

  // 批量添加标
  const batchAddTags = (textArea, code) => {
    const [tempValid, tempInValid] = convertToTags(textArea);
    textArea.innerText = null;
    if (
      tempValid.filter((item) => item).length ||
      tempInValid.filter((item) => item).length
    ) {
      tempValid?.forEach((item) => {
        if (item.trim()) {
          addTag(textArea, item, "bulk-add-valid");
          addTag(textArea, item, "bulk-add-valid-blank");
        }
      });
      tempInValid?.forEach((item) => {
        if (item.trim()) {
          addTag(textArea, item, "bulk-add-inValid");
          addTag(textArea, item, "bulk-add-inValid-blank");
        }
      });
    }
    code && showInlast(addRef.current);
  };

  useEffect(() => {
    if (addRef.current) {
      registerEvent(addRef.current, "blur", (e) => {
        memorized.current = null;
        batchAddTags(addRef.current);
      });
      registerEvent(addRef.current, "focus", (e) => showInlast(addRef.current));
      registerEvent(addRef.current, "keydown", (e) => {
        if (e.keyCode === 188) {
          memorized.current = null;
          // 解决输入,后光标无法定位在最后且,无法清空的情况
          setTimeout(() => batchAddTags(addRef.current, e.keyCode), 0);
        }
      });
    }
  }, [addRef.current, batchAddTags, showInlast, memorized]);

  useEffect(() => {
    return () => {
      if (addRef.current) {
        removeEvent(addRef.current, "blur");
        removeEvent(addRef.current, "focus");
        removeEvent(addRef.current, "keydown");
      }
    };
  }, []);

  return (
    <>
      {hasPermission && (
        <Tooltip
          placement="bottomLeft"
          title={labelConfig.title}
          arrowPointAtCenter
        >
          <Button
            type="primary"
            onClick={handleOpen}
            style={{ marginRight: 8 }}
          >
            Test Function
          </Button>
        </Tooltip>
      )}
      <Modal
        width={416}
        title={labelConfig.title}
        okButtonProps={{ size: "middle", disabled: btnDisabled }}
        okText="Apply"
        cancelButtonProps={{
          type: "text",
          size: "middle",
          style: { display: "none" },
        }}
        bodyStyle={{ padding: "16px 24px" }}
        open={open}
        onOk={handleOk}
        onCancel={handleClose}
      >
        <>
          <div className="bulk-add">
            <div className="bulk-add-label">{labelConfig.tip}</div>
            <div
              ref={addRef}
              className={classNames("bulk-add-el", {
                "bulk-add-el-error": inValid.length > 0,
              })}
              suppressContentEditableWarning
              contentEditable
              data-placeholder={labelConfig.placeholder}
            />
          </div>
          <div className="bulk-add-match">
            <div className="bulk-add-match-info">
              <span>Matched ({matchCount})</span>
              <span>Unfound ({unfoundCount})</span>
            </div>
            <div className="bulk-add-clear-all" onClick={handleClearAll}>
              Clear All
            </div>
          </div>
          {inValid.length > 0 && unfoundCount === 0 && (
            <div className="bulk-add-error-info">
              {labelConfig.errorMessage}
            </div>
          )}
        </>
      </Modal>
    </>
  );
};

CustomTextArea.defaultProps = {
  labelConfig: {
    title: "Batch Hotels",
    tip: "Enter hotel code splitting by “,”",
    placeholder: "Input hotel codes",
    errorMessage:
      "This value exceeds limitation or is invalid. Please try again",
  },
  validateFn: null, //(value, match) => value?.length > 0 && value?.length <= 128 && (match ? match.includes(value) : true)
};

// TopUpBulkAdd.propTypes = {
//     hasPermission: PropTypes.bool,
//     validateFn: PropTypes.func,
//     handleApply: PropTypes.func,
//     labelConfig: PropTypes.object,
//     matchData: PropTypes.array
// };

export default CustomTextArea;
