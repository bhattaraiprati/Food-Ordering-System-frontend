import React from 'react'
import { Card, Space, Statistic } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

const DetailsCards = ({title, value, icon}) => {
  return (
    <div className="shadow-lg">
      <Space direction="horizontal">
        <Card
          variant="borderless"
          className=""
          style={{
            width: 210,
          }}
        >
          <Space direction="horizontal">
            {icon}
            <Statistic title={title} value={value} />
          </Space>
        </Card>
      </Space>
    </div>
  );
}

export default DetailsCards