import React, { useContext, useState } from "react";
import { Dropdown, Button, Row, Col, Typography, Badge } from "antd";
import { X } from "lucide-react";
import Title from "antd/es/typography/Title";
import {  useCart } from "../../../Context/Cart.context";
import CartPage from "./CartPage";

// const cart = () =>{
//     return (
//       <div className="w-full min-h-80 bg-[#fff]  rounded-lg p-5">
//         <div className="border-b-2 text-center">
//           <Title level={3}>Cart Empty</Title>
//         </div>
//         <Row className="border-b-2 pb-4">
//           <Col span={2} className="mt-4 mr-2">
//             <X color="#ffb700" />
//           </Col>
//           <Col span={10}>
//             <div className="text-gray-700 mt-2">
//               <p className="text-base font-medium">Mutton Bryani</p>
//             </div>
//             <div className="text-gray-500 ">
//               <p className="text-sm">i needed extra salad</p>
//             </div>
//           </Col>
//           <Col span={11}>
//             <div className="flex">
//               <div className="text-gray-600 mt-2">Addbtn</div>
//               <div className="mt-2 ml-20 text-[#ffb700] ">Rs 300</div>
//             </div>
//           </Col>
//         </Row>
//         <div className="p-4">
//           <Row>
//             <Col span={18}>
//               <p className="text-gray-500 text-base">Subtotal</p>
//               <p className="text-gray-500 text-base">VAT</p>
//               <p className="text-gray-500 text-base">Delivery Charge</p>
//               <p className="text-gray-500 text-base">Grand Total</p>
//             </Col>
//             <Col span={6} className="text-right">
//               <p className="text-gray-600 text-base"> 700</p>
//               <p className="text-gray-600 text-base"> 0.0</p>
//               <p className="text-gray-600 text-base"> 80</p>
//               <p className="text-gray-600 text-base"> Rs 700</p>
//             </Col>
//           </Row>
//           <div className="text-center mt-8 w-full ">
//             <Button className="button-primary" style={{ width: "25vh" }}>
//               Checkout
//             </Button>
//           </div>
//         </div>
//       </div>
//     );
// }

const AddCart = ({ children }) => {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Mutton Bryani",
      note: "I needed extra salad",
      price: 300,
    },
  ]);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.price, 0);
    const vat = 0; // You can add VAT calculation logic here
    const deliveryCharge = 80;
    const grandTotal = subtotal + vat + deliveryCharge;

    return { subtotal, vat, deliveryCharge, grandTotal };
  };

  const totals = calculateTotals();

  const cartContent = (
    <div
      className="w-full min-h-80 bg-white rounded-lg p-5"
      style={{ width: "350px" }}
    >
      {cartItems.length === 0 ? (
        <div className="border-b-2 text-center text-gray-700">
          <Title level={3}>Cart Empty</Title>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="text-center">
              <Title level={3}>Cart</Title>
              <Row className="border-b-2 pb-4" key={item.id}>
                <Col span={2} className="mt-4 mr-2">
                  <X
                    color="#ffb700"
                    onClick={() => removeItem(item.id)}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
                <Col span={10}>
                  <div className="text-gray-700 mt-2">
                    <p className="text-base font-medium">{item.name}</p>
                  </div>
                  {item.note && (
                    <div className="text-gray-500">
                      <p className="text-sm">{item.note}</p>
                    </div>
                  )}
                </Col>
                <Col span={11}>
                  <div className="flex">
                    <div className="text-gray-600 mt-2">Qty: 1</div>
                    <div className="mt-2 ml-20 text-[#ffb700]">
                      Rs {item.price}
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          ))}

          <div className="p-4">
            <Row>
              <Col span={18}>
                <p className="text-gray-500 text-base">Subtotal</p>
                <p className="text-gray-500 text-base">VAT</p>
                <p className="text-gray-500 text-base">Delivery Charge</p>
                <p className="text-gray-500 text-base font-semibold">
                  Grand Total
                </p>
              </Col>
              <Col span={6} className="text-right">
                <p className="text-gray-600 text-base">Rs {totals.subtotal}</p>
                <p className="text-gray-600 text-base">Rs {totals.vat}</p>
                <p className="text-gray-600 text-base">
                  Rs {totals.deliveryCharge}
                </p>
                <p className="text-gray-600 text-base font-semibold">
                  Rs {totals.grandTotal}
                </p>
              </Col>
            </Row>
            <div className="text-center mt-8 w-full">
              <Button
                type="primary"
                style={{
                  width: "25vh",
                  backgroundColor: "#ffb700",
                  borderColor: "#ffb700",
                }}
              >
                Checkout
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
  return (
    <div>
      <Dropdown
        dropdownRender={() => (
          <CartPage
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
          />
        )}
        trigger={["click"]}
        overlayStyle={{
          width: "auto",
          boxShadow: "0 3px 6px rgba(0, 0, 0, 0.16)",
        }}
        
      >
        <div onClick={(e) => e.preventDefault()}>
          <Badge count={cart.reduce((sum, item) => sum + item.quantity, 0)}>
            {children}
          </Badge>
        </div>
      </Dropdown>
    </div>
  );
};

export default AddCart;
