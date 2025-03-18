import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router";
import {
  Affix,
  Avatar,
  Badge,
  Button,
  Col,
  Layout,
  Row,
  theme,
} from "antd";
import Logos from "../components/Logos";
import MenuList from "../MenuList";
import { useState } from "react";
import ToggleThemeButton from "../components/ToggleThemeButton";
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import ProfileDropdowns from "../components/ProfileDropdowns";
import { Content, Header } from "antd/es/layout/layout";
import AdminHome from "./AdminHome";
import AdminOrder from "./AdminOrder";
import AllMenu from "./AllMenu";
import NotificationDropdown from "../components/NotificationDropdown";
import AdminProfile from "./AdminProfile";
import Sider from 'antd/es/layout/Sider';

const AdminLayout = () => {
    const [darkTheme, setDarkTheme] = useState(true);
    const [Collaped, setCollaped] = useState(false);
    const [dropdownOpen, setdropdownOpen] = useState(false);

    const toggleTheme = () => {
      setDarkTheme(!darkTheme);
    };

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const handleModal = () => {
      console.log("button is clicked ????");
      setdropdownOpen(true);
    };
    const notiDropdownOkBtn = () => {
      setdropdownOpen(false);
    };
    const notiDropdownCancelBtn = () => {
      setdropdownOpen(false);
    };

  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Affix offsetTop={0}>
            <Sider
              collapsed={Collaped}
              collapsible
              trigger={null}
              theme={darkTheme ? "dark" : "light"}
              className="sidebar"
            >
              <Logos />
              <MenuList darkTheme={darkTheme} />
              <ToggleThemeButton
                darkTheme={darkTheme}
                toggleTheme={toggleTheme}
              />
            </Sider>
          </Affix>

          <Layout>
            <Header className="main-header" style={{ zIndex: 999 }}>
              <Row>
                <Col span={20}>
                  <Button
                    className="toggle"
                    onClick={() => setCollaped(!Collaped)}
                    type="text"
                    icon={
                      Collaped ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />
                    }
                  />
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
                <Routes>
                  <Route path="/" element={<AdminHome />} />
                  <Route path="/Order" element={<AdminOrder />} />
                  <Route path="/AllMenu" element={<AllMenu />} />
                  <Route path="/AllMenu" element={<AllMenu />} />
                  <Route path="/admin/setting" element={<AdminProfile />} />

                  {/* <Route path="/services" element={<Services />} />
                  <Route path="/blog" element={<Blog />} /> */}
                </Routes>
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default AdminLayout;