import { UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  Modal,
  Select,
  Upload,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import Item from "antd/es/list/Item";
import React, { useEffect, useState } from "react";
import { viewCategories } from "../../utils/Admin.util";

const addMenuModals = ({ isOpen, onOk, onCancel }) => {
  const [categoryNames , setCategoryNames] = useState([]);

  const onChecked = () => {
    console.log("check the button");
  };

  useEffect(()=>{
    viewCategories().then(function(response){
      setCategoryNames(response);

    })
  })

  const categoryOptions = categoryNames.map(category=>({
    value: category.id,
    label: category.name 
  }));

  return (
    <Modal
      title="Add Menu "
      style={{
        top: 90,
      }}
      open={isOpen}
      onOk={onOk}
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
      <Form layout="vertical">
        <Form.Item label="Name" >
          <Input />
        </Form.Item>

        <Form.Item label="Category" >
          <Select
            showSearch
            placeholder="Select Category"
            filterOption={(input, option) =>
              (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
            }
            options={categoryOptions}
          />
        </Form.Item>

        <Form.Item label="Description" >
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
              layout="vertical"
              style={{
                width: "calc(50% - 8px)",
              }}
            >
              <Input placeholder="Input Price of Item" />
            </Form.Item>
            <Form.Item
              label="Preparation Time(Minutes)"
              layout="vertical"
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
        <Form.Item label="Ingredients" layout="vertical">
          <TextArea
            rows={3}
            placeholder="Enter Ingredients Seperate by Commas"
          />
        </Form.Item>
        {/* <Form.Item label="Size Options" layout="vertical">
        <Checkbox onChange={onChecked}>Small</Checkbox>
        <Input style={{ width: "80px" }} />
        <Item style={{ marginTop: "10px" }}>
          <Checkbox onChange={onChecked}>Medium</Checkbox>
          <Input style={{ width: "80px" }} />
        </Item>
        <Item style={{ marginTop: "10px" }}>
          <Checkbox onChange={onChecked}>Large</Checkbox>
          <Input style={{ width: "80px" }} />
        </Item>
      </Form.Item>
      <Form.Item label="Tags" layout="vertical">
        <Select
          showSearch
          placeholder="Select One"
          filterOption={(input, option) =>
            (option?.label ?? "").toLowerCase().includes(input.toLowerCase())
          }
          options={[
            { value: "0", Select, label: "Select One" },
            { value: "1", label: "Jack" },
            { value: "2", label: "Lucy" },
            { value: "3", label: "Tom" },
          ]}
        />
      </Form.Item> */}
      </Form>
    </Modal>
  );
};

export default addMenuModals;
