
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Dropdown, Modal } from 'antd';
import React, { useContext, useState } from 'react'
import Profile from "/src/assets/images/ProfilePic.jpg";
import { icons } from 'antd/es/image/PreviewGroup';
import { useNavigate } from 'react-router';
import { UserContext } from '../../Context/User.context';

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
    key: "/restaurant/setting",
    label: "Setting",
    icon: <SettingOutlined/>,
    
  },
  {
    key: "/logout",
    label: "Logout",
    icon: <LogoutOutlined />,
  },
];



const ProfileDropdowns = (logout) => {
  const { _rest, _setRest } = useContext(UserContext);

  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOk = () => {
    if (_setRest) {
      _setRest(null); // Reset _rest to null
    }
    if(logout){
      localStorage.setItem("admin_Login", 0);
    }
    // localStorage.removeItem("restaurant_Login");

    setIsModalOpen(false);
    navigate("/login");
    console.log("Logout clicked");

  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  const handleMenuClick = (e) => {
    if (e.key === "/restaurant/setting") {
      navigate("/restaurant/setting"); 
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
      >
        
      </Modal>
    </div>
  );
}

export default ProfileDropdowns;