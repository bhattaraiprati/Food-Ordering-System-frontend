import React, { useState } from 'react'
import { User, Lock, ShoppingBag, Heart, MapPin } from "lucide-react";
import { useLocation, useNavigate } from 'react-router';
 

const AccountSidebar = () => {
  const location = useLocation();
    const [activeItem, setActiveItem] = useState("My Profile");
    const navigate = useNavigate();

    const menuItems = [
      {
        icon: <User className="h-5 w-5" />,
        label: "My Profile",
        path: "/setting",
      },
      {
        icon: <Lock className="h-5 w-5" />,
        label: " Change Password",
        path: "/setting/changePassword",
      },
      {
        icon: <ShoppingBag className="h-5 w-5" />,
        label: "Order History",
        path: "/setting/orderHistory",
      },
      {
        icon: <Heart className="h-5 w-5" />,
        label: "Favourites",
        path: "/setting/favourite",
      },
      {
        icon: <MapPin className="h-5 w-5" />,
        label: "Saved Addresses",
        path: "/setting/savedAddress",
      },
    ];

    const handleActiveMenu = (itemLabel) => {
      setActiveItem(itemLabel);
    };
    
  return (
    <>
      <aside className="w-full md:w-64 shrink-0 border-r border-gray-300">
        <nav className="sticky top-20 p-5">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index}>
                  <button
                    onClick={() => navigate(item.path)} 
                    className={`flex w-full items-center text-base px-4 py-3 rounded-lg outline-none transition-all duration-200 ${
                      isActive
                        ? "text-[#ffb700] focus:outline-none font-medium bg-gray-100"
                        : "hover:bg-gray-50 bg-white focus:outline-none text-gray-900 hover:text-[#ffb700]"
                    }`}
                  >
                    <span className="mr-3 opacity-80">{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default AccountSidebar