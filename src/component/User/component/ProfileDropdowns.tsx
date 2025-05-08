import { LogoutOutlined, SettingOutlined } from "@ant-design/icons";
import { Avatar, Dropdown, Modal } from "antd";
import React, { useState } from "react";
import Profile from "/src/assets/images/ProfilePic.jpg";
import { useNavigate } from "react-router";
import { useAuth } from "../../../Context/AuthContext";
import type { MenuProps } from "antd";



interface ISettingKeys {
  key: string
}

const items: MenuProps['items'] = [
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
  const { logout } = useAuth();

  const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOk = () => {

      setIsModalOpen(false);

      logout();

      // localStorage.setItem("access", 0);
      // localStorage.setItem("refresh", 0);
      // localStorage.setItem("role", 0);
      // localStorage.setItem("data", 0);

      navigate("/");
      window.location.reload();
      console.log("Logout clicked");

    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

  const handleMenuClick = (e: ISettingKeys) => {
    if (e.key === "/setting") {
      navigate("/setting");
    } else if (e.key === "/logout") {
      setIsModalOpen(true);
    }
  };
  return (
    <div>
      <Dropdown menu={{ items, onClick: handleMenuClick }}>
        <Avatar className="profile-dropdown" src={Profile} />
      </Dropdown>

      <Modal
        title="Are you sure want to Logout!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      ></Modal>
    </div>
  );
};

export default ProfileDropdowns;
