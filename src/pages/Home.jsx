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


// Import these at the top of your file
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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
      <div className="m-12">
  <Slider className=""
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
        <div className="rounded-[10px] hover:scale-103 transition duration-400  pt-[18px] py-[8px] hover:shadow-[2px_2px_0px_rgba(128,128,128,0.5)] border border-gray-400 flex flex-col items-center text-center">
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

    </div>
  );
};

export default Home;
