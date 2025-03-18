import React from 'react'
import { Card, Space, Statistic } from "antd";
import { ShoppingCartOutlined } from '@ant-design/icons';

const DetailsCards = ({title, value, icon}) => {
  return (
    <div>
        <Space direction="horizontal">
                <Card
                  variant="borderless"
                  style={{
                    width: 200,
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