import { useState } from "react";
import "./App.css";
import UserLandingPage from "./component/User/Pages/landing/UserLandingPage";
import LoginPage from "./component/User/Pages/loginPage";
import RegisterPage from "./component/User/Pages/RegisterPage";
import { BrowserRouter, Route, Routes } from "react-router";
import HomePage from "./component/User/Pages/HomePage";
import Explore from "./component/User/Pages/Explore";
import RestaurantDetails from "./component/User/Pages/RestaurantDetails";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./Context/User.context";
import AccountPage from "./component/User/Pages/AccountPage";
import ChangePassword from "./component/User/component/Account/ChangePassword";
import AccountProfile from "./component/User/component/Account/AccountProfile";
import OrderHistory from "./component/User/component/Account/OrderHistory";
import FavouritePage from "./component/User/component/Account/FavouritePage";
import AdminLayout from './component/Admin/AdminLayout'
import AboutPage from "./component/User/Pages/AboutPage";

function App() {
  const [_user, _setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

 

  return (
    <>
      <UserContext.Provider value={{ _user, _setUser }}>
        <BrowserRouter>
          <ToastContainer />
          <Routes>
            <Route path="/" element={<UserLandingPage />}>
              <Route path="" element={<HomePage />} />
              <Route path="explore" element={<Explore />} />
              <Route path="about" element={<AboutPage/>} />
              <Route
                path="restaurant/detail/"
                element={<RestaurantDetails />}
              />
              <Route path="setting" element={<AccountPage />}>
                <Route path="" element={<AccountProfile />} />
                <Route path="changePassword" element={<ChangePassword />} />
                <Route path="orderHistory" element={<OrderHistory />} />
                <Route path="favourite" element={<FavouritePage />} />
              </Route>
            </Route>
            <Route path="/admin" element={<AdminLayout />}></Route>

            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
