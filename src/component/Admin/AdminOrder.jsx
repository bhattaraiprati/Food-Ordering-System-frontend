import React, { useEffect, useState } from 'react'
import { Button, Space, DatePicker, Typography, Input, Modal, Tag, Descriptions } from "antd";
import { Select, Table } from "antd";
import { getAllOrders, getOrdersById, updateOrder } from '../../utils/User.util';
import { SuccesfulMessageToast } from '../../utils/Toastify.util';


const { RangePicker } = DatePicker;
const { Title } = Typography;


const AdminOrder = () => {
 const [orderViewModal, setOrderViewModal] = useState(false);
const [orderDetaiis, setOrderDetails] = useState(null);const [orderData, setOrderData] = useState([]);


 const orderItems = [
   {
     key: "1",
     label: "Order ID",
     span: "filled",
     children: orderData.id,
   },
   {
     key: "2",
     label: "User Name",
     span: "filled",
     children: orderData.user_name,
   },
   {
     key: "3",
     label: "Status",
     span: "filled",
     children: orderData.status,
   },
   {
     key: "4",
     label: "Order Date",
     span: "filled",
     children: new Date(orderData.orderDate).toLocaleString(),
   },
   {
     key: "5",
     label: "Address",
     span: "filled",
     children: orderData.address,
   },
   {
     key: "6",
     label: "Payment Method",
     span: "filled",
     children: orderData.payment_method
       ? orderData.payment_method.join(", ")
       : "N/A",
   },
   {
     key: "7",
     label: "Special Instructions",
     span: "filled",
     children: orderData.special_instruction || "None",
   },
   {
     key: "8",
     label: "Total Items",
     span: "filled",
     children: orderData.items ? orderData.items.length : 0,
   },
   {
     key: "9",
     label: "Total Amount",
     span: "filled",
     children: `Rs. ${orderData.total}`,
   },
 ];

 const itemColumns = [
   {
     title: "Item Name",
     dataIndex: "name",

     key: "name",
   },
   {
     title: "Price",
     dataIndex: "price",
     key: "price",
     render: (price) => `Rs. ${price}`,
   },
   {
     title: "Quantity",
     dataIndex: "quantity",
     key: "quantity",
   },
   {
     title: "Subtotal",
     key: "subtotal",
     render: (_, record) => `Rs. ${record.price * record.quantity}`,
   },
 ];
 

 const showModal = (record) => {
   getOrdersById(record.id)
     .then((response) => {
       setOrderData(record);

       setOrderViewModal(true);
     })
     .catch((error) => {
       console.error("Error order details:", error);
     });
   setOrderViewModal(true);
 };

 const handleOk = () =>{
  setOrderViewModal(false);
 }

 const handleCancel = () =>{
  setOrderViewModal(false);
 }

 const handleChange = (value) => {
   console.log(`selected ${value}`);
 };
 const columns = [
   {
     title: "ID",
     dataIndex: "id",
     align: "center",
   },
   {
     title: "User Details",
     dataIndex: "user_name",
     align: "center",
   },
  

   {
     title: "Total Price",
     dataIndex: "total",
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
     title: "Change Status",
     key: "status",
     align: "center",
     render: (_, record) => {
       // Define your actual status options
       const statusOptions = [
         { value: "pending", label: "Pending" },
         { value: "approved", label: "Approved" },
         { value: "processing", label: "Processing" },
         { value: "completed", label: "Completed" },
         { value: "canceled", label: "Canceled", disabled: true }, // Example disabled status
       ];

       const handleStatusChange = (value) => {
         // Call your API to update the status

          const status = {"status": value}

         updateOrder(record.id, status)
           .then(() => {
             SuccesfulMessageToast("Status Changed!")
             window.location.reload();
               // Refresh data or update local state
           })
           .catch((error) => {
             console.log("Failed to update status");
             console.error(error);
           });
       };

       return (
         <Select
           defaultValue={record.status}
           style={{ width: 120 }}
           onChange={handleStatusChange}
           options={statusOptions}
         />
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

 useEffect(() => {
     getAllOrders().then((response) => {
       setOrderDetails(response);
     });
   }, []);
  
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

      <Table columns={columns} dataSource={orderDetaiis } bordered />

      {/* <OrderViewDetails
        isOpen={orderViewModal}
        onOk={handleOk}
        onCancel={handleCancel}
        record={orderDetaiis}
      /> */}

      <Modal
        title=""
        open={orderViewModal}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Descriptions
            title="Order Details"
            items={orderItems}
            bordered
            column={2}
          />

          <div style={{ marginTop: 24 }}>
            <h3>Order Items</h3>
            <Table
              columns={itemColumns}
              dataSource={orderData.items}
              pagination={false}
            />
            <div className="flex flex-row-reverse mr-12">
              <p>{orderData.total}</p> <p>Total : </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default AdminOrder;