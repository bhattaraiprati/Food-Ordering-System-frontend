import React, { useEffect, useState } from 'react'
import { Button, Col, Input, Modal, Row, Select, Space, Table, } from "antd";
import DetailsCards from '../../components/DetailsCards';
import { InfoCircleOutlined, ShoppingCartOutlined, UserOutlined } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import { updateRestaurant } from '../../../utils/Admin.util';
import { useNavigate } from 'react-router';
import { ErrorMessageToast, SuccesfulMessageToast } from '../../../utils/Toastify.util';
import { ClockAlert } from 'lucide-react';
import { getRestaurantPendingStatus, UpdateRestauarntStatus } from '../../../utils/AdminPy.util';
import type { TableProps } from "antd/es/table";

interface RestaurantData {
  id: number;
  restaurant_name: string;
  location: string;
  email: string;
  owner_name: string;
}

const SuperAdminHome: React.FC = () => {
    const navigate = useNavigate();
    const [restaurantId, setRestaurantId] = useState<number | null>(null);
      const [restaurantDetails, setRestaurantDetails] = useState<
        RestaurantData[] 
      >();
      const [modalShow, setModalShow] = useState<boolean>(false)
      const [declineModal, setDeclineModal] = useState<boolean>(false);


   
      const handleRequestApprove = (record:RestaurantData):void => {
        setRestaurantId(record.id);
        setModalShow(true);
      };

      const handleDeclineRequest = (record:RestaurantData):void => {
        setRestaurantId(record.id);
        setDeclineModal(true);
      };

      const handlerequestDecline =()=>{
        setModalShow(false);
        setDeclineModal(false);

      }


    const columns: TableProps<RestaurantData>["columns"] = [
      {
        title: "ID",
        dataIndex: "id",
        align: "center",
      },
      {
        title: "Restaurant Name",
        dataIndex: "restaurant_name",
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
        dataIndex: "owner_name",
        align: "center",
      },
      {
        title: "Action",
        key: "action",
        align: "center",
        render: (_: unknown, record: RestaurantData) => (
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

    const handleApprove = () =>{
        console.log("printing the id" ,restaurantId);

        if (restaurantId === null) return; 

        const status = "approved";
       UpdateRestauarntStatus(restaurantId, {status})
         .then(() => {
           navigate("");
           window.location.reload();
           SuccesfulMessageToast("Approved");
         })
         .catch((error) => {
           console.error("Failed to approve:", error);
           ErrorMessageToast("Approval failed!");
         });
         setModalShow(false);
    }

    const handleDecline = ()=>{
        if (restaurantId === null) return;
        const status = "blocked"
       UpdateRestauarntStatus(restaurantId, {status} )
         .then(() => {
           navigate("");
           window.location.reload();
           SuccesfulMessageToast("blocked");
         })
         .catch((error) => {
           console.error("Failed to approve:", error);
           ErrorMessageToast("Approval failed!");
         });
         setDeclineModal(false);
    }

     useEffect(() => {
       getRestaurantPendingStatus().then((response) => {
         setRestaurantDetails(response);
       });
     },[]);

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

        <Table columns={columns} dataSource={restaurantDetails} bordered />
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