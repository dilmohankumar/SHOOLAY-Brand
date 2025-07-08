import React from 'react';
import Banner from '../assets/banner1.png';
import Banner2 from '../assets/banner2.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const Home = () => {
  const banners = [Banner, Banner2];

  return (
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
  );
};

export default Home;
