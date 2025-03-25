import React from 'react'
import { Button } from "antd";


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
              <p className="mb-8 max-w-[480px] text-gray-950 text-base text-body-color dark:text-dark-6">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dignissimos voluptas molestiae iusto dolorem aut numquam
                temporibus quibusdam repellendus vero qui dolor quis, hic,
                ducimus nisi!
              </p>
              <ul className="flex flex-wrap items-center">
                <li>
                  <Button className="inline-flex px-6 py-3" type="primary">
                    Order Now
                  </Button>
                </li>
                <li>
                  <a
                    href="/#"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-center text-base font-medium text-dark hover:bg-blue-dark lg:px-7"
                  >
                    {/* <DownloadOutlined
                        className="mr-2"
                        style={{ fontSize: "20px" }}
                      /> */}
                    Explore Menu
                  </a>
                </li>
              </ul>
              <div className="clients pt-16">
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
              </div>
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
                  {/* <svg
                    width="93"
                    height="93"
                    viewBox="0 0 93 93"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                    <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                  </svg> */}
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