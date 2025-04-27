import {
  BarsOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  PayCircleOutlined,
  ProductOutlined,
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
    <Menu theme={"light"} mode="inline" className="menu-bar">
      <Menu.Item
        key="home"
        className="text-base font-medium"
        icon={<HomeOutlined style={{ fontSize: "20px" }} />}
        onClick={() => handleMenuClick("")}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key="order"
        className="text-base font-medium"
        icon={<MenuFoldOutlined style={{ fontSize: "20px" }} />}
        onClick={() => handleMenuClick("order")}
      >
        Order
      </Menu.Item>
      <Menu.Item
        key="progress"
        className="text-base font-medium"
        onClick={() => handleMenuClick("categories")}
        icon={<ProductOutlined style={{ fontSize: "20px" }} color="#080808" />}
      >
        Category
      </Menu.Item>
      <Menu.Item
        key="menu"
        className="text-base font-medium"
        onClick={() => handleMenuClick("allMenu")}
        icon={<ProductOutlined style={{ fontSize: "20px" }} color="#080808" />}
      >
        Menu
      </Menu.Item>

      {/* <Menu.SubMenu
        key="Menu"
        className="text-base font-medium"
        icon={<BarsOutlined style={{ fontSize: "22px" }} />}
        title="Menu"
      >
        <Menu.Item key="Active-menu"> Active Menu</Menu.Item>
        <Menu.Item key="All-Menu" onClick={() => handleMenuClick("allMenu")}>
          {" "}
          All Menu
        </Menu.Item>
      </Menu.SubMenu> */}
    </Menu>
  );
};

export default MenuList;
