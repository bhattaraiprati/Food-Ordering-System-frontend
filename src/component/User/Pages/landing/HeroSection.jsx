import React from 'react'
import { Button } from "antd";
import { NavLink } from 'react-router';


const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand image" className="h-10 w-full" />
      </a>
    </>
  );
};

const HeroSection = () => {
  return (
    <div className="relative bg-dark  pt-[120px] dark:bg-dark lg:pt-[110px]">
      <div className="container">
        <div className="mx-4 flex  flex-wrap-reverse">
          <div className="w-full px-4 lg:w-5/12">
            <div className="hero-content">
              <h1 className="mb-5 mt-2 ml-0 text-4xl font-bold  text-gray-950 !leading-[1.208]   sm:text-[42px] lg:text-[40px] xl:text-5xl ">
                Order Your Favorite Meals Online
              </h1>
              <p className="mb-8 max-w-[480px] text-gray-950 text-[18px] text-body-color dark:text-dark-6">
                Delicious food delivered to your doorstep. Browse menus, place
                orders, and enjoy hassle-free dining with just a few clicks!
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <NavLink to={"/explore"}>
                    <Button className="inline-flex px-6 py-3 button-primary ">
                      Explore Now
                    </Button>
                  </NavLink>
                </li>
              </ul>
              {/* <div className="clients pt-16">
                <h6 className="mb-6 flex items-center text-xs font-normal text-gray-950 dark:text-dark-6">
                  Some Of Our Clients
                  <span className="ml-3 inline-block h-px w-8 bg-gray-500"></span>
                </h6>

                <div className="flex items-center space-x-4">
                  <SingleImage
                    href="#"
                    imgSrc="https://cdn.tailgrids.com/2.0/image/assets/images/brands/ayroui.svg"
                  />

                </div>
              </div> */}
            </div>
          </div>
          <div className="hidden px-4 lg:block lg:w-1/12"></div>
          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src="https://img.freepik.com/free-photo/top-view-table-full-food_23-2149209253.jpg?ga=GA1.1.1715020565.1724677247&semt=ais_hybrid"
                  alt="hero"
                  className="max-w-full lg:ml-auto rounded-tl-[80px]"
                />
                <span className="absolute -bottom-8 -left-8 z-[-1]">
                  
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection