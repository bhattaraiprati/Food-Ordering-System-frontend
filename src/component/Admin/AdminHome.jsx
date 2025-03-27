import React from "react";
import { Col, Row, Space, Table, Typography } from "antd";
import { Card, Statistic } from "antd";
// import { faker } from "@faker-js/faker";
import {
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import DetailsCards from "../components/DetailsCards";
import Title from "antd/es/typography/Title";

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

const labels = ["January", "February", "March", "April", "May", "June", "July"];


const AdminHome = () => {
  const column = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Quantity",
      dataIndex: "quantity",
    },
    {
      title: "Total Price",
      dataIndex: "total_price",
    },
    {
      title: "Status",
      dataIndex: "status",
    },
  ];

  const tableData = [
    {
      name: "Pratik Bhattarai",
      quantity: 20,
      total_price: 200,
      status: "Pending",
    },
    {
      name: "Pratik Aryal",
      quantity: 20,
      total_price: 200,
      status: "Pending",
    },
    {
      name: "Pratik Aryal",
      quantity: 20,
      total_price: 200,
      status: "Pending",
    },
    {
      name: "Pratik Aryal",
      quantity: 20,
      total_price: 200,
      status: "Pending",
    },
    {
      name: "Pratik Aryal",
      quantity: 20,
      total_price: 200,
      status: "Pending",
    },
  ];
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
              title="Cards Details"
              value="12334 "
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
              title="Cards Details"
              value="9474"
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
              title="Cards Details"
              value="3474"
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
              title="Cards Details"
              value="2874"
            />
          </Col>
        </div>
      </Row>

      <div style={{  margin: 40 }}>
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

          <Table columns={column} dataSource={tableData} bordered />
        </div>
      </div>
    </>
  );
};

export default AdminHome;
