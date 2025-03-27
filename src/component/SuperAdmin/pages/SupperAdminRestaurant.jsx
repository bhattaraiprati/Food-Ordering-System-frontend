import React, { useEffect, useState } from "react";
import { Button, Space, DatePicker, Typography, Input, Modal, Tag } from "antd";
import { Select, Table } from "antd";
import { getRestaurantDetails } from "../../../utils/Admin.util";
// import '/src/assets/css/Order.css';
// import OrderViewDetails from "../components/OrderViewDetails";

const { RangePicker } = DatePicker;
const { Title } = Typography;


const SupperAdminRestaurant = () => {
  const [orderViewModal, setOrderViewModal] = useState(false);
  const [restaurantDetaiis, setRestaurantDetails] = useState(null);

  const showModal = (record) => {
    setOrderDetails(record);
    setOrderViewModal(true);
  };

  const handleOk = () => {
    setOrderViewModal(false);
  };

  const handleCancel = () => {
    setOrderViewModal(false);
  };

  useEffect(()=>{
    getRestaurantDetails().then((response)=>{
        setRestaurantDetails(response);
    })
  })

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      align: "center",
    },
    {
      title: "Restaurant Name",
      dataIndex: "restaurantName",
      align: "center",
    },
    {
      title: "Location",
      dataIndex: "location",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      align: "center",
    },
    {
      title: "Owner Name",
      dataIndex: "full_name",
      align: "center",
    },
    {
      title: "Status",
      dataIndex: "verified",
      align: "center",
      render: (_, { verified }) => {
        let color = verified === "true" ? "green" : "geekblue"; // Adjust color logic as needed
        if (verified === "canceled") {
          color = "volcano";
        }
        return (
          <Tag color={color} key={verified}>
            {verified}
          </Tag>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => showModal(record)}>
            View
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <div className="top-filter">
        <Title level={3}>ALl Restaurant List</Title>
        <div className="filter-option" style={{ marginBottom: "20px" }}>
          <Space size={20}>
            <Select
              showSearch
              defaultValue={"Un-verified"}
              placeholder="Select Status"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              style={{
                width: "20vh",
              }}
              options={[
                { value: "1", label: "All" },
                { value: "2", label: "Verified" },
                { value: "3", label: "Un-verified" },
              ]}
            />

            <Input placeholder="Search" />
            <Space>
              <Button type="primary">Search</Button>
            </Space>
          </Space>
        </div>
      </div>

      <Table columns={columns} dataSource={restaurantDetaiis} bordered />

      {/* <OrderViewDetails
        isOpen={orderViewModal}
        onOk={handleOk}
        onCancel={handleCancel}
        record={orderDetaiis}
      /> */}
    </div>
  );
};

export default SupperAdminRestaurant;
