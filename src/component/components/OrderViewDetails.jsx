import { Modal } from 'antd';
import React, { useState } from 'react'

const OrderViewDetails = ({ isOpen, onOk, onCancel, record}) => {
  return (
    <div>
      <Modal
        title="Order Details"
        centered
        open={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        width={{
          xs: "90%",
          sm: "80%",
          md: "70%",
          lg: "60%",
          xl: "50%",
          xxl: "40%",
        }}
      >
        {record && (
          <div>
            <p>
              <strong>ID:</strong> {record.id}
            </p>
            <p>
              <strong>User Details:</strong> {record.user_details}
            </p>
            <p>
              <strong>Order Status:</strong> {record.order_status}
            </p>
            <p>
              <strong>Date & Time:</strong> {record.date_time}
            </p>
            <p>
              <strong>Total Price:</strong> {record.total_price}
            </p>
            <p>
              <strong>Delivery Type:</strong> {record.delivery_type}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default OrderViewDetails