import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Descriptions, Modal, Row, Space, Table, Typography } from "antd";
import { Card, Statistic } from "antd";
// import { faker } from "@faker-js/faker";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DetailsCards from "../components/DetailsCards";
import Title from "antd/es/typography/Title";
import { NavLink, useNavigate } from "react-router";
import {  getOrdersById, getOrdersByIdAndStatus, updateOrder } from "../../utils/User.util";
import { UserContext } from "../../Context/User.context";
import {
  ErrorMessageToast,
  SuccesfulMessageToast,
} from "../../utils/Toastify.util";

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Monthly Sales Chart",
    },
  },
};

const AdminHome = () => {
  const { _rest } = useContext(UserContext);
  const navigate = useNavigate();
  const [orderId, setOrderId] = useState(null);
  const [orderDetaiis, setOrderDetails] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [declineModal, setDeclineModal] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [orderData, setOrderData] = useState([]);

  const showModal = (record) => {

    getOrdersById(record.id)
      .then((response) => {
        setOrderData(response);
        setIsModalOpen(true);
      })
      .catch((error) => {
        console.error("Error order details:", error);

      });
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleRequestApprove = (record) => {
    setOrderId(record.id);
    setModalShow(true);
  };

  const handleDeclineRequest = (record) => {
    setOrderId(record.id);
    setDeclineModal(true);
  };

  const handlerequestDecline = () => {
    setModalShow(false);
    setDeclineModal(false);
  };

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

  const column = [
    {
      title: "ID",
      align: "center",
      dataIndex: "id",
    },
    {
      title: "Name",
      align: "center",
      dataIndex: "user_name",
      render: (_, record) => (
        <NavLink onClick={()=>showModal(record)}>{record.user_name} </NavLink>
      ),
    },
    {
      title: "Quantity",
      align: "center",
      // dataIndex: "items",
      render: (_, record) => <p>{record.items.length} </p>,
    },
    {
      title: "Total Price",
      align: "center",
      dataIndex: "total",
    },
    {
      title: "Status",
      key: "status",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <Button type="primary" onClick={() => handleRequestApprove(record)}>
            Approve
          </Button>
          <Button
            color="danger"
            variant="solid"
            onClick={() => handleDeclineRequest(record)}
          >
            Decline
          </Button>
        </Space>
      ),
    },
  ];

 
  const handleApprove = () => {
    const status = "approved";
    updateOrder(orderId, { status })
      .then(() => {
        SuccesfulMessageToast("Approved");
        window.location.reload();
        navigate("");
      })
      .catch((error) => {
        console.error("Failed to approve:", error);
        ErrorMessageToast("Approval failed!");
      });
    setModalShow(false);
  };

  const handleDecline = () => {
    const status = "decline";
    updateOrder(orderId, { status })
      .then(() => {
        navigate("");
        window.location.reload();
        SuccesfulMessageToast("decline");
      })
      .catch((error) => {
        console.error("Failed to approve:", error);
        ErrorMessageToast("Approval failed!");
      });
    setDeclineModal(false);
  };

  useEffect(() => {
    getOrdersByIdAndStatus(_rest?.id).then((response) => {
      console.log("order data", _rest.id);
      setOrderDetails(response);
    });
  }, [_rest?.id]);

  

  return (
    <>
      <Row className="mt-5">
        <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
          <Col offset={1}>
            <DetailsCards
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "green",
                    background: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title="Today Total Order"
              value="55 "
            />
          </Col>
          <Col offset={1}>
            <DetailsCards
              icon={
                <ShoppingOutlined
                  style={{
                    color: "red",
                    background: "rgba(255,0,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title="Pending order "
              value="4"
            />
          </Col>
          <Col offset={1}>
            <DetailsCards
              icon={
                <UserOutlined
                  style={{
                    color: "blue",
                    background: "rgba(0,0,255,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title="This Week Order"
              value="250"
            />
          </Col>
          <Col offset={1}>
            <DetailsCards
              icon={
                <ShoppingCartOutlined
                  style={{
                    color: "purple",
                    background: "rgba(0,255,255,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title="This Month Order"
              value="1230"
            />
          </Col>
        </div>
      </Row>

      <div style={{ margin: 40 }}>
        {/* <Row>
            <Col span={10}>
              <Typography.Text>Recent Orders</Typography.Text>
              <Table
                columns={column}
                dataSource={tableData}
                pagination={false}
              ></Table>
            </Col>
            <Col span={13} offset={1}>
              
            </Col>
         
        </Row> */}

        <div>
          <div className="top-filter mt-10">
            <Title level={3}>Order Request</Title>
          </div>

          <Table columns={column} dataSource={orderDetaiis} bordered />
        </div>
      </div>
      <Modal
        title="Are you sure want to Approved"
        open={modalShow}
        onOk={handleApprove}
        onCancel={handlerequestDecline}
      ></Modal>
      <Modal
        title="Are you sure want to Decline"
        open={declineModal}
        onOk={handleDecline}
        onCancel={handlerequestDecline}
      ></Modal>

      <Modal
        title=""
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <Descriptions
            title="Order Details"
            items={orderItems}
            bordered
            column={2}
            hidden
            
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
    </>
  );
};

export default AdminHome;
