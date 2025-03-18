  import React, { useState } from "react";
import { NavLink } from "react-router";
  

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

  const UserNavbar = () => {
    const [open, setOpen] = useState(false);
    const [activeItem, setActiveItem] = useState("");

    const handleNavbarActive = (item) => {
      setActiveItem(item);
    };

    return (
      <>
        <header
          className={`flex w-full fixed top-0 right-0 left-0 z-40 items-center bg-white dark:bg-dark`}
        >
          <div className="container">
            <div className="relative mx-10 flex items-center justify-between">
              <div className="w-60 max-w-full px-4">
                <NavLink to="/" className="block w-3xs py-5">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPfZniVo34CymSZNiiGI6j9CZEU5v28ctENg&s"
                    alt="logo"
                    className="w-14"
                  />
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
                      <ListItem
                        to="/blog"
                        isActive={activeItem === "blog"}
                        onClick={() => handleNavbarActive("blog")}
                      >
                        Blog
                      </ListItem>
                    </ul>
                  </nav>
                </div>
                <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                  <NavLink
                    to="/login"
                    className="rounded-md bg-[#ffb700] text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:text-white hover:bg-[#faca50]"
                  >
                    Sign Up
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  };

  export default UserNavbar;