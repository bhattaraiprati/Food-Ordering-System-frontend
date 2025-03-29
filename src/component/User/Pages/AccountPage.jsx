import React, { useContext, useEffect, useState } from "react";
import AccountSidebar from "../component/Account/AccountSidebar";
import { Outlet, Route, Routes, useNavigate } from "react-router";
import AccountProfile from "../component/Account/AccountProfile";
import ChangePassword from "../component/Account/ChangePassword";
import { SuccesfulMessageToast } from "../../../utils/Toastify.util";
import { Modal } from "antd";
import { UserContext } from "../../../Context/User.context";



const AccountPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {_user} = useContext(UserContext);


  const handleUserLogout = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    localStorage.setItem("is_Login", 0);
    setIsModalOpen(false);
    navigate("/");
    SuccesfulMessageToast("Logout Successfully");
    window.location.reload();
    
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(()=>{
    if(localStorage.getItem("is_Login") === "0"){
      navigate("/login")
    }
  })

  return (
    <div className="min-h-screen bg-white">
      <main className="pt-16">
        {/* Account Header */}
        <div className="border-b border-gray-200">
          <div className="container mx-auto px-14 py-6">
            <div className="flex flex-wrap items-center justify-between">
              <h1 className="text-3xl font-semibold text-gray-800">
                Profile Settings
              </h1>

              {/* Plain JSX Button with Tailwind CSS */}
              <button
                onClick={handleUserLogout}
                className="mt-4 sm:mt-0 bg-[#ffb700] hover:bg-[#ffa600] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:ring-offset-2 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Account Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <AccountSidebar />
            <div className="flex-1 p-4 md:p-6">
              <Outlet />
            </div>
          </div>
        </div>
      </main>
      <Modal
        title="Are you sure want to logout!"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >

      </Modal>
    </div>
  );
};

export default AccountPage;
