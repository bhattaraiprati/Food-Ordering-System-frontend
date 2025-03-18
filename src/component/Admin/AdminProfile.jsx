import { Button, Divider, Dropdown, Form, Image, Input, Rate, Space, Switch, Table, Tabs, TimePicker } from "antd";
import React, { useState } from "react";
import '/src/assets/css/AdminProfile.css';
import { Typography } from "antd";
import { CheckOutlined, CloseOutlined, SettingOutlined, StarOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
import {  message, Steps, theme } from "antd";
import { DatePicker } from "antd";
// const { RangePicker } = DatePicker;
const { RangePicker } = TimePicker;



const GeneralInformationModal = () =>{
  return (
    <div className="profile-outer-box">
      <div className="image-profile-box">
        <div>
          <Image
            width={200}
            className="profile-img"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Title level={4}>Restaurant Name</Title>
          <Space size={100}>
            <span>
              <StarOutlined style={{ color: "#FADB14", fontSize: "25px" }} />
              278
            </span>
            <span>
              <StarOutlined style={{ color: "#FADB14", fontSize: "25px" }} />
              278
            </span>
          </Space>
        </div>
      </div>
      <div className="details-box">
        <Title level={5}> Full Name</Title>
        <p>Restaurant Name</p>
        <Divider plain className="divider"></Divider>
        <Title level={5}> Email</Title>
        <p>restaurant@gmail.com</p>
        <Divider plain className="divider"></Divider>
        <Title level={5}>Phone Number</Title>
        <p>9840237777</p>
        <Divider plain className="divider"></Divider>
        <Title level={5}>Address</Title>
        <p>Imadol-5, lalitpur</p>
        <Divider plain className="divider"></Divider>
      </div>
    </div>
  );
}

const ChangePasswordPage = () =>{
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="changePassword-outer">
      <div className="changePassword-inner">
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 20,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <Form.Item
            label="Old Password"
            name="old_password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter your Current Password" />
          </Form.Item>
          <Form.Item
            label="New Password"
            name="new_password"
            rules={[
              {
                required: true,
                message: "Please input your New password!",
              },
            ]}
          >
            <Input.Password placeholder="Enter New Password" />
          </Form.Item>
          <Form.Item
            label="Confirm Password"
            name="confirm_password"
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 20,
            }}
            rules={[
              {
                required: true,
                message: "Please Confirm password!",
              },
            ]}
          >
            <Input.Password placeholder="Confirm Your Password" />
          </Form.Item>
          <Form.Item label={null}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

const KycFirstSteps = () => {
  return (
    <div className="kycForm-outer">
      <div className="kycFirstStep">
        <Form layout="vertical">
          <Form.Item label="Restaurant Name">
            <Input />
          </Form.Item>

          <Form.Item
            layout="inline"
            style={{
              marginBottom: 0,
            }}
          >
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Restaurant Type"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input Price of Item" />
              </Form.Item>
              <Form.Item
                label="Cuisine Type"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Enter" />
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item label="Email Address">
            <Input />
          </Form.Item>
          <Form.Item
            layout="inline"
            style={{
              marginBottom: 0,
            }}
          >
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Contact Number"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input Price of Item" />
              </Form.Item>
              <Form.Item
                label="Address"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Enter" />
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item
            layout="inline"
            style={{
              marginBottom: 0,
            }}
          >
            <div style={{ display: "flex" }}>
              <Form.Item
                label="State/Region"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input Price of Item" />
              </Form.Item>
              <Form.Item
                label="City"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Enter" />
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item
            layout="inline"
            style={{
              marginBottom: 0,
            }}
          >
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Country"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                }}
              >
                <Input placeholder="Input Price of Item" />
              </Form.Item>
              <Form.Item
                label="Postal Code"
                layout="vertical"
                style={{
                  width: "calc(50% - 8px)",
                  margin: "0 8px",
                }}
              >
                <Input placeholder="Enter" />
              </Form.Item>
            </div>
          </Form.Item>
          <Form.Item label="Website URL">
            <Input />
          </Form.Item>
          <Form.Item label="Social Media Links">
            <Input />
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const KycSecondSteps = () => {
  const [timeData, setTimeData] = useState({});
  const [closedDays, setClosedDays] = useState({}); // Track closed days

  // Handle time change for TimePicker
  const handleTimeChange = (key, field, time) => {
    setTimeData((prev) => ({
      ...prev,
      [key]: { ...prev[key], [field]: time },
    }));
  };

  // Toggle closed/open state for a day
  const toggleDayStatus = (key) => {
    setClosedDays((prev) => ({
      ...prev,
      [key]: !prev[key], // Toggle between true (closed) and false (open)
    }));
  };

  // Render TimePicker with disabled state if the day is closed
  const renderTimePicker = (key, field) => (
    <TimePicker
      format="h:mm A"
      use12Hours
      disabled={closedDays[key]} // Disable if the day is closed
      onChange={(time) => handleTimeChange(key, field, time)}
    />
  );

  // Render Button with dynamic text and click handler
  const renderToggleButton = (key) => (
    <Button
      type="primary"
      danger={closedDays[key]} // Red if closed, default if open
      onClick={() => toggleDayStatus(key)}
    >
      {closedDays[key] ? "Open" : "Closed"} 
    </Button>
  );

  // Table columns
  const columns = [
    { title: "Day", dataIndex: "day", align: "center" },
    { title: "Open Time", dataIndex: "open_time", align: "center" },
    { title: "Close Time", dataIndex: "close_time", align: "center" },
    { title: "Action", dataIndex: "action", align: "center" },
  ];

  // Days of the week
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Generate table data
  const data = daysOfWeek.map((day, index) => {
    const key = index + 1;
    return {
      key,
      day,
      open_time: renderTimePicker(key, "open_time"),
      close_time: renderTimePicker(key, "close_time"),
      action: renderToggleButton(key),
    };
  });

  return (
    <div className="kycForm-outer">
      <div className="kycFirstStep">
        <Form layout="vertical">
          <Title level={5}>Operation Detail</Title>
          <Table pagination={false} columns={columns} dataSource={data} />
          <Divider />
          <div className="operation-available-box">
            <div className="toggle-row">
              <div className="pickup-div">
                <Space size={20}>
                  <Title level={5}>Delivery Available</Title>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked={false}
                  />
                </Space>
              </div>
              <div className="pickup-div">
                <Space size={20}>
                  <Title level={5}>Pickup Availability</Title>
                  <Switch
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    defaultChecked={false}
                  />
                </Space>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};


const KycVerificationForm = () => {
   const [current, setCurrent] = useState(0);

  const steps = [
    {
      title: "Basic Information",
      content: <KycFirstSteps />,
    },
    {
      title: "Operation Details",
      content: <KycSecondSteps/>,
    },
    {
      title: "Last",
      content: "Last-content",
    },
    {
      title: "Final",
      content: "Final-content",
    },
  ];
   const next = () => {
     setCurrent(current + 1);
   };

   const prev = () => {
     setCurrent(current - 1);
   };

   const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="kycForm-outer">
      <div className="kycVerification-inner">
        <Steps current={current} items={items} />
        <div >{steps[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

const AdminProfile = () => {
  const items = [
    {
      key: "1",
      label: "General",
      children: <GeneralInformationModal />,
    },
    {
      key: "2",
      label: "KYC",
      children: <KycVerificationForm/>,
    },
    {
      key: "3",
      label: "Change Password",
      children: <ChangePasswordPage />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div>
      <Title level={4}> <SettingOutlined/> Setting</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default AdminProfile;
