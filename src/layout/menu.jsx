import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Menu } from "antd";
import { recursionMenu, menu } from "config/config.menu";

const AppMenu = ({ selectedKeys = null }) => {
  const navigate = useNavigate();
  const onItemClick = useCallback(({ key }) => {
    navigate(key);
  }, []);

  return (
    <Menu
      className="app-menu"
      onClick={onItemClick}
      theme="light"
      selectedKeys={selectedKeys}
      items={recursionMenu(menu)}
    />
  );
};

export default AppMenu;
