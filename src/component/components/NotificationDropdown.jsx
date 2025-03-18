import React from "react";
import { Dropdown } from "antd";

const items = [
  {
    label: "first notification",
    key: "1",
  },
  {
    label: "second notification",
    key: "2",
  },
  {
    label: "Third notification",
    key: "3",
  },
  {
    label: "Third notification",
    key: "4",
  },
  {
    label: "Third notification",
    key: "5",
  },
  {
    label: "Third notification",
    key: "6",
  },
  {
    label: "Third notification",
    key: "7",
  },
];

const NotificationDropdown = ({ children }) => {
  return (
    <Dropdown
      menu={{
        items,
      }}
      trigger={["click"]}
      overlayStyle={{
        width: "30%", 
        maxHeight: "200px", 
        overflowY: "auto", 
        boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)", 
      }}
    >
      {/* Use the children prop as the trigger */}
      <div onClick={(e) => e.preventDefault()}>{children}</div>
    </Dropdown>
  );
};

export default NotificationDropdown;
