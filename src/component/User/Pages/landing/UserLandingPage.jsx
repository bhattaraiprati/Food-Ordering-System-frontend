import React, { useState } from "react";
import { NavLink } from "react-router";
import { Outlet } from "react-router";
import UserFooter from "../../component/UserFooter";
import UserNavbar from "../../component/UserNavbar";




const UserLandingPage = () => {
  return (
    <div className="relative">
      <UserNavbar/>
      <div>
       <Outlet/>
      </div>
      <UserFooter />
    </div>
  );
};

export default UserLandingPage;
