import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Modal, Row, Select, Space, Table, Typography } from "antd";
import DetailsCards from '../../components/DetailsCards';
import { InfoCircleOutlined, ShoppingCartOutlined, ShoppingOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { getRestaurantByStatus, getRestaurantDetails, updateRestaurant } from '../../../utils/Admin.util';
import { useNavigate } from 'react-router';
import { ErrorMessageToast, SuccesfulMessageToast } from '../../../utils/Toastify.util';
import { ClockAlert } from 'lucide-react';



const SuperAdminHome = () => {
    const navigate = useNavigate();
    const [restaurantId, setRestaurantId] = useState(null);
      const [restaurantDetaiis, setRestaurantDetails] = useState(null);
      const [modalShow, setModalShow] = useState(false)
      const [declineModal, setDeclineModal] = useState(false);



      const handleRequestApprove = (record)=>{
        setRestaurantId(record.id);
        setModalShow(true);
      }

      const handleDeclineRequest = (record) => {
        setRestaurantId(record.id);
        setDeclineModal(true);
      };

      const handlerequestDecline =()=>{
        setModalShow(false);
        setDeclineModal(false);

      }


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
        title: "Action",
        key: "action",
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

    const handleApprove = ()=>{
        const status = "approved"
       updateRestaurant(restaurantId, { status }) 
         .then(() => {
           navigate("");
           SuccesfulMessageToast("Approved");
         })
         .catch((error) => {
           console.error("Failed to approve:", error);
           ErrorMessageToast("Approval failed!");
         });
         setModalShow(false);
    }

    const handleDecline = ()=>{
        const status = "decline"
       updateRestaurant(restaurantId, { status }) 
         .then(() => {
           navigate("");
           SuccesfulMessageToast("decline");
         })
         .catch((error) => {
           console.error("Failed to approve:", error);
           ErrorMessageToast("Approval failed!");
         });
         setDeclineModal(false);
    }

     useEffect(() => {
       getRestaurantByStatus().then((response) => {
         setRestaurantDetails(response);
       });
     });

  return (
    <div className="mt-5">
      <Row>
        <div style={{ display: "flex", overflowX: "auto", width: "100%" }}>
          <Col offset={1}>
            <DetailsCards
              icon={
                <span
                  className=" flex justify-center"
                  style={{
                    backgroundColor: "rgba(0, 255, 0, 0.25)",

                    padding: "7px",
                    borderRadius: "30px",
                    alignItems: "center",
                  }}
                >
                  <ClockAlert
                    style={{
                      color: "green",
                      height: "28px",
                      width: "28px",
                    }}
                  />
                </span>
              }
              title="Pending Request"
              value="2"
            />
          </Col>
          <Col offset={1}>
            <DetailsCards
              icon={
                <InfoCircleOutlined 
                  style={{
                    color: "red",
                    background: "rgba(255,0,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                  }}
                />
              }
              title="Decline Request"
              value="2874"
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
              title="Total Users"
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
              title="Total Restaurant"
              value="9474"
            />
          </Col>
        </div>
      </Row>
      <div>
        <div className="top-filter mt-10">
          <Title level={3}>Pending Restaurant Request</Title>
          {/* <div className="filter-option" style={{ marginBottom: "20px" }}>
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
                style={{
                  width: "20vh",
                }}
                options={[
                  { value: "1", label: "Pending" },
                  { value: "2", label: "Verified" },
                  { value: "3", label: "Decline" },
                ]}
              />

              <Input placeholder="Search" />
              <Space>
                <Button type="primary">Search</Button>
              </Space>
            </Space>
          </div> */}
        </div>

        <Table columns={columns} dataSource={restaurantDetaiis} bordered />
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
    </div>
  );
}

export default SuperAdminHome