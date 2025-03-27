import React from "react";
import { Outlet } from "react-router";
import { Affix, Avatar, Badge, Button, Col, Layout, Row, theme } from "antd";
import Logos from "../../components/Logos";
import FoodOrderingLogo from "/src/assets/Images/FoodOrderingLogo.png";
import { useState } from "react";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import ProfileDropdowns from "../../components/ProfileDropdowns";
import { Content, Header } from "antd/es/layout/layout";
import NotificationDropdown from "../../components/NotificationDropdown";
import Sider from "antd/es/layout/Sider";
import SidebarMenulist from "../AdminComponent/SidebarMenulist";

const SuperAdminLayout = () => {
  const [Collaped, setCollaped] = useState(false);
  const [dropdownOpen, setdropdownOpen] = useState(false);

  const handleModal = () => {
    console.log("button is clicked ????");
    setdropdownOpen(true);
  };

  return (
    <div>
      <Layout>
        <Affix offsetTop={0}>
          <Sider
            collapsed={Collaped}
            collapsible
            trigger={null}
            theme={"light"}
            className="sidebar"
            style={{ height: "100vh" }}
          >
            <img src={FoodOrderingLogo} className="w-20" />
            <SidebarMenulist />
          </Sider>
        </Affix>

        <Layout>
          <Header
            className="main-header border-b-2"
            style={{
              zIndex: 999,
              backgroundColor: "#fff",
              position: "sticky",
              top: 0,
            }}
          >
            <Row>
              <Col span={20}>
                <Button
                  className="toggle border-none"
                  onClick={() => setCollaped(!Collaped)}
                >
                  {Collaped ? (
                    <MenuUnfoldOutlined style={{ height: "20px" }} />
                  ) : (
                    <MenuFoldOutlined />
                  )}
                </Button>
              </Col>

              <Col span={2}>
                <NotificationDropdown>
                  <Badge count={5} onClick={handleModal}>
                    <Avatar shape="circle">
                      <BellOutlined style={{ fontSize: 20, color: "" }} />
                    </Avatar>
                  </Badge>
                </NotificationDropdown>
              </Col>

              <Col span={2}>
                <ProfileDropdowns />
              </Col>
            </Row>
          </Header>

          <Layout
            style={{
              padding: "0 24px 24px",
            }}
          >
            <Content className="main-content">
              <Outlet />
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

export default SuperAdminLayout;
