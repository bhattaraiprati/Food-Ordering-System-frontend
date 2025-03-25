import { FacebookFilled } from '@ant-design/icons';
import { Col, Row } from 'antd'
import { Facebook, } from 'lucide-react';
import React from 'react'

const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

const AboutPage = () => {
  return (
    <div className="w-full mt-28">
      <Row className="px-10">
        <Col span={11}>
          <div className="w-full p-8 bg-[#fff] rounded-xl">
            <p className="text-2xl mb-6 font-medium text-gray-900">About Us</p>
            <p className="text-gray-800">
              Welcome to [Your Platform Name], your go-to destination for
              hassle-free food ordering and restaurant table booking. Our
              mission is to connect food lovers with their favorite restaurants,
              offering a seamless and convenient dining experience.
            </p>
            <button className="bg-[#ffb700] mt-5 hover:outline-none ">
              Explore
            </button>
          </div>
        </Col>
        <Col span={12} offset={1}>
          <div className="relative z-10 inline-block pt-11 lg:pt-0">
            <img
              src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid"
              alt="hero"
              className="max-w-lg lg:ml-auto rounded-tl-[80px]"
            />
            <span className="absolute -bottom-8 -left-8 z-[-1]"></span>
          </div>
        </Col>
      </Row>

      <div className="w-full bg-[#fff] mt-8">
        <Row className="px-10">
          <Col span={11}>
            <div className="w-full p-8 bg-[#fff] rounded-xl">
              <p className="text-2xl mb-6 font-medium text-gray-700">
                Location
              </p>
              <p className="text-base mb-6 font-medium text-gray-600">
                Imadol, Kamal Paokhari, lalitpur{" "}
              </p>
              <div>
                <p className="text-base mt-10 font-medium text-gray-600">
                  Follow Us
                </p>
                <Facebook color='black' />
                <FacebookFilled color="dark" />
              </div>
            </div>
          </Col>
          <Col span={13}>
            <div className="text-gray-800 ">sdsjd</div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default AboutPage