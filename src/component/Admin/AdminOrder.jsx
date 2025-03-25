import React, { useState } from 'react'
import { Button, Space, DatePicker, Typography, Input, Modal, Tag } from "antd";
import { Select, Table } from "antd";
// import '/src/assets/css/Order.css';
import OrderViewDetails from '../components/OrderViewDetails';


const { RangePicker } = DatePicker;
const { Title } = Typography;


const data = [
  {
    id: "1",
    user_details: "John ",
    order_status: "John Brown",
    date_time: "￥300,000.00",
    total_price: 300,
    status: 'pending',
    delivery_type: "New York ",
  },
  {
    id: "2",
    user_details: "Pratik ",
    order_status: "Pratik Bhattarai",
    date_time: "￥900,000.00",
    total_price: 200,
    status: 'canceled',
    delivery_type: "Fast",
  },
];

const AdminOrder = () => {
 const [orderViewModal, setOrderViewModal] = useState(false);
const [orderDetaiis, setOrderDetails] = useState(null);
 

 const showModal = (record) => {
  setOrderDetails(record);
   setOrderViewModal(true);
 };

 const handleOk = () =>{
  setOrderViewModal(false);
 }

 const handleCancel = () =>{
  setOrderViewModal(false);
 }

 const columns = [
   {
     title: "ID",
     dataIndex: "id",
     align: "center",
   },
   {
     title: "User Details",
     dataIndex: "user_details",
     align: "center",
   },
   {
     title: "Order Status",
     dataIndex: "order_status",
     align: "center",
   },
   {
     title: "Date & Time",
     dataIndex: "date_time",
     align: "center",
   },
   {
     title: "Total Price",
     dataIndex: "total_price",
     align: "center",
   },
   {
     title: "Status",
     dataIndex: "status",
     align: "center",
     render: (_, { status }) => {
       let color = status === "pending" ? "green" : "geekblue"; // Adjust color logic as needed
       if (status === "canceled") {
         color = "volcano";
       }
       return (
         <Tag color={color} key={status}>
           {status.toUpperCase()}
         </Tag>
       );
     },
   },
   {
     title: "Delivery Type",
     dataIndex: "delivery_type",
     align: "center",
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
        <Title level={3}>ALl Order List</Title>
        <div className="filter-option" style={{ marginBottom: "20px" }}>
          <Space size={20}>
            <Select
              showSearch
              defaultValue={"Pending"}
              placeholder="Select Status"
              filterOption={(input, option) =>
                (option?.label ?? "")
                  .toLowerCase()
                  .includes(input.toLowerCase())
              }
              options={[
                { value: "1", label: "All" },
                { value: "2", label: "Pending" },
                { value: "3", label: "Delivered" },
                { value: "4", label: "Canceled" },
              ]}
            />
            <RangePicker />
            <Input placeholder="Search" />
            <Space>
              <Button type="primary">Search</Button>
              <Button>Clear</Button>
            </Space>
          </Space>
        </div>
      </div>

      <Table columns={columns} dataSource={data} bordered />

      <OrderViewDetails
        isOpen={orderViewModal}
        onOk={handleOk}
        onCancel={handleCancel}
        record={orderDetaiis}
      />
    </div>
  );
}

export default AdminOrder;