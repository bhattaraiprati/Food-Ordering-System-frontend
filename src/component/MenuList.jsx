import {
  AppstoreOutlined,
  AreaChartOutlined,
  BarsOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  PayCircleOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useNavigate } from "react-router";

const MenuList = ({ darkTheme }) => {

  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path); // Navigate to the specified path
  };

  return (
    <Menu
      theme={"light"}
      mode="inline"
      className="menu-bar"
    >
      <Menu.Item
        key="home"
        icon={<HomeOutlined />}
        onClick={() => handleMenuClick("/")}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="activity"
        icon={<MenuFoldOutlined />}
        onClick={() => handleMenuClick("/Order")}
      >
        Order
      </Menu.Item>
      <Menu.SubMenu key="Menu" icon={<BarsOutlined />} title="Menu">
        <Menu.Item key="Active-menu"> Active Menu</Menu.Item>
        <Menu.Item key="All-Menu" onClick={() => handleMenuClick("/AllMenu")} > All Menu</Menu.Item>
        {/* <Menu.SubMenu key="subtasks" icon={<BarsOutlined />} title="Subtasks">
          <Menu.Item key="subtask-1"> subtask 1</Menu.Item>
          <Menu.Item key="subtask-2"> subtask 2</Menu.Item>
        </Menu.SubMenu> */}
      </Menu.SubMenu>
      <Menu.Item key="progress" icon={<AreaChartOutlined />}>
        Progress
      </Menu.Item>
      {/* <Menu.Item key="payment" icon={<PayCircleOutlined />}>
        Payment
      </Menu.Item> */}
      {/* <Menu.Item key="setting" icon={<SettingOutlined />}>
        Setting
      </Menu.Item> */}
    </Menu>
  );
};

export default MenuList;
