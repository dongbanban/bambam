/*
 * @FilePath: /Users/i104/bambam/src/views/menuDemo.jsx
 * @author: dongyang(yang.dong@derbysoft.net)
 */
import React, {
  useMemo,
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { Flex } from "antd";
import "./menuDemo.less";

function MenuTest() {
  const [menuKey, setKey] = useState(null);
  const data = new Array(7).fill("menu");
  const menuEl = useMemo(() => {
    return data.map((item, index) => {
      return (
        <Flex
          key={item + "menu"}
          className={`item${index === menuKey ? " active-item" : ""}`}
          justify="center"
          align="center"
          onClick={() => setKey(index)}
        >
          <div
            className={`menu-item${index === menuKey ? " active-menu" : ""}${
              index === 0 ? " isFirst" : ""
            }${index === data?.length - 1 ? " isLast" : ""}`}
          >
            {item + " " + index}
          </div>
        </Flex>
      );
    });
  }, [menuKey, data]);

  const total = 637226;
  const cb = useRef(null);
  const [current, setCurrent] = useState(0);
  const getNextCurrent = useCallback(() => {
    const next = parseInt(Math.random() * (total - current) + current) + 1;
    setCurrent(Math.min(next, total));
  }, [total, current]);

  useEffect(() => {
    if (current < total) {
      cb.current = getNextCurrent;
    }
  }, [getNextCurrent, current, total]);

  useEffect(() => {
    const timer = setTimeout(() => {
      current < total && cb.current?.();
    }, 100);
    return () => clearTimeout(timer);
  }, [current, total]);

  return (
    <>
      <Flex className="left" gap={0} horizontal>
        <Flex gap={0} vertical>
          {menuEl}
        </Flex>
        <Flex className="right" justify="center" align="center" flex={1}>
          222
        </Flex>
      </Flex>
      <div>{current}</div>
    </>
  );
}

export default MenuTest;
