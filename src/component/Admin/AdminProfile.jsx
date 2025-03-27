import { Button, Divider, Dropdown, Form, Image, Input, Select, Space, Switch, Table, Tabs, TimePicker } from "antd";
import React, { useState, useRef, useContext, useEffect } from "react";
import { Typography } from "antd";
import {  CheckOutlined, ClockCircleOutlined, CloseOutlined, SettingOutlined, StarOutlined } from "@ant-design/icons";
const { Title } = Typography;
import {  message, Steps } from "antd";
import { getKycDetails, KycFormPost } from "../../utils/Admin.util";
import {  useNavigate } from "react-router";
import { SuccesfulMessageToast } from "../../utils/Toastify.util";
import dayjs from "dayjs";
import {
  Mail,
  MapPin,
  Phone,
  Store,
} from "lucide-react";
import TextArea from "antd/es/input/TextArea";
import { UserContext } from "../../Context/User.context";
import KycDetailsPage from "./Pages/KycDetailsPage";



const GeneralInformationModal = ({kycData }) => {
  return (
    <div className="profile-outer-box ml-5 flex">
      <div className="image-profile-box">
        <div>
          <Image
            width={200}
            className="profile-img rounded-2xl"
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
          <Title level={4}>{kycData?.restaurant_name}</Title>
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
      <div className="details-box ml-10 px-10 bg-[#fff] text-center shadow-lg w-full ">
        <Title level={5}> Full Name</Title>
        <p>{kycData?.restaurant_name}</p>
        <Divider plain className="divider"></Divider>
        <Title level={5}> Email</Title>
        <p>{kycData?.email}</p>
        <Divider plain className="divider"></Divider>
        <Title level={5}>Phone Number</Title>
        <p>{kycData?.business_number}</p>
        <Divider plain className="divider"></Divider>
        <Title level={5}>Address</Title>
        <p>{kycData?.address}</p>
        <Divider plain className="divider"></Divider>
      </div>
    </div>
  );
};

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

const requiredRule = { required: true, message: "This field is required" };
const emailRule = { type: "email", message: "Please enter a valid email" };
const phoneRule = { pattern: /^[0-9]+$/, message: "Please enter numbers only" };

const KycFirstSteps = ({ formData, setFormData, form }) => {
  const handleChange = (value) => {
    form.setFieldsValue({ cuisine_type: value });
    setFormData((prev) => ({ ...prev, cuisine_type: value }));
  };

  return (
    <div className="kycForm-outer my-7 px-10 pb-1 bg-[#fff] shadow-xl">
      <div className="flex">
        <Store color="#ffb700" />
        <p className="text-xl ml-2 font-bold text-[#ffb700]">
          Restaurant Information
        </p>
      </div>
      <div className="kycFirstStep mt-5">
        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(_, allValues) =>
            setFormData((prev) => ({ ...prev, ...allValues }))
          }
          className="mb-12"
        >
          <Form.Item
            name="restaurantId"
            hidden
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Restaurant Name"
            name="restaurant_name"
            rules={[requiredRule]}
          >
            <Input />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Business Registration Number"
                name="business_number"
                style={{ width: "calc(50% - 8px)" }}
                rules={[requiredRule]}
              >
                <Input placeholder="Enter registration number" />
              </Form.Item>
              <Form.Item
                label="Cuisine Type"
                name="cuisine_type"
                style={{ width: "calc(50% - 8px)", margin: "0 8px" }}
                rules={[requiredRule]}
              >
                <Select
                  placeholder="Select cuisine type"
                  onChange={handleChange}
                  options={[
                    { value: "nepali", label: "Nepali" },
                    { value: "indian", label: "Indian" },
                    // ... other options
                  ]}
                />
              </Form.Item>
            </div>
          </Form.Item>

          <Form.Item
            label="Restaurant Description"
            name="description"
            rules={[requiredRule]}
          >
            <TextArea rows={4} placeholder="Briefly describe your restaurant" />
          </Form.Item>

          <div className="flex mb-5">
            <Mail />
            <p className="text-lg ml-2 font-bold">
              Primary Contact Information
            </p>
          </div>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[requiredRule, emailRule]}
          >
            <Input type="email" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Contact Name"
                name="contact_name"
                style={{ width: "calc(50% - 8px)" }}
                rules={[requiredRule]}
              >
                <Input placeholder="Enter full name" />
              </Form.Item>
              <Form.Item
                label="Contact Phone"
                name="phone"
                style={{ width: "calc(50% - 8px)", margin: "0 8px" }}
                rules={[requiredRule, phoneRule]}
              >
                <Input placeholder="Enter phone number" />
              </Form.Item>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const KycSecondSteps = ({ formData, setFormData, form }) => {
  // const handleGetLocation = () => {
  //   if (navigator.geolocation) {
  //     message.info("Detecting your location...");
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         form.setFieldsValue({
  //           latitude: position.coords.latitude.toString(),
  //           longitude: position.coords.longitude.toString(),
  //         });
  //         message.success("Location detected successfully!");
  //       },
  //       (error) => {
  //         console.error("Error getting location:", error);
  //         message.error("Failed to detect location. Please enter manually.");
  //       }
  //     );
  //   } else {
  //     message.error("Geolocation is not supported by your browser.");
  //   }
  // };

  return (
    <div className="kycForm-outer my-7 px-10 pb-1 bg-[#fff] shadow-xl">
      <div className="flex">
        <MapPin color="#ffb700" />
        <p className="text-xl ml-2 font-bold text-[#ffb700]">
          Location Details
        </p>
      </div>
      <div className="kycFirstStep mt-5">
        <Form
          form={form}
          layout="vertical"
          initialValues={formData}
          onValuesChange={(_, allValues) =>
            setFormData((prev) => ({ ...prev, ...allValues }))
          }
          className="mb-12"
        >
          <Form.Item label="Full Address" name="address" rules={[requiredRule]}>
            <TextArea rows={3} placeholder="Enter full address" />
          </Form.Item>

          <Form.Item style={{ marginBottom: 0 }}>
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Latitude"
                name="latitude"
                style={{ width: "calc(50% - 8px)" }}
                rules={[requiredRule]}
              >
                <Input placeholder="Enter latitude" />
              </Form.Item>
              <Form.Item
                label="Longitude"
                name="longitude"
                style={{ width: "calc(50% - 8px)", margin: "0 8px" }}
                rules={[requiredRule]}
              >
                <Input placeholder="Enter longitude" />
              </Form.Item>
            </div>
          </Form.Item>

          {/* <div className="flex justify-center my-4">
            <Button type="dashed" onClick={handleGetLocation} icon={<MapPin />}>
              Detect My Location
            </Button>
          </div> */}

          <Form.Item style={{ marginBottom: 0 }}>
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Delivery Radius (km)"
                name="delivery_radius"
                style={{ width: "calc(50% - 8px)" }}
                rules={[requiredRule]}
              >
                <Input type="number" placeholder="Enter radius in km" />
              </Form.Item>
              <Form.Item
                label="Landmark"
                name="landmark"
                style={{ width: "calc(50% - 8px)", margin: "0 8px" }}
              >
                <Input placeholder="Enter nearby landmark" />
              </Form.Item>
            </div>
          </Form.Item>

          <div className="flex mb-5 mt-6">
            <Phone />
            <p className="text-lg ml-2 font-bold">Contact Details for Orders</p>
          </div>

          <Form.Item style={{ marginBottom: 0 }}>
            <div style={{ display: "flex" }}>
              <Form.Item
                label="Order Phone Number"
                name="order_phone"
                style={{ width: "calc(50% - 8px)" }}
                rules={[requiredRule, phoneRule]}
              >
                <Input placeholder="Enter phone for orders" />
              </Form.Item>
              <Form.Item
                label="Website"
                name="website"
                style={{ width: "calc(50% - 8px)", margin: "0 8px" }}
              >
                <Input placeholder="Enter website URL" />
              </Form.Item>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

const KycThirdSteps = ({ formData, setFormData }) => {
  const [closedDays, setClosedDays] = useState(
    formData.closedDays || {
      sunday: false,
      monday: false,
      // ... other days
    }
  );

  const handleTimeChange = (day, field, time) => {
    const formattedTime = dayjs(time).format("h:mm A");
    setFormData((prev) => ({
      ...prev,
      operatingHours: {
        ...prev.operatingHours,
        [day]: {
          ...prev.operatingHours?.[day],
          [field]: formattedTime,
        },
      },
    }));
  };

  const toggleDayStatus = (day) => {
    const newStatus = !closedDays[day];
    setClosedDays((prev) => ({ ...prev, [day]: newStatus }));

    // Clear times if day is closed
    if (newStatus) {
      setFormData((prev) => ({
        ...prev,
        operatingHours: {
          ...prev.operatingHours,
          [day]: { open: "", close: "" },
        },
      }));
    }
  };

  const handleDeliveryToggle = (checked) => {
    setFormData((prev) => ({ ...prev, deliveryAvailable: checked }));
  };

  const handlePickupToggle = (checked) => {
    setFormData((prev) => ({ ...prev, pickupAvailable: checked }));
  };

  const days = [
    { key: "sunday", label: "Sunday" },
    { key: "monday", label: "Monday" },
    { key: "tuesday", label: "Tuesday" },
    { key: "wednesday", label: "Wednesday" },
    { key: "thusday", label: "Thusday" },
    { key: "friday", label: "Friday" },
    { key: "saturday", label: "Saturday" },
  ];

  return (
    <div className="kycForm-outer my-7 px-10 pb-1 bg-[#fff] shadow-xl">
      <div className="flex">
        <ClockCircleOutlined style={{ color: "#ffb700", fontSize: "24px" }} />
        <p className="text-xl ml-2 font-bold text-[#ffb700]">Operating Hours</p>
      </div>

      <div className="kycFirstStep mt-5">
        <Table
          dataSource={days.map((day) => ({
            key: day.key,
            day: day.label,
            open: (
              <TimePicker
                format="h:mm A"
                use12Hours
                disabled={closedDays[day.key]}
                onChange={(time) => handleTimeChange(day.key, "open", time)}
                value={
                  formData.operatingHours?.[day.key]?.open
                    ? dayjs(formData.operatingHours[day.key].open, "h:mm A")
                    : null
                }
              />
            ),
            close: (
              <TimePicker
                format="h:mm A"
                use12Hours
                disabled={closedDays[day.key]}
                onChange={(time) => handleTimeChange(day.key, "close", time)}
                value={
                  formData.operatingHours?.[day.key]?.close
                    ? dayjs(formData.operatingHours[day.key].close, "h:mm A")
                    : null
                }
              />
            ),
            action: (
              <Button
                type={closedDays[day.key] ? "primary" : "default"}
                danger={closedDays[day.key]}
                onClick={() => toggleDayStatus(day.key)}
              >
                {closedDays[day.key] ? "Closed" : "Open"}
              </Button>
            ),
          }))}
          columns={[
            { title: "Day", dataIndex: "day", key: "day" },
            { title: "Open Time", dataIndex: "open", key: "open" },
            { title: "Close Time", dataIndex: "close", key: "close" },
            { title: "Status", dataIndex: "action", key: "action" },
          ]}
          pagination={false}
        />

        <Divider />

        <div className="operation-options">
          <Form.Item label="Delivery Available">
            <Switch
              checked={formData.deliveryAvailable}
              onChange={handleDeliveryToggle}
              checkedChildren="Yes"
              unCheckedChildren="No"
            />
          </Form.Item>

          <Form.Item label="Pickup Available">
            <Switch
              checked={formData.pickupAvailable}
              onChange={handlePickupToggle}
              checkedChildren="Yes"
              unCheckedChildren="No"
            />
          </Form.Item>
        </div>
      </div>
    </div>
  );
};



const KycVerificationForm = () => {
    const { _rest } = useContext(UserContext);
   const navigate = useNavigate();
   const [current, setCurrent] = useState(0);
   const [form1] = Form.useForm();
   const [form2] = Form.useForm();

   const [formData, setFormData] = useState({
     restaurantId: _rest.id,
     restaurant_name: "",
     business_number: "",
     cuisine_type: "",
     description: "",
     email: "",
     contact_name: "",
     phone: "",
     address: "",
     latitude: "",
     longitude: "",
     delivery_radius: "",
     landmark: "",
     order_phone: "",
     website: "",
     operatingHours: {},
     closedDays: {},
     deliveryAvailable: true,
     pickupAvailable: false,
   });

   const steps = [
     {
       title: "Restaurant Info",
       content: (
         <KycFirstSteps
           formData={formData}
           setFormData={setFormData}
           form={form1}
         />
       ),
       form: form1,
     },
     {
       title: "Location",
       content: (
         <KycSecondSteps
           formData={formData}
           setFormData={setFormData}
           form={form2}
         />
       ),
       form: form2,
     },
     {
       title: "Operating Hours",
       content: <KycThirdSteps formData={formData} setFormData={setFormData} />,
     },
   ];

   const next = async () => {
     try {
       await steps[current].form.validateFields();
       setCurrent(current + 1);
     } catch (error) {
       message.error("Please fill all required fields correctly");
     }
   };

  const prev = () => {
    setCurrent(current - 1);
  };

  const handleSubmit = () => {

  try {

    
   console.log("Final form data:", formData);
   KycFormPost(formData).then(function (response) {
     navigate("");
     SuccesfulMessageToast("Successfully Added");
   });

    navigate("/restaurant");
  } catch (error) {

    console.error("Submission error:", error);
  }
    
  };

  // const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="kycForm-outer">
      <div className="kycVerification-inner mx-28 my-5">
        <Steps
          current={current}
          items={steps.map((s) => ({ title: s.title }))}
        />

        <div className="form-content">{steps[current].content}</div>

        <div className="form-actions" style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ marginRight: 8 }} onClick={prev}>
              Previous
            </Button>
          )}
          {current < steps.length - 1 ? (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          ) : (
            <Button type="primary" onClick={handleSubmit}>
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

// const BasicInformation = () =>{
// const navigate = useNavigate();

// const handleFormData = (value) => {
//   console.log("printing the values", value);
//   KycFormPost(value).then(function (response) {
//     navigate("");
//     SuccesfulMessageToast("Successfully Added");
//   });
// }; 

//   return (
//     <div className="mx-40 p-8 my-8 mb-5 bg-[#fff] shadow-xl">
//       <div className=" my-2 text-center">
//         <p className="text-xl font-bold">Basic Infomation</p>
//       </div>
//       <div>
//         <div className="kycForm-outer ">
//           <div className="kycFirstStep  ">
//             <Form layout="vertical" onFinish={handleFormData}>
//               <Form.Item label="Restaurant Name" name="restaurant_name">
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 style={{
//                   marginBottom: 0,
//                 }}
//               >
//                 <div style={{ display: "flex" }}>
//                   <Form.Item
//                     label="Restaurant Type"
//                     name="restaurant_type"
//                     style={{
//                       width: "calc(50% - 8px)",
//                     }}
//                   >
//                     <Input placeholder="Input Price of Item" />
//                   </Form.Item>
//                   <Form.Item
//                     label="Cuisine Type"
//                     name="cuisine_type"
//                     style={{
//                       width: "calc(50% - 8px)",
//                       margin: "0 8px",
//                     }}
//                   >
//                     <Input placeholder="Enter" />
//                   </Form.Item>
//                 </div>
//               </Form.Item>
//               <Form.Item label="Email Address" name="email">
//                 <Input />
//               </Form.Item>

//               <Form.Item
//                 style={{
//                   marginBottom: 0,
//                 }}
//               >
//                 <div style={{ display: "flex" }}>
//                   <Form.Item
//                     label="Contact Number"
//                     name="contact_number"
//                     style={{
//                       width: "calc(50% - 8px)",
//                     }}
//                   >
//                     <Input placeholder="Input Price of Item" />
//                   </Form.Item>
//                   <Form.Item
//                     label="Country"
//                     name="country"
//                     style={{
//                       width: "calc(50% - 8px)",
//                       margin: "0 8px",
//                     }}
//                   >
//                     <Input placeholder="Enter" />
//                   </Form.Item>
//                 </div>
//               </Form.Item>
//               <Form.Item
//                 style={{
//                   marginBottom: 0,
//                 }}
//               >
//                 <div style={{ display: "flex" }}>
//                   <Form.Item
//                     label="State/Region"
//                     name="state"
//                     style={{
//                       width: "calc(50% - 8px)",
//                     }}
//                   >
//                     <Input placeholder="Input Price of Item" />
//                   </Form.Item>
//                   <Form.Item
//                     label="City"
//                     name="city"
//                     style={{
//                       width: "calc(50% - 8px)",
//                       margin: "0 8px",
//                     }}
//                   >
//                     <Input placeholder="Enter" />
//                   </Form.Item>
//                 </div>
//               </Form.Item>
//               <Form.Item
//                 style={{
//                   marginBottom: 0,
//                 }}
//               >
//                 <div style={{ display: "flex" }}>
//                   <Form.Item
//                     label="Tole"
//                     name="tole"
//                     style={{
//                       width: "calc(50% - 8px)",
//                     }}
//                   >
//                     <Input placeholder="" />
//                   </Form.Item>
//                   <Form.Item
//                     label="Postal Code"
//                     name="postal_code"
//                     style={{
//                       width: "calc(50% - 8px)",
//                       margin: "0 8px",
//                     }}
//                   >
//                     <Input placeholder="Enter" />
//                   </Form.Item>
//                 </div>
//               </Form.Item>

//               <Form.Item className="text-center mt-5 ">
//                 <Button className="button-primary" htmlType="submit" > Submit</Button>
//               </Form.Item>
//             </Form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

const AdminProfile = () => {
    const { _rest } = useContext(UserContext);
    const [getData, setGetData] = useState(false)
     const [kycData, setKycData] = useState(null);

  useEffect(() => {

    const fetchKycData = async () => {
      try {
        const response = await getKycDetails(_rest.id);
        console.log("KYC response:", response);
         if (response && response.length > 0) {
           setGetData(true);
           
           setKycData(response[0]);
         }
          //  setKycData(response);
        // setGetData(true);
         // Store the response in state
      } catch (error) {
        console.error("Error fetching KYC details:", error);
      }
    };

     if (_rest?.id) {
       fetchKycData();
     }

  }, [_rest?.id]);

  const items = [
    {
      key: "1",
      label: "General",
      children: <GeneralInformationModal kycData={kycData} />,
    },
    {
      key: "2",
      label: "KYC",
      children: getData ? (
        kycData ? (
          <KycDetailsPage kycData={kycData} />
        ) : (
          <div>Loading KYC data...</div>
        )
      ) : (
        <KycVerificationForm />
      ),
    },
    //
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
    <div className="p-8 bg-[#fff] shawdow-lg mt-5">
      <Title level={4}> <SettingOutlined/> Setting</Title>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  );
};

export default AdminProfile;
