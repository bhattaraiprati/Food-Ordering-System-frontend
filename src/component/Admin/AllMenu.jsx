import React, { useContext, useEffect, useState } from 'react'
import {  Button, Descriptions, Modal, Space, Typography } from "antd";
import { Select, Table, Image } from "antd";
import ProfilePic from "/src/assets/images/ProfilePic.jpg"
import { DeleteOutlined, FileAddOutlined, SearchOutlined } from '@ant-design/icons';
import MenuModals from '../components/addMenuModals';
import { UserContext } from '../../Context/User.context';
import { DeleteMenu, getCategoryByName, getMenuItemById } from '../../utils/Admin.util';
import { useNavigate } from 'react-router';
import { FilePenLine } from 'lucide-react';
import { SuccesfulMessageToast } from '../../utils/Toastify.util';

const { Title } = Typography;

const AllMenu = () => {
  const {_rest} = useContext(UserContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [categoryNames, setCategoryNames] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
   const [isEditMode, setIsEditMode] = useState(false);
   const [currentRecord, setCurrentRecord] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);
    const [menuId , setMenuId] = useState(null)
     const [menuDetails, setMenuDetails] = useState(false);
     const [selectedMenu, setSelectedMenu] = useState(null);

     const items = selectedMenu ? [
           {
             key: "1",
             label: "Name",
             children: selectedMenu.name,
           },
           {
             key: "2",
             label: "Category",
             children: selectedMenu.category,
           },
           {
             key: "3",
             label: "Description",
             children: selectedMenu.description,
           },
           {
             key: "4",
             label: "Price",
             children: `$${selectedMenu.price}`,
           },
           {
             key: "5",
             label: "Preparation Time",
             children: `${selectedMenu.preparation_time} minutes`,
           },
           {
             key: "6",
             label: "Ingredients",
             children: selectedMenu.ingredients,
           },
           
         ]
       : [];
  const columns = [
    {
      title: "Image",

      render: (_, record) => (
        <img className="text-center h-16 " src={ProfilePic} />
      ),
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
      dataIndex: "price",
      align: "center",
    },
    {
      title: "Preparation Time",
      dataIndex: "preparation_time",
      align: "center",
    },
    {
      title: "Status",

      align: "center",
      render: (_, record) => (
        <Button onClick={() => handleMenuDetails(record)} type="primary">
          View
        </Button>
      ),
    },
    {
      title: "Action",
      align: "center",
      render: (_, record) => (
        <Space size="middle">
          <FilePenLine
            className="icon-button-admin"
            onClick={() => handleEditClick(record)}
          />
          <DeleteOutlined
            onClick={() => openDeleteModal(record)}
            className="icon-button-admin"
          />
        </Space>
      ),
    },
  ];

 const handleMenuDetails = (record) => {
   setSelectedMenu(record);
   setMenuDetails(true);
 };

 const handleCancelModal = () => {
   setMenuDetails(false);
   setSelectedMenu(null);
 };

  const openDeleteModal = (record) => {
    setMenuId(record.id);
    setDeleteModal(true);
  };

  const handleCategoryDelete = () => {
    DeleteMenu(menuId).then(function (response) {
      navigate("");
      SuccesfulMessageToast("Category Deleted Successfully");
    });
    setDeleteModal(false);
    setMenuId(null);
  };

  const handleEditClick = (record) => {
    setCurrentRecord(record);
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setDeleteModal(false);
  };

 const handleAddClick = () => {
   setIsEditMode(false);
   setCurrentRecord(null);
   setIsModalOpen(true);
 };



  const handleCancel = () => {
    setIsModalOpen(false);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const names = await getCategoryByName();
        setCategoryNames(names);

        const allMenuItems = await Promise.all(
          names.map(async (category) => {
            const response = await getMenuItemById(_rest.id, category);

            return { category, items: response }; // Store category along with items
          })
        );
        setMenuItems(allMenuItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [_rest.id]);

  return (
    <div>
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
            onClick={handleAddClick}
          >
            Add Menu
          </Button>
        </Space>
      </div>
      <MenuModals
        isOpen={isModalOpen}
        onCancel={handleCancel}
        editData={currentRecord}
        isEditMode={isEditMode}
      />
      <div>
        {menuItems.map(({ category, items }) => (
          <div key={category} className="mt-2">
            <p className="text-lg font-medium px-5 py-2  bg-[#fff]">
              {category}
            </p>
            <Table
              columns={columns}
              dataSource={items}
              bordered
              pagination={false}
            />
          </div>
        ))}
      </div>

      <Modal
        title="Are you sure want to delete"
        open={deleteModal}
        onOk={handleCategoryDelete}
        onCancel={handleDeleteCancel}
      >
        <p>Data will delete Permanently</p>
      </Modal>

      <Modal
        title="Menu Details"
        open={menuDetails}
        footer={[
          <Button key="back" onClick={handleCancelModal}>
            Close
          </Button>,
        ]}
      >
        <Descriptions
          items={items}
          column={1}
          bordered
        />
      </Modal>
    </div>
  );
}

export default AllMenu