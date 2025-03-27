import { Col, Descriptions, Row } from 'antd';
import { Store } from 'lucide-react';
import React from 'react'

const KycDetailsPage = ({ kycData }) => {

    if (!kycData) return <div>No KYC data available</div>;

  const restaurantInfo = [
    {
      key: "1",
      label: "Restaurant Name",
      span: "filled",
      children: kycData.restaurant_name,
    },
    {
      key: "2",
      label: "Business Number",
      span: "filled",
      children: kycData.business_number,
    },
    {
      key: "3",
      label: "Email",
      span: "filled",
      children: kycData.email,
    },
    {
      key: "4",
      label: "Contact Name",
      span: "filled",
      children: kycData.contact_name,
    },
    {
      key: "5",
      label: "Phone",
      span: "filled",
      children: kycData.phone,
    },
  ];

  const locationInfo = [
    {
      key: "1",
      label: "Address",
      span: "filled",
      children: kycData.address,
    },
    {
      key: "2",
      label: "Landmark",
      span: "filled",
      children: kycData.landmark,
    },
    {
      key: "3",
      label: "Latitude",
      span: "filled",
      children: kycData.latitude,
    },
    {
      key: "4",
      label: "Longitude",
      span: "filled",
      children: kycData.longitude,
    },
  ];


  const operatingDetails = kycData?.operatingHours
    ? Object.keys(kycData.operatingHours).map((day) => ({
        key: day,
        label: day.charAt(0).toUpperCase() + day.slice(1),
        span: "filled",
        children: `${kycData.operatingHours[day]?.open || "Closed"} - ${
          kycData.operatingHours[day]?.close || ""
        }`,
      }))
    : [];

  return (
    <div>
      <Row>
        <Col span={12}>
          <div>
            <div className="flex mb-4">
              <Store size={20} color="#ffb700" />
              <p className="text-lg ml-2 font-bold text-[#ffb700]">
                Restaurant Information
              </p>
            </div>
            <Descriptions items={restaurantInfo} />
          </div>
        </Col>
        <Col span={12}>
          <div>
            <div className="flex mb-4">
              <Store size={20} color="#ffb700" />
              <p className="text-lg ml-2 font-bold text-[#ffb700]">
                Operating Details
              </p>
            </div>
            <Descriptions items={operatingDetails} />
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="mt-8">
            <div className="flex mb-4">
              <Store size={20} color="#ffb700" />
              <p className="text-lg ml-2 font-bold text-[#ffb700]">Location</p>
            </div>
            <Descriptions items={locationInfo} />
          </div>
        </Col>
        <Col span={12}></Col>
      </Row>
    </div>
  );
};

export default KycDetailsPage