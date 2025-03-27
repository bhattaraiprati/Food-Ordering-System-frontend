import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useContext, useEffect, useState } from "react";
import { addMenuItem, UpdateMenu, viewCategories } from "../../utils/Admin.util";
import { useNavigate } from "react-router";
import { SuccesfulMessageToast } from "../../utils/Toastify.util";
import { UserContext } from "../../Context/User.context";

const addMenuModals = ({ isOpen, onCancel, editData, isEditMode }) => {
   const [form] = Form.useForm();
  const navigate = useNavigate();
  const [categoryNames, setCategoryNames] = useState([]);

  const { _rest } = useContext(UserContext);

  useEffect(() => {
    viewCategories().then(function (response) {
      setCategoryNames(response);
    });
  }, []);

  useEffect(() => {
    if (isOpen) {
      if (isEditMode && editData) {
        form.setFieldsValue(editData);
      } else {
        form.resetFields();
        form.setFieldsValue({ restaurantId: _rest.id });
      }
    }
  }, [isOpen, isEditMode, editData, form, _rest.id]);


  const categoryOptions = categoryNames.map((category) => ({
    value: category.name,
    label: category.name,
  }));

  const handleSubmit = (values) => {
    if (isEditMode) {
      UpdateMenu(values,  editData.id ).then(function (response) {
        navigate("");
        SuccesfulMessageToast("Item Updated Successfully");
        onCancel();
      });
    } else {
      addMenuItem(values).then(function (response) {
        navigate("");
        SuccesfulMessageToast("Item Added Successfully");
        onCancel();
      });
    }
  };

  return (
    <Modal
      title={isEditMode ? "Edit Menu Item" : "Add Menu Item"}
      style={{
        top: 90,
      }}
      open={isOpen}
      footer={null}
      onCancel={onCancel}
      width={{
        xs: "90%",
        sm: "80%",
        md: "90%",
        lg: "60%",
        xl: "50%",
        xxl: "40%",
      }}
    >
      <Form
        form={form}
        layout="vertical"
        initialValues={{ restaurantId: _rest.id }}
        // onFinish={handleMenuModal}
        onFinish={handleSubmit}
      >
        <Form.Item name="restaurantId" hidden>
          <Input />
        </Form.Item>
        <Form.Item
          label="Name"
          name="name"
          rules={[{ required: true, message: "Please input the name!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please select a category!" }]}
        >
          <Select
            showSearch
            placeholder="Select Category"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={categoryOptions}
          />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={3} placeholder="Enter a brief description" />
        </Form.Item>

        <Form.Item
          layout="inline"
          style={{
            marginBottom: 0,
          }}
        >
          <div style={{ display: "flex" }}>
            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: "Please input the price!" }]}
              style={{
                width: "calc(50% - 8px)",
              }}
            >
              <Input placeholder="Input Price of Item" />
            </Form.Item>
            <Form.Item
              label="Preparation Time(Minutes)"
              name="preparation_time"
              rules={[
                { required: true, message: "Please input preparation time!" },
              ]}
              style={{
                width: "calc(50% - 8px)",
                margin: "0 8px",
              }}
            >
              <Input placeholder="Input Time in Minutes" />
            </Form.Item>
          </div>
        </Form.Item>
        <Form.Item label="Upload Images" layout="vertical">
          <Upload
            action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
            listType="picture"
          >
            <Button type="primary" icon={<UploadOutlined />}>
              Click Here to Upload
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item label="Ingredients" name="ingredients" layout="vertical">
          <TextArea
            rows={3}
            placeholder="Enter Ingredients Seperate by Commas"
          />
        </Form.Item>

        <div className="flex flex-row-reverse gap-x-6">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {isEditMode ? "Update" : "Submit"}
            </Button>
          </Form.Item>
          <Form.Item>
            <Button onClick={onCancel}>Cancel</Button>
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
};

export default addMenuModals;
