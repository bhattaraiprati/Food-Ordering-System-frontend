import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Dropdown } from "antd";
import React from "react";
import Profile from "/src/assets/images/ProfilePic.jpg";
import { useNavigate } from "react-router";

const items = [
  {
    key: "1",
    label: "My Account",
    disabled: true,
  },
  {
    type: "divider",
  },
  {
    key: "/setting",
    label: "Setting",
    icon: <SettingOutlined />,
  },
  {
    key: "/logout",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];

const ProfileDropdowns = () => {
  const navigate = useNavigate();

  const handleMenuClick = (e) => {
    if (e.key === "/setting") {
      navigate("/setting"); 
    } else if (e.key === "/logout") {
      localStorage.setItem("is_Login", 0);
      navigate("/login")
      console.log("Logout clicked");
    }
  };
  return (
    <Dropdown menu={{ items, onClick: handleMenuClick }}>
      <Avatar className="profile-dropdown" src={Profile} />
    </Dropdown>
  );
};

export default ProfileDropdowns;
