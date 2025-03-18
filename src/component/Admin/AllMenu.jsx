import React, { useState } from 'react'
import {  Button, Space, Typography } from "antd";
import { Select, Table, Image } from "antd";
import Profile from "/src/assets/images/Profile-pic.jpg"
import { FileAddOutlined, SearchOutlined } from '@ant-design/icons';
import MenuModals from '../components/addMenuModals';

const { Title } = Typography;

const columns = [
  {
    title: "Image",
    dataIndex: "image",
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "name",
    align: "center",
  },
  {
    title: "Price",
    className: "column-money",
    dataIndex: "money",
    align: "center",
  },
  {
    title: "Status",
    dataIndex: "address",
    align: "center",
  },
  {
    title: "Change",
    dataIndex: "address",
    align: "center",
  },
];
const data = [
  {
    key: "1",
    image: <Image src={Profile} width={50}/>,
    name: "John Brown",
    money: "￥300,000.00",
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    money: "￥1,256,000.00",
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    money: "￥120,000.00",
    address: "Sydney No. 1 Lake Park",
  },
];
const AllMenu = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);


  const showModal = () =>{
    setIsModalOpen(true);
  };

  const handleOk = () =>{
    setIsModalOpen(false);
  }

  const handleCancel = () => {
    setIsModalOpen(false);
  }

  return (
    <div >
      <Title level={3}>ALl Menu List</Title>
      <div style={{ marginBottom: "20px" }}>
        <Space size={30}>
          <Select
            showSearch
            placeholder="Search by Category"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "Jack" },
              { value: "2", label: "Lucy" },
              { value: "3", label: "Tom" },
            ]}
          />
          <Select
            showSearch
            placeholder="Select Status"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={[
              { value: "1", label: "Active" },
              { value: "2", label: "Inactive" },
            ]}
          />
        </Space>
        <Space size="large" style={{ float: "right" }}>
          <Button
            type="primary"
            autoInsertSpace="true"
            icon={<FileAddOutlined />}
            iconPosition="end"
            onClick={showModal}
          >
            Add Menu
          </Button>
        </Space>
      </div>
      <MenuModals
        isOpen={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      />
      <Table
        columns={columns}
        dataSource={data}
        bordered
        title={() => "Category"}
      />
    </div>
  );
}

export default AllMenu