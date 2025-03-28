import { Button, Card, Checkbox, Col, Form, Input, Row } from 'antd';
import { List } from 'lucide-react';
import React, { useContext, useState } from 'react'
import CartPage from './CartPage';
import { useCart } from '../../../Context/Cart.context';
import { useNavigate, useParams } from 'react-router';
import { UserContext } from '../../../Context/User.context';
import { ErrorMessageToast, SuccesfulMessageToast } from '../../../utils/Toastify.util';
import { saveOrders } from '../../../utils/User.util';

const { TextArea } = Input;

const CheckoutPage = () => {
    const params = useParams();
    const {_user, _rest} = useContext(UserContext);

    const navigate = useNavigate();
    const { cart,  removeFromCart, updateQuantity } = useCart();

     const handleOrderDelivery = (values) => {

        if (cart.length === 0) {
          console.log("Your cart is empty!");
          return;
        }
       // Combine form values with cart items
       const checkoutDetailsData = {
         ...values,
         items: cart.map((item) => ({
           id: item.id,
           name: item.name,
           price: item.price,
           quantity: item.quantity,
           // Add any other item properties you need
         })),
         total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
         userId: _user.id,
         user_name: _user.name,
         restaurantId: _rest.id,
         orderDate: new Date().toISOString(),
       };

       console.log("Order Details:", checkoutDetailsData);

       saveOrders(checkoutDetailsData).then(function(response){
        navigate("/");
       SuccesfulMessageToast("Order submitted Sucessfully!");

       })
       .catch(error => {
           message.error('Failed to place order');
           ErrorMessageToast("Failed to submit order!");
         });


     };
    const handleBack = ()=>{
        navigate(`/detail/${params.id}`)
    }
  return (
    <div className="w-full ">
      <div className="px-10 py-8 mt-28">
        <div className="border-b-2">
          <p className="text-gray-800 text-3xl ml-5 pb-5 font-base">Checkout</p>
        </div>
        <Form
          onFinish={handleOrderDelivery}
          layout="vertical"
          initialValues={{
            userId: _user.id,
            restaurantId: _rest.id,
            status: "pending",
          }}
        >
          <Form.Item name="userId" hidden />
          <Form.Item name="restaurantId" hidden />
          <Form.Item name="status" hidden />

          <Row>
            <Col span={15}>
              <div className="mt-3">
                <Card type="inner" title="Delivery Address">
                  <Form.Item
                    label="Address"
                    name="address"
                    rules={[
                      {
                        required: true,
                        message: "Please input full address",
                      },
                    ]}
                  >
                    <Input placeholder="Enter your Full Address" />
                  </Form.Item>
                </Card>
              </div>
              <div className="mt-5">
                <Card type="inner" title="Payment Option">
                  <Form.Item name="payment_method">
                    <Checkbox.Group
                      defaultValue="cash"
                      style={{ width: "100%" }}
                    >
                      <Row gutter={[0, 24]}>
                        <Col span={8}>
                          <Checkbox value="cash">Cash On Deleivery</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="eSewa">ESewa</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="khalti">
                            Khalti Digital Wallet
                          </Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="card">Debit/Credit Card</Checkbox>
                        </Col>
                        <Col span={8}>
                          <Checkbox value="fonePay">Fonepay QR</Checkbox>
                        </Col>
                      </Row>
                    </Checkbox.Group>
                  </Form.Item>
                </Card>
              </div>

              <div className="mt-3">
                <Card type="inner" title="Special Instruction">
                  <Form.Item name="special_instruction">
                    <TextArea
                      rows={4}
                      placeholder="Please mention if there is any instruction for the delivery person. (eg. Beware of Dogs)"
                    />
                  </Form.Item>
                </Card>
              </div>
            </Col>
            <Col span={9}>
              <CartPage
                cart={cart}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
                disable={true}
              />
            </Col>
          </Row>
          <div className="mt-4 ml-3">
            <Row>
              <Col span={8}>
                <Button
                  onClick={handleBack}
                  className="bg-[#636C72] hover:bg-[#ffb700] text-white"
                >
                  Go Back
                </Button>
              </Col>
              <Col span={8} offset={4}>
                <Button
                  htmlType="submit"
                  type="button"
                  className="button-primary"
                  style={{ width: "20vh" }}
                >
                  Order
                </Button>
              </Col>
            </Row>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default CheckoutPage