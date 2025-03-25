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
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from "chart.js";
// import { Line } from "react-chartjs-2";
// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );
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

// export const data = {
//   labels,
//   datasets: [
//     {
//       fill: true,
//       label: "Dataset 2",
//       data: labels.map(() => faker.number.int({ min: 0, max: 1000 })),
//       borderColor: "rgb(53, 162, 235)",
//       backgroundColor: "rgba(53, 162, 235, 0.5)",
//     },
//   ],
// };

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
      <Row>
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

      <div style={{ display: "flex", margin: 40 }}>
        <Row>
            <Col span={10}>
              <Typography.Text>Recent Orders</Typography.Text>
              <Table
                columns={column}
                dataSource={tableData}
                pagination={false}
              ></Table>
            </Col>
            <Col span={13} offset={1}>
              {/* <Line options={options} data={data} /> */}
            </Col>
         
        </Row>
      </div>
    </>
  );
};

export default AdminHome;
