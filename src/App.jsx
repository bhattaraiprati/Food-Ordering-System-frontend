import { useState } from "react";
import "./App.css";
import UserLandingPage from "./component/User/Pages/landing/UserLandingPage";
import Customlanding from "./component/User/Pages/landing/Customlanding";
import LoginPage from "./component/User/Pages/loginPage";
import RegisterPage from "./component/User/Pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./component/User/Pages/HomePage";
import Explore from "./component/User/Pages/Explore";
import RestaurantDetails from "./component/User/Pages/RestaurantDetails";

function App() {
  const links = [
    { name: "Open roles", href: "#" },
    { name: "Internship program", href: "#" },
    { name: "Our values", href: "#" },
    { name: "Meet our leadership", href: "#" },
  ];
  const stats = [
    { name: "Offices worldwide", value: "12" },
    { name: "Full-time colleagues", value: "300+" },
    { name: "Hours per week", value: "40" },
    { name: "Paid time off", value: "Unlimited" },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLandingPage />}>
            <Route path="" element={<HomePage/> } />
            <Route path="explore" element={<Explore/>} />
            <Route path="restaurant/detail/" element={<RestaurantDetails/>} />
          </Route>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
