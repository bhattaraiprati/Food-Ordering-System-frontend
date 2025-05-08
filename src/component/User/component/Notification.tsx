import { BellOutlined } from "@ant-design/icons";
import { Menu, Avatar, Badge, Dropdown } from "antd";
import React, { useState } from "react";


interface InotificationType {
  id: string;
  img: string;
  text: string;
  user: string;
  content: string;
  time: string;
}

interface Inotification {
  notifications: InotificationType[];
}



const Notifications: React.FC<Inotification> = ({ notifications }) => {
  const renderNotificationContent = (
    notification: InotificationType
  ) => {
    return (
      <div className="w-full ps-3">
        <div className="text-gray-500 text-[13px] mb-1.5 dark:text-gray-400">
          {notification.text}{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {notification.user}
          </span>{" "}
          {notification.content}
        </div>
        <div className="text-xs text-blue-600 dark:text-blue-500">
          {notification.time}
        </div>
      </div>
    );
  };

  const notificationMenu = (
    <div className="w-full max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow-sm dark:bg-gray-800 dark:divide-gray-700">
      <div className="block px-4 py-2 font-medium text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
        Notifications
      </div>
      <div className="divide-y divide-gray-100 dark:divide-gray-700">
        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <a
              key={notification.id}
              href="#"
              className="flex px-4 py-3 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <div className="shrink-0">
                <Avatar
                  className="rounded-full w-11 h-11"
                  src={notification.img}
                />
              </div>
              {renderNotificationContent(notification)}
            </a>
          ))
        ) : (
          <div className="px-4 py-3 text-center text-gray-500 dark:text-gray-400">
            No new notifications
          </div>
        )}
      </div>
      <a
        href="#"
        className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white"
      >
        <div className="inline-flex items-center">
          <svg
            className="w-4 h-4 me-2 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 14"
          >
            <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
          </svg>
          View all
        </div>
      </a>
    </div>
  );

  return (
    <div>
      <Dropdown
        overlay={notificationMenu}
        trigger={["click"]}
        placement="bottomRight"
      >
        <Badge count={notifications.length}>
          <Avatar className="dropdown" icon={<BellOutlined />} />
        </Badge>
      </Dropdown>
    </div>
  );
};

export default Notifications;
