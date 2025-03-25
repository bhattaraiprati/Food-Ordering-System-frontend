import React, { useEffect, useState } from "react";
import { Button, Space, DatePicker, Typography, Input, Modal, Tag, Card, Menu, Form } from "antd";
import { Select, Table } from "antd";
// import '/src/assets/css/Order.css';
import OrderViewDetails from "../../components/OrderViewDetails";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { FilePenLine } from "lucide-react";
import TextArea from "antd/es/input/TextArea";
import { addCategories, deleteCategory, editCategory, viewCategories } from "../../../utils/Admin.util";
import { Await, useNavigate } from "react-router";
import { ErrorMessageToast, SuccesfulMessageToast } from "../../../utils/Toastify.util";

const { Search } = Input;
const { Title } = Typography;

 const Tabletittle = () => {
   return (
     <div className="top-filter mt-3 p-2">
       <Title level={3}>Categories List</Title>
       <div className="filter-option" style={{ marginBottom: "20px" }}>
         <Space size={20}>
           <Search
             className="border-1"
             placeholder="Search Categories"
             //   onSearch={onSearch}
             style={{
               width: 300,
               border: "1px solid #918e8e",
               borderRadius: "7px",
             }}
           />
         </Space>
       </div>
     </div>
   );
 };




const CategoriesPage = () => {
    const navigate = useNavigate();
    const [ViewCategoryModal, setViewCategoryModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [addCategoriesModal, setAddCategories] = useState([])
    const [form] = Form.useForm();
    const [categoryId, setcategoryId] = useState(null);

    const handleEditClick = (record) =>{
        setcategoryId(record.id);
        setViewCategoryModal(true);

        form.setFieldsValue({
          name: record.name,
          description: record.description,
        });
        
    }
    const handleCategoryDelete = ()=>{
        deleteCategory(categoryId).then(function(response){
            navigate("");
            SuccesfulMessageToast("Category Deleted Successfully");
        })
        setDeleteModal(false);
        setcategoryId(null);
        

    }

    const openDeleteModal =(record)=>{
        setcategoryId(record.id);
        setDeleteModal(true);
    }

    const handleOk = (values, id) => {
        console.log("printing the id ", id)
      if(!categoryId){
        addCategories(values)
          .then(function (response) {
            navigate("");
            SuccesfulMessageToast("Category added Successfully");
          })
          .catch(function (error) {
            console.log(error);
            ErrorMessageToast("Failed to add");
          });
      }
      else{
            editCategory(categoryId, values).then(function(response){
                navigate("");
            SuccesfulMessageToast("Category Update Successfully");

            })
      }

      setViewCategoryModal(false);
      setcategoryId(null);
      form.resetFields();
    };

    const handleCategoryCancel = () => {
      setViewCategoryModal(false);
    };

    const handleDeleteCancel = ()=>{
        setDeleteModal(false);
    }

    const columns = [
      {
        title: "Categorie Name",
        dataIndex: "name",
        align: "center",
      },
      {
        title: "Product",
        dataIndex: "product",
        align: "center",
      },

      {
        title: "Description",
        dataIndex: "description",
        align: "",
      },
      {
        title: "Action",
        key: "action",
        align: "center",
        render: (_, record) => (
          <Space size="middle">
            <FilePenLine className="icon-button-admin" onClick={()=>handleEditClick(record)} />
            <DeleteOutlined onClick={()=>openDeleteModal(record)} className="icon-button-admin" />
          </Space>
        ),
      },
    ];

    const handleAddcategories = () =>{
        setViewCategoryModal(true);
    }

useEffect(()=>{
    viewCategories().then((response)=>{
        setAddCategories(response);
    })
})

  return (
    <>
      <Card
        className="mt-8 rounded-10 shadow-lg"
        type="inner"
        title={<Tabletittle />}
        extra={
          <Button className="button-primary" onClick={handleAddcategories}>
            Add Categorie
          </Button>
        }
      >
        <div className="bg-[#fff]">
          <Table columns={columns} dataSource={addCategoriesModal} bordered />
        </div>
      </Card>

      <Modal title="Add New Category" open={ViewCategoryModal} footer={""}>
        <Form form={form} layout="vertical" onFinish={handleOk}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input category name!" }]}
          >
            <Input className="border-2" />
          </Form.Item>
          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: "Please input description!" }]}
          >
            <TextArea
              rows={4}
              placeholder="Enter description in short"
              maxLength={80}
            />
          </Form.Item>
          <div className="flex flex-row-reverse gap-x-6">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
            <Form.Item>
              <Button onClick={handleCategoryCancel}>Cancel</Button>
            </Form.Item>
          </div>
        </Form>
      </Modal>

      <Modal
        title="Are you sure wnat to delete"
        open={deleteModal}
        onOk={handleCategoryDelete}
        onCancel={handleDeleteCancel}
      >
        <p>Data will delete Permanently</p>
      </Modal>
    </>
  );
};

export default CategoriesPage;
