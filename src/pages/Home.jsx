import React from "react";
import Banner from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Men from "../assets/Men.jpg";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { productList } from "./qqq.jsx";
import { trendingproductList } from "./trending products data.jsx";

import "swiper/css";
import "swiper/css/pagination";

import Ad from "../assets/brandlogo/ad.jpg";
import ba from "../assets/brandlogo/ba.jpg";
import bs from "../assets/brandlogo/bs.jpg";
import c from "../assets/brandlogo/c.jpg";
import nb from "../assets/brandlogo/nb.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const banners = [Banner, Banner2];
  const [products] = useState(productList.products);
  const [Trendproducts] = useState(trendingproductList.trendproducts);

  return (
    <div>
      <div className="w-full h-[300px]">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          slidesPerView={1}
        >
          {banners.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Banner ${index}`}
                className="w-full h-[300px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ---------------------brand section -------------------------- */}
      <div className="m-12 ">
        <Slider
          className=""
          dots={false}
          infinite={true}
          speed={1000}
          slidesToShow={5}
          slidesToScroll={1}
          autoplay={true}
          autoplaySpeed={2000} // 3 seconds
          arrows={true}
          responsive={[
            {
              breakpoint: 1280,
              settings: { slidesToShow: 4, slidesToScroll: 1 },
            },
            {
              breakpoint: 1024,
              settings: { slidesToShow: 3, slidesToScroll: 1 },
            },
            {
              breakpoint: 768,
              settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
              breakpoint: 480,
              settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
          ]}
        >
          {products.map((product) => (
            <div key={product.id} className="px-2 py-2 ">
              <div className="cursor-pointer rounded-[10px] hover:scale-103 transition duration-400  pt-[18px] py-[8px] hover:shadow-[2px_2px_0px_rgba(128,128,128,0.5)] border border-gray-400 flex flex-col items-center text-center">
                <img
                  src={Men}
                  alt={product.title}
                  className="w-25 h-auto object-cover mb-2 "
                />
                <h2 className="text-lg">{product.title}</h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* --------------------trending section------------------ */}

      <div>
        <div className="mx-12 my-8">
          <h1 className="text-xl font-semibold  text-gray-800 tracking-wide">
            Trending Products
          </h1>
        </div>
        <div className="m-12  flex flex-wrap gap-4 min-w-[651px]">
          {Trendproducts.map((trendproduct) => (
            <div key={trendproduct.id} className="p-1 basis-[calc(20%-1rem)]">
              <div className="hover:shadow-md hover:scale-105 transition-transform transition-shadow duration-300 border border-gray-200 w-full">
                <img
                  src={trendproduct.thumbnail}
                  alt={trendproduct.title}
                  className=" cursor-pointer w-full h-auto object-cover mb-2"
                />
                <div className="p-1">
                  <h3 className="text-base md:text-lg font-semibold text-gray-800 truncate">
                    {trendproduct.title}
                  </h3>
                  <h3 className="cursor-pointer text-sm text-gray-600 h-6 w-20 overflow-hidden text-ellipsis whitespace-nowrap">
                    {trendproduct.description}
                  </h3>
                  <h1 className="cursor-pointer text-sm font-semibold text-pink-600">
                    ₹{trendproduct.price}
                  </h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* -------------------------brand logo----------------------------- */}
      <div className="m-6 sm:m-8 md:m-12">
        <div className="flex flex-wrap justify-between items-center gap-4">
          <img
            src={Ad}
            alt="ad"
            className="w-1/2 sm:w-1/3 md:w-1/5 max-w-[120px] h-auto object-contain"
          />
          <img
            src={ba}
            alt="ba"
            className="w-1/2 sm:w-1/3 md:w-1/5 max-w-[120px] h-auto object-contain"
          />
          <img
            src={bs}
            alt="bs"
            className="w-1/2 sm:w-1/3 md:w-1/5 max-w-[120px] h-auto object-contain"
          />
          <img
            src={c}
            alt="c"
            className="w-1/2 sm:w-1/3 md:w-1/5 max-w-[120px] h-auto object-contain"
          />
          <img
            src={nb}
            alt="nb"
            className="w-1/2 sm:w-1/3 md:w-1/5 max-w-[120px] h-auto object-contain"
          />
        </div>
      </div>

      {/* ------------------------------footer-------------------------------- */}

      <div className="m-12">
        <div>Footer</div>
      </div>
    </div>
  );
};

export default Home;
