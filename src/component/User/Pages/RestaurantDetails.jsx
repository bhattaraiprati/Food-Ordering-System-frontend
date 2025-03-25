import { Button, Card, Col, Divider, Rate, Row, Tabs, theme, Typography } from "antd";
import { Layout, Menu } from "antd";
import Search from "antd/es/input/Search";
const {  Sider } = Layout;
import { Bike, Clock,  MapPin, MenuSquareIcon, Star, X } from "lucide-react";
import React, { useState } from 'react'
import "../../../assets/css/CustomStyle.css"

const { Title, Text } = Typography;



const Menuitems = () =>{
    return (
      <>
        <div className="mt-5  ">
          <div className="text-center mb-3">
            <h4 className="font-medium text-[#ffb700]">Soup</h4>
          </div>
          <div className="h-8 px-2 pb-2 rounded-sm bg-[#E3E3E3]">
            <p className="font-normal ">Indian Soup</p>
          </div>
          <Row className="my-5">
            <Col span={16} className="text-lg">
              Veg. Manchow Soup
            </Col>
            <Col span={4} offset={4}>
              <Button className="button-primary">Add</Button>
            </Col>
            <span className="font-medium text-lg text-[#ffb700]">Rs. 300</span>
          </Row>
          <Divider />
          <Row className="my-5">
            <Col span={16} className="text-lg">
              Veg. Manchow Soup
            </Col>
            <Col span={4} offset={4}>
              <Button className="button-primary">Add</Button>
            </Col>
            <span className="font-medium text-lg text-[#ffb700]">Rs. 300</span>
          </Row>
          <Divider />
          <Row className="my-5">
            <Col span={16} className="text-lg">
              Veg. Manchow Soup
            </Col>
            <Col span={4} offset={4}>
              <Button className="button-primary">Add</Button>
            </Col>
            <span className="font-medium text-lg text-[#ffb700]">Rs. 300</span>
          </Row>
          <Divider />
          <Row className="my-5">
            <Col span={16} className="text-lg">
              Veg. Manchow Soup
            </Col>
            <Col span={4} offset={4}>
              <Button className="button-primary">Add</Button>
            </Col>
            <span className="font-medium text-lg text-[#ffb700]">Rs. 300</span>
          </Row>
          <Divider />
          <Row className="my-5">
            <Col span={16} className="text-lg">
              Veg. Manchow Soup
            </Col>
            <Col span={4} offset={4}>
              <Button className="button-primary">Add</Button>
            </Col>
            <span className="font-medium text-lg text-[#ffb700]">Rs. 300</span>
          </Row>
          <Divider />
          <Row className="my-5">
            <Col span={16} className="text-lg">
              Veg. Manchow Soup
            </Col>
            <Col span={4} offset={4}>
              <Button className="button-primary">Add</Button>
            </Col>
            <span className="font-medium text-lg text-[#ffb700]">Rs. 300</span>
          </Row>
        </div>
      </>
    );
}

const Review = () => {
  return (
    <div >
      <div className="border-b-2 pb-4">
        <div/>
        <Rate disabled defaultValue={4} className="text-[#ffb700]" />
        <p className="text-gray-800 text-[16px]/6 font-medium">

          Pratik Bhattarai
        </p>
        <p className="text-gray-500 text-[14px]">Nice Food</p>
      </div>
    </div>
  );
};

const cardsItems = [
  {
    key: 1,
    label: (
      <span style={{ display: "flex", fontSize: "18px", fontWeight: "10px" }}>
        <MenuSquareIcon style={{ marginRight: 8 }} color="#ffb700" /> Menu
      </span>
    ),
    children: <Menuitems/>,
  },
  // {
  //   key: 2,
  //   label: (
  //     <span style={{ display: "flex", fontSize: "18px", fontWeight: "10px" }}>
  //       <MapPin style={{ marginRight: 8 }} color="#ffb700" /> Map
  //     </span>
  //   ),
  //   children: "This is 2",
  // },
  {
    key: 3,
    label: (
      <span style={{ display: "flex", fontSize: "18px", fontWeight: "10px" }}>
        <Star style={{ marginRight: 8 }} color="#ffb700" /> Review
      </span>
    ),
    children: <Review/>,
  },
];

const items = [
  {
    key: 1,
    label: "Soup",
  },
  {
    key: 2,
    label: "Breakfast",
  },
  {
    key: 3,
    label: "Dinner",
  },
  {
    key: 4,
    label: "launch",
  },
  {
    key: 5,
    label: "Nav 5",
  },
  {
    key: 6,
    label: "Nav 6",
  },
];

 



const RestaurantDetails = () => {
  
    const {
      token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


  return (
    <div className="relative isolate px-0 pt-14">
      <section>
        <div className="mx-auto w-full h-full pt-32 sm:pt-2 lg:py-10 relative">
          <div className="w-full h-full  min-h-50 background-image relative">
            <img
              src="https://images.unsplash.com/photo-1595418917831-ef942bd9f9ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="w-full  object-cover"
              style={{ height: "50vh" }}
            />
            <div className="restaurant-details absolute inset-0 flex p-6 items-center justify-center">
              <div className="bg-white/0  rounded-lg w-full max-w-full mx-auto ">
                <Row gutter={"horizontal"}>
                  <Col span={6}>
                    <img
                      className="w-full max-w-xs rounded-lg "
                      src="https://img.freepik.com/free-photo/big-sandwich-hamburger-burger-with-beef-red-onion-tomato-fried-bacon_2829-5398.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid"
                    />
                  </Col>

                  <Col offset={1} span={17} className="text-white ">
                    <Row className="text-white">
                      <Col span={15}>
                        <Title
                          level={2}
                          style={{ marginBottom: "0px", color: "#fff" }}
                        >
                          Peros Pizza Late Night (Thamel)
                        </Title>
                        <Title
                          level={4}
                          style={{ marginTop: "4px", color: "#fff" }}
                        >
                          Thamel, Kathmandu
                        </Title>
                      </Col>
                      <Col span={9}>
                        <div>
                          <Title
                            level={5}
                            className="white-color"
                            style={{ display: "flex", color: "#fff" }}
                          >
                            <Clock className="white-color" />
                            <span className="ml-2 white-color">
                              Open Time :{" "}
                            </span>
                            9:30 AM To 8:30 PM
                          </Title>
                          <div>
                            <Title level={5} style={{ display: "flex" }}>
                              <Bike className="white-color" />
                              <span className="ml-2 white-color">
                                30 - 40 mins
                              </span>
                            </Title>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <Row className="mt-10">
                      <Col>
                        <div>
                          <Rate disabled value={3} count={5} />
                          <Divider
                            type="vertical"
                            style={{ border: "0.5px solid white" }}
                          />
                          <Text className="white-color" strong>
                            Momo
                          </Text>
                          <Divider
                            type="vertical"
                            style={{ border: "0.5px solid white" }}
                          />
                          <Text className="white-color" strong>
                            Pizza
                          </Text>
                          <Divider
                            type="vertical"
                            style={{ border: "0.5px solid white" }}
                          />
                          <Text className="white-color" strong>
                            Burger
                          </Text>
                        </div>
                        <p className="mt-5 text-[16px] font-medium">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Magnam, atque expedita temporibus inventore
                          omnis architecto.
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="">
        <Row>
          <Col span={4} className="z-50 mt-16">
            <Sider
              breakpoint="lg"
              collapsedWidth="0"
              style={{
                background: "#F6F3F3",
              }}
            >
              <div className="demo-logo-vertical  flex text-center justify-center border-b-2 border-gray-300">
                <Text className="text-xl text-gray-700 mb-2">Categories</Text>
              </div>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={items}
                className="text-base text-center font-medium text-gray-200"
              />
            </Sider>
          </Col>
          <Col span={11}>
            <Card type="inner" className="h-110" style={{ padding: 0 }}>
              <div
                style={{
                  padding: "16px",
                  position: "sticky",
                  top: "56px",
                  backgroundColor: "white",
                }}
              >
                <Search placeholder="Search..." allowClear />
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0 16px",
                  borderBottom: "1px solid #f0f0f0",
                  position: "sticky",
                  top: 0,
                  backgroundColor: "white",
                  zIndex: 1,
                }}
              >
                <Tabs
                  type="line"
                  items={cardsItems}
                  style={{
                    flex: 1,
                    fontSize: "20px",
                    height: "30rem",
                    overflowY: "auto",
                    scrollbarWidth: "thin",
                    scrollbarColor: "gray transparent",
                  }}
                  tabBarStyle={{ marginBottom: 0 }}
                  tabBarGutter={16}
                  centered
                  theme={{
                    token: {
                      colorPrimary: "#ffb700", // Active tab text color
                      itemSelectedColor: "#ffb700", // Selected tab text color
                      itemHoverColor: "#ffb700", // Hover tab text color
                      itemActiveColor: "#ffb700",
                    },
                  }}
                />
              </div>
            </Card>
          </Col>
          <Col span={8}>
            <div className="w-full m-2">
              <div className="w-full min-h-80 bg-[#fff]  rounded-lg p-5">
                <div className="border-b-2 text-center">
                  <Title level={3}>Cart Empty</Title>
                </div>
                <Row className="border-b-2 pb-4">
                  <Col span={2} className="mt-4 mr-2">
                    <X color="#ffb700" />
                  </Col>
                  <Col span={10}>
                    <div className="text-gray-700 mt-2">
                      <p className="text-base font-medium">Mutton Bryani</p>
                    </div>
                    <div className="text-gray-500 ">
                      <p className="text-sm">i needed extra salad</p>
                    </div>
                  </Col>
                  <Col span={11}>
                    <div className="flex">
                      <div className="text-gray-600 mt-2">Addbtn</div>
                      <div className="mt-2 ml-20 text-[#ffb700] ">Rs 300</div>
                    </div>
                  </Col>
                </Row>
                <div className="p-4">
                  <Row>
                    <Col span={18}>
                      <p className="text-gray-500 text-base">Subtotal</p>
                      <p className="text-gray-500 text-base">VAT</p>
                      <p className="text-gray-500 text-base">Delivery Charge</p>
                      <p className="text-gray-500 text-base">Grand Total</p>
                    </Col>
                    <Col span={6} className="text-right">
                      <p className="text-gray-600 text-base"> 700</p>
                      <p className="text-gray-600 text-base"> 0.0</p>
                      <p className="text-gray-600 text-base"> 80</p>
                      <p className="text-gray-600 text-base"> Rs 700</p>
                    </Col>
                  </Row>
                  <div className="text-center mt-8 w-full ">
                    <Button className="button-primary" style={{width: "25vh"}}>
                      
                      Checkout
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default RestaurantDetails;