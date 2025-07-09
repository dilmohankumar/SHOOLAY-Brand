import React from "react";
import Banner from "../assets/banner1.png";
import Banner2 from "../assets/banner2.png";
import Men from "../assets/Men.jpg";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { productList } from "./qqq.jsx";

import "swiper/css";
import "swiper/css/pagination";

const Home = () => {
  const banners = [Banner, Banner2];
  const [products, setProducts] = useState(productList.products);

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
{/* ---------------------3 Product -------------------------- */}
          <div className="flex flex-col m-12  items-revert justify-between">
          <div className=" grid grid-cols-3 gap-4 p-4  text-center">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col items-center">
          <img
            src={Men}
            alt={product.title}
            className="w-40 h-auto object-cover mb-2"
          />
          <h2 className="text-lg">{product.title}</h2>

         
       
        </div>
      ))}
    </div>
          </div>

    </div>
  );
};

export default Home;
