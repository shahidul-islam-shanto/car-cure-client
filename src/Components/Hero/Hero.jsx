import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import banner1 from "../../assets/images/banner/banner1.png";
import banner2 from "../../assets/images/banner/banner2.png";
import banner3 from "../../assets/images/banner/banner3.png";
import banner4 from "../../assets/images/banner/banner4.png";
import banner5 from "../../assets/images/banner/banner5.png";
import banner6 from "../../assets/images/banner/banner6.png";

import { Autoplay } from "swiper/modules";

const Hero = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        Pagination={{
          clickable: true,
        }}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full h-screen bg-cover" src={banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen bg-cover" src={banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen bg-cover" src={banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen bg-cover" src={banner4} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen bg-cover" src={banner5} />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-screen bg-cover" src={banner6} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Hero;
