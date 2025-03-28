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
import AdminLayout from "./component/Admin/AdminLayout";
import AboutPage from "./component/User/Pages/AboutPage";
import AdminHome from "./component/Admin/AdminHome";
import AdminOrder from "./component/Admin/AdminOrder";
import AllMenu from "./component/Admin/AllMenu";
import AdminProfile from "./component/Admin/AdminProfile";
import CategoriesPage from "./component/Admin/Pages/CategoriesPage";
import RestaurantRegister from "./component/Admin/Pages/RestaurantRegister";
import SuperAdminLayout from "./component/SuperAdmin/pages/SuperAdminLayout";
import SuperAdminHome from "./component/SuperAdmin/pages/SuperAdminHome";
import SupperAdminRestaurant from "./component/SuperAdmin/pages/SupperAdminRestaurant";
import {  CartProvider } from "./Context/Cart.context";
import CheckoutPage from "./component/User/component/CheckoutPage";


function App() {
  const [_user, _setUser] = useState(
    localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [_rest, _setRest] = useState(
    localStorage.getItem("restaurant_Login")
      ? JSON.parse(localStorage.getItem("restaurant_Login"))
      : null
  );

  return (
    <>
      <UserContext.Provider value={{ _user, _setUser, _rest, _setRest }}>
        <CartProvider>
          <BrowserRouter>
            <ToastContainer />
            <Routes>
              <Route path="/" element={<UserLandingPage />}>
                <Route path="" element={<HomePage />} />
                <Route path="explore" element={<Explore />} />
                <Route path="about" element={<AboutPage />} />
                <Route path="detail/:id" element={<RestaurantDetails />} />
                <Route
                  path="/restaurant/apply"
                  element={<RestaurantRegister />}
                />
                <Route path="checkout/:id" element={<CheckoutPage/>}/>
                <Route path="setting" element={<AccountPage />}>
                  <Route path="" element={<AccountProfile />} />
                  <Route path="changePassword" element={<ChangePassword />} />
                  <Route path="orderHistory" element={<OrderHistory />} />
                  <Route path="favourite" element={<FavouritePage />} />
                </Route>
              </Route>
              <Route path="/restaurant" element={<AdminLayout />}>
                <Route path="" element={<AdminHome />} />
                <Route path="order" element={<AdminOrder />} />
                <Route path="allMenu" element={<AllMenu />} />
                <Route path="categories" element={<CategoriesPage />} />
                <Route path="/restaurant/setting" element={<AdminProfile />} />
              </Route>
              <Route path="/admin" element={<SuperAdminLayout />}>
                <Route path="" element={<SuperAdminHome />} />
                <Route path="restaurant" element={<SupperAdminRestaurant />} />
              </Route>

              <Route path="login" element={<LoginPage />} />
              <Route path="register" element={<RegisterPage />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
