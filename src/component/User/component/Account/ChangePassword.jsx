import { Button, Form, Input } from 'antd';
import React from 'react'

const ChangePassword = () => {
  return (
    <div className="w-full max-w-lg mx-auto fade-in ">
      {/* Profile Picture Section */}

      <Form layout="vertical">
        <Form.Item
          label="Old Password"
          className="text-sm font-medium text-gray-400"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="New Password"
          className="text-sm font-medium text-gray-400"
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          className="text-sm font-medium text-gray-400"
        >
          <Input.Password />
        </Form.Item>
        <Button className="w-20 bg-[#ffb700] text-white font-medium hover:bg-[#e6a500] hover:text-black focus:outline-none">
          Save
        </Button>
      </Form>
    </div>
  );
}

export default ChangePassword