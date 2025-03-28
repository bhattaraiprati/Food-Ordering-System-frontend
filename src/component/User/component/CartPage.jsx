import { Button, Col, Row } from 'antd';
import Title from 'antd/es/typography/Title';
import { X } from 'lucide-react';
import React from 'react'
import { useNavigate, useParams } from 'react-router';

const CartPage = ({ cart, onRemove, onUpdateQuantity, disable }) => {
  const params = useParams();
  const navigate = useNavigate();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const vat = subtotal * 0.13; // Assuming 13% VAT
  const deliveryCharge = 80; // Fixed delivery charge
  const grandTotal = subtotal + vat + deliveryCharge;

  const handleCheckout = ()=>{
    navigate(`/checkout/${params.id}`)
  }

  return (
    <div className="w-full m-2">
      <div className="w-full min-h-80 bg-[#fff] rounded-lg p-5">
        <div className="border-b-2 text-center">
          <Title level={3}>
            {cart.length === 0 ? "Cart Empty" : `Cart Items (${cart.length})`}
          </Title>
        </div>

        {cart.map((item) => (
          <Row key={item.id} className="border-b-2 pb-4">
            <Col span={2} className="mt-4 mr-2">
              <X
                color="#ffb700"
                onClick={() => onRemove(item.id)}
                style={{ cursor: "pointer" }}
              />
            </Col>
            <Col span={10}>
              <div className="text-gray-700 mt-2">
                <p className="text-base font-medium">{item.name}</p>
              </div>
              <div className="text-gray-500">
                <p className="text-sm">Special instructions</p>
              </div>
            </Col>
            <Col span={11}>
              <div className="flex items-center">
                <div className="flex items-center">
                  <Button
                    size="small"
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="mx-2 text-gray-700">{item.quantity}</span>
                  <Button
                    size="small"
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                </div>
                <div className="ml-20 text-[#ffb700]">
                  Rs {item.price * item.quantity}
                </div>
              </div>
            </Col>
          </Row>
        ))}

        <div className="p-4">
          <Row>
            <Col span={18}>
              <p className="text-gray-500 text-base">Subtotal</p>
              <p className="text-gray-500 text-base">VAT (13%)</p>
              <p className="text-gray-500 text-base">Delivery Charge</p>
              <p className="text-gray-500 text-base font-semibold">
                Grand Total
              </p>
            </Col>
            <Col span={6} className="text-right">
              <p className="text-gray-600 text-base">
                Rs {subtotal.toFixed(2)}
              </p>
              <p className="text-gray-600 text-base">Rs {vat.toFixed(2)}</p>
              <p className="text-gray-600 text-base">
                Rs {deliveryCharge.toFixed(2)}
              </p>
              <p className="text-gray-600 text-base font-semibold">
                Rs {grandTotal.toFixed(2)}
              </p>
            </Col>
          </Row>
          <div className="text-center mt-8 w-full">
            <Button
              className="button-primary"
              style={{ width: "25vh" }}
              disabled={cart.length === 0}
              onClick={handleCheckout}
              hidden={disable}
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage