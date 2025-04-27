import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Card,
  Descriptions,
  Divider,
  List,
  Tag,
  Typography,
} from "antd";

import { Clock, MapPin, ShoppingBag } from "lucide-react";
import { UserContext } from "../../../../Context/User.context";
import { getOrdersById, getOrdersByUserId, getRestaurantDetailsById, getRestaurantDetailsByRestauarntId } from "../../../../utils/User.util";
// import Title from "antd/es/typography/Title";

const { Title, Text } = Typography;

const OrderHistory = () => {
  const [orderDetails, setOrderDetails] = useState([]);
  const [restaurantNames, setRestaurantNames] = useState({});
  const { _user } = useContext(UserContext);

 useEffect(() => {
   const fetchOrders = async () => {
     try {
       const orders = await getOrdersByUserId(_user.id);
       setOrderDetails(orders);
       
     } catch (error) {
       console.error("Error fetching data:", error);
     }
   };

   fetchOrders();
 }, []);

  const currentOrders = orderDetails.filter(
    (order) => order.status !== "completed"
  );
  const pastOrders = orderDetails.filter(
    (order) => order.status === "completed"
  );

  const getStatusTag = (status) => {
    let color;
    switch (status) {
      case "pending":
        color = "orange";
        break;
      case "processing":
        color = "blue";
        break;
      case "completed":
        color = "green";
        break;
      case "cancelled":
        color = "red";
        break;
      default:
        color = "gray";
    }
    return <Tag color={color}>{status.toUpperCase()}</Tag>;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  console.log("shdjsdh",restaurantNames);

  return (
    <div className="px-10 py-6">
      <Title level={3}>Order History</Title>

      {/* Current Orders Section */}
      <Divider orientation="left" className="text-lg flex">
        <ShoppingBag size={20} className="mr-2" />
        <div>Current Orders</div>
      </Divider>

      {currentOrders.length > 0 ? (
        <div className="grid gap-4">
          {currentOrders.map((order) => (
            <Card key={order.id} className="mb-4 shadow-sm">
              <div className="flex justify-between items-start">
                <div>
                  <Title level={4} className="mb-2">
                    {restaurantNames[order.restaurantId] || "Restaurant"}
                  </Title>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock size={16} className="mr-2" />

                    <Text>{formatDate(order.orderDate)}</Text>
                  </div>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin size={16} className="mr-2" />
                    <Text>{order.address}</Text>
                  </div>
                </div>
                <div className="text-right">
                  {getStatusTag(order.status)}
                  <Title level={4} className="mt-2">
                    Rs. {order.total}
                  </Title>
                </div>
              </div>

              <Divider className="my-3" />

              <List
                dataSource={order.items}
                renderItem={(item) => (
                  <List.Item>
                    <div className="flex justify-between w-full">
                      <Text>{item.name}</Text>
                      <Text>
                        Rs. {item.price} × {item.quantity}
                      </Text>
                    </div>
                  </List.Item>
                )}
              />

              <div className="mt-4">
                <Text strong>Payment Method: </Text>
                <Text>{order.payment_method.join(", ")}</Text>
                {order.special_instruction && (
                  <div className="mt-2">
                    <Text strong>Special Instructions: </Text>
                    <Text>{order.special_instruction}</Text>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <Text className="text-gray-500">No current orders</Text>
      )}

      {/* Past Orders Section */}
      <Divider orientation="left" className="text-lg mt-8">
        <ShoppingBag size={20} className="mr-2" />
        Past Orders
      </Divider>

      {pastOrders.length > 0 ? (
        <div className="grid gap-4">
          {pastOrders.map((order) => (
            <Card key={order.id} className="mb-4 shadow-sm">
              {/* Similar structure as current orders */}
              <div className="flex justify-between items-start">
                <div>
                  <Title level={4} className="mb-2">
                    {restaurantNames[order.restaurantId] || "Restaurant"}
                  </Title>
                  <div className="flex items-center text-gray-600 mb-2">
                    <Clock size={16} className="mr-2" />
                    <Text>{formatDate(order.orderDate)}</Text>
                  </div>
                </div>
                <div className="text-right">
                  {getStatusTag(order.status)}
                  <Title level={4} className="mt-2">
                    Rs. {order.total}
                  </Title>
                </div>
              </div>

              <List
                dataSource={order.items}
                renderItem={(item) => (
                  <List.Item>
                    <div className="flex justify-between w-full">
                      <Text>{item.name}</Text>
                      <Text>
                        Rs. {item.price} × {item.quantity}
                      </Text>
                    </div>
                  </List.Item>
                )}
              />
            </Card>
          ))}
        </div>
      ) : (
        <Text className="text-gray-500">No past orders</Text>
      )}
    </div>
  );
};

export default OrderHistory;
