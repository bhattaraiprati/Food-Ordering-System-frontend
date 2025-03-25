import React from "react";
import AccountSidebar from "../component/Account/AccountSidebar";
import { Outlet, Route, Routes } from "react-router";
import AccountProfile from "../component/Account/AccountProfile";
import ChangePassword from "../component/Account/ChangePassword";



const AccountPage = () => {
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
              <button className="mt-4 sm:mt-0 bg-[#ffb700] hover:bg-[#ffa600] text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffb700] focus:ring-offset-2 transition-colors">
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Account Content */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row">
            <AccountSidebar/>
            <div className="flex-1 p-4 md:p-6">
              <Outlet/>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AccountPage;
