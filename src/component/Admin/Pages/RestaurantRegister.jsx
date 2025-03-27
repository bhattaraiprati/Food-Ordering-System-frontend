import { Button, Form, Input } from 'antd';
import React from 'react'
import { restaurantRegister } from '../../../utils/Admin.util';
import { useNavigate } from 'react-router';
import { SuccesfulMessageToast } from '../../../utils/Toastify.util';

const RestaurantRegister = () => {
    const navigate = useNavigate();

    const handleFormSubmit = (values) =>{

        console.log("values is " , values);

        restaurantRegister(values).then(function(response){
            navigate("/");
            SuccesfulMessageToast("Successfully Register Wait for Approval");
        })
    }

    const validatePassword = (_, value) => {
      if (!value) return Promise.reject("Password is required!");
      if (value.length < 6)
        return Promise.reject("Password must be at least 6 characters!");
      if (!/[A-Z]/.test(value))
        return Promise.reject(
          "Password must contain at least one uppercase letter!"
        );
      if (!/[0-9]/.test(value))
        return Promise.reject("Password must contain at least one number!");
      return Promise.resolve();
    };

  return (
    <div className="mt-24 w-full text-center">
      <div className="p-10 mx-32  ">
        <div className="text-center">
          <p className="text-gray-800 text-3xl font-bold ">
            Register Your Restaurant Here
          </p>
        </div>

        <div className=" mx-32 my-5 w-lg bg-[#fff] px-10 py-5">
          <p className="text-gray-800 text-lg font-bold mb-4">Register</p>

          <Form
            layout="vertical"
            onFinish={handleFormSubmit}
            initialValues={{ role: "restaurant", status: "pending" }}
          >
            <Form.Item name="role" label="Role" hidden>
              <Input />
            </Form.Item>
            <Form.Item name="status" hidden>
              <Input />
            </Form.Item>
            <Form.Item
              name="restaurantName"
              label="Restaurant Name"
              className="large-label-form-item"
              rules={[
                { required: true, message: "Restaurant Name is required!" },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="location"
              label="Location Address"
              className="large-label-form-item"
              rules={[
                { required: true, message: "Location Address is required!" },
              ]}
            >
              <Input />
            </Form.Item>
            <div className="flex">
              <Form.Item
                name="email"
                label="Email"
                className="large-label-form-item"
                style={{
                  width: "calc(50% - 8px)",
                }}
                rules={[
                  { required: true, message: "Email is required!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="full_name"
                label="Full Name"
                className="large-label-form-item"
                style={{
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
                rules={[{ required: true, message: "Name is required!" }]}
              >
                <Input />
              </Form.Item>
            </div>
            <Form.Item
              label="Password"
              name="password"
              className="large-label-form-item"
              rules={[{ validator: validatePassword }]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                className="button-primary"
                htmlType="submit"
                style={{ width: "20vh" }}
              >
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default RestaurantRegister;