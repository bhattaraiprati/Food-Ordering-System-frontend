import React from "react";
import { Dropdown, Badge, List, Avatar, Typography } from "antd";
import {
  BellOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const { Text } = Typography;



const notifications = [
  {
    id: "1",
    type: "order-confirmation",
    title: "Order Confirmed!",
    description: "Your order #ORD-2023-001 has been confirmed",
    time: "2 mins ago",
    read: false,
    icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
  },
  {
    id: "2",
    type: "order-processing",
    title: "Order Being Prepared",
    description: "Restaurant is preparing your order #ORD-2023-001",
    time: "15 mins ago",
    read: false,
    icon: <ClockCircleOutlined style={{ color: "#faad14" }} />,
  },
  {
    id: "3",
    type: "order-delivery",
    title: "Out for Delivery",
    description: "Your order #ORD-2023-001 is on its way",
    time: "30 mins ago",
    read: true,
    icon: <ShoppingOutlined style={{ color: "#1890ff" }} />,
  },
  {
    id: "4",
    type: "order-delivered",
    title: "Order Delivered",
    description: "Your order #ORD-2023-001 has been delivered",
    time: "1 hour ago",
    read: true,
    icon: <CheckCircleOutlined style={{ color: "#52c41a" }} />,
  },
];



const NotificationDropdown = ({ children }) => {
  const unreadCount = notifications.filter((n) => !n.read).length;
const markAsRead = (id) => {
  console.log(`Marking notification ${id} as read`);
  // In a real app, you would update the notification state here
};

  return (
    <div className="">
      <Dropdown
        overlay={
          <div className="notification-dropdown bg-[#fff] px-5 py-2">
            <div className="notification-header">
              <Text strong>Notifications</Text>
              
            </div>
            <List
              itemLayout="horizontal"
              dataSource={notifications}
              renderItem={(item) => (
                <List.Item
                  className={`notification-item ${item.read ? "" : "unread"}`}
                  onClick={() => markAsRead(item.id)}
                >
                  <List.Item.Meta
                    avatar={<Avatar icon={item.icon} />}
                    title={
                      <div className="notification-title">
                        <Text strong>{item.title}</Text>
                        {!item.read && <div className="unread-dot" />}
                      </div>
                    }
                    description={
                      <>
                        <Text>{item.description}</Text>
                        <div className="notification-time">
                          <Text type="secondary">{item.time}</Text>
                        </div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
            <div className="">
              <Text type="secondary">View all notifications</Text>
            </div>
          </div>
        }
        trigger={["click"]}
        overlayStyle={{
          width: 350,
          maxHeight: 400,
          overflowY: "auto",
          borderRadius: 8,
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.16)",
        }}
      >
        <Badge count={2} >
          {children || (
            <div className="notification-icon">
              <BellOutlined style={{ fontSize: 18 }} />
            </div>
          )}
        </Badge>
      </Dropdown>
    </div>
  );
};

export default NotificationDropdown;
