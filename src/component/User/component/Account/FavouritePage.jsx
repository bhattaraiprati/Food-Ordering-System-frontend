import { Col, Row } from 'antd'
import React from 'react'

const FavouritePage = () => {
  return (
    <div className=" w-full text-gray-900 max-h-60">
      <Row>
        <Col span={11} className="border-b w-full p-2 border-gray-400">
          <p className="text-xl font-medium">Favourite Restaurant</p>
        </Col>
        <Col span={12} offset={1} className="border-b p-2 w-full border-gray-400">
          <p className="text-xl font-medium">Favourite Food</p>
        </Col>
      </Row>
    </div>
  );
}

export default FavouritePage