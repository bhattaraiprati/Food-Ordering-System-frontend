  import React, { useContext, useState } from "react";
import { NavLink } from "react-router";
import Logo from "../../../assets/Images/FoodOrderingLogo.png"
import ProfileDropdowns from "./ProfileDropdowns";
import { UserContext } from "../../../Context/User.context";
import { Avatar, Badge, Button, Dropdown, Space } from "antd";
import { BellOutlined, DownOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import NotificationDropdown from "../../components/NotificationDropdown"
import AddCart from "./AddCart";
import CartPage from "./CartPage";

  const ListItem = ({ children, to, isActive, onClick }) => {
    return (
      <li>
        <NavLink
          to={to}
          onClick={onClick}
          className={`flex py-2 text-base font-medium ${
            isActive ? "text-[#ffb700]" : "text-gray-950"
          } hover:text-[#ffb700] lg:ml-12 lg:inline-flex`}
        >
          {children}
        </NavLink>
      </li>
    );
  };

 
  const NavlinkBtn = ({ btn }) => {
    return (
      <NavLink
        to="/login"
        className="rounded-md bg-[#ffb700] text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:text-white hover:bg-[#faca50]"
      >
        {btn}
      </NavLink>
    );
  };

  const items = [
    {
      key: "1",
      label: (
        <NavLink to={"/restaurant/apply"}>Join As Restaurant</NavLink>
      ),
    },
    // {
    //   key: "2",
    //   label: (
    //     <NavLink to={"/deliveryman/apply"}>Join As Deliveryman</NavLink>
       
    //   ),
    // },
  ];

  const UserNavbar = () => {
  const { _user } = useContext(UserContext);
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");
    const [dropdownOpen , setdropdownOpen] = useState(false);

    const handleNavbarActive = (item) => {
      setActiveItem(item);
    };

    const handleModal = () => {
      console.log("button is clicked ????");
      setdropdownOpen(true);
    };

    return (
      <>
        <header
          className={`flex w-full fixed top-0 right-0 left-0 z-40 items-center bg-white dark:bg-dark`}
        >
          <div className="container">
            <div className="relative mx-10 flex items-center justify-between">
              <div className="w-60 max-w-full px-4">
                <NavLink to="/" className="block text-center w-3xs flex py-1">
                  <img src={Logo} alt="logo" className="w-20 " />
                  <p className="text-gray-800 text-lg font-bold mt-6">
                    BhojXpress
                  </p>
                </NavLink>
              </div>
              <div className="flex w-full items-center justify-between px-4">
                <div>
                  <button
                    onClick={() => setOpen(!open)}
                    id="navbarToggler"
                    className={` ${
                      open && "navbarTogglerActive"
                    } absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden`}
                  >
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                    <span className="relative my-[6px] block h-[2px] w-[30px] bg-body-color dark:bg-white"></span>
                  </button>
                  <nav
                    id="navbarCollapse"
                    className={`absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white px-6 py-5 shadow dark:bg-dark-2 lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none lg:dark:bg-transparent ${
                      !open && "hidden"
                    } `}
                  >
                    <ul className="block lg:flex">
                      <ListItem
                        to="/"
                        isActive={activeItem === "home"}
                        onClick={() => handleNavbarActive("home")}
                      >
                        Home
                      </ListItem>
                      <ListItem
                        to="/explore"
                        isActive={activeItem === "explore"}
                        onClick={() => handleNavbarActive("explore")}
                      >
                        Explore
                      </ListItem>
                      <ListItem
                        to="/about"
                        isActive={activeItem === "about"}
                        onClick={() => handleNavbarActive("about")}
                      >
                        About
                      </ListItem>
                    </ul>
                  </nav>
                </div>
                <div className="hidden justify-end pr-16 sm:flex text-gray-900 lg:pr-0">
                  {localStorage.getItem("data") == 0 || localStorage.getItem("data") == null ? (
                    <div className="flex">
                      <Space>
                        <NavlinkBtn btn="SignUp" />
                        <Dropdown menu={{ items }} placement="bottom">
                          <Button>
                            Join Us <DownOutlined />
                          </Button>
                        </Dropdown>
                      </Space>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-5">
                      <div className="mr-1">
                        <NotificationDropdown>
                          <Badge count={2} onClick={handleModal}>
                            <Avatar shape="circle">
                              <BellOutlined
                                style={{ fontSize: 20, color: "" }}
                              />
                            </Avatar>
                          </Badge>
                        </NotificationDropdown>
                      </div>

                      <div className="mr-1">
                        <AddCart>
                          <Badge count={0}>
                            <Avatar shape="circle">
                              <ShoppingCartOutlined
                                style={{ fontSize: 20, color: "" }}
                              />
                            </Avatar>
                          </Badge>
                        </AddCart>
                      </div>
                      <div className="flex space-x-2">
                        <ProfileDropdowns />
                        <p className="font-medium">{_user?.name}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  };

  export default UserNavbar;