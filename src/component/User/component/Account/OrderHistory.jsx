import Title from 'antd/es/typography/Title';
import React from 'react'

const OrderHistory = () => {
  return (
    <div className="px-10 ">
      <p className="text-2xl text-gray-700">Order History</p>

      <div className="py-2 mt-2 border-t border-gray-400">
        <p className="text-lg text-gray-600 ">Current Order</p>
      </div>
      <div className="py-2 mt-2 border-t border-gray-400">
        <p className="text-lg text-gray-600 ">Past Order</p>
      </div>
    </div>
  );
}

export default OrderHistory;