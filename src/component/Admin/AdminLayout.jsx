import React, { useContext, useEffect } from 'react'
import {  NavLink, Outlet, useNavigate } from "react-router";
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
import {
  BellOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import ProfileDropdowns from "../components/ProfileDropdowns";
import { Content, Header } from "antd/es/layout/layout";
import NotificationDropdown from "../components/NotificationDropdown";
import Sider from 'antd/es/layout/Sider';
import MainLogo from "../../assets/Images/FoodOrderingLogo.png"
import { UserContext } from '../../Context/User.context';

const AdminLayout = () => {
  const {_rest} = useContext(UserContext);
    const [Collaped, setCollaped] = useState(false);
    const [dropdownOpen, setdropdownOpen] = useState(false);
    const navigate = useNavigate();

    const handleModal = () => {
      console.log("button is clicked ????");
      setdropdownOpen(true);
    };

    useEffect(() => {
      if (localStorage.getItem("restaurant_Login") === "0") {
        navigate("/login");
      }
    });
    

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
            <div className="flex">
              <img src={MainLogo} style={{ height: "70px" }} />
              <p className="text-gray-800 text-lg font-bold mt-6">BhojXpress</p>
            </div>

            <MenuList />
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
              <Col span={17}>
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

              <Col span={5}>
                <div className="flex align-middle">
                  <div>
                    <ProfileDropdowns />
                  </div>
                  <div >
                    <p className="font-medium ml-2 text-gray-800">
                      {_rest.restaurantName}
                    </p>
                  </div>
                </div>
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
}

export default AdminLayout;