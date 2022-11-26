import React from 'react'
import {useState} from 'react'
import NextImage from '../../components/NextImage'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import 'swiper/css/pagination'

type amountofCarousel = {
    num : number
}

function Carousel({num} : amountofCarousel) {        
      return (
    
        <Swiper
            pagination={{ 
                clickable: true,
                dynamicMainBullets : 4
            }}
            modules={[Pagination, Autoplay]}
            className="flex mx-w-7xl"
            autoplay={{ delay:1500 } }
            spaceBetween={10}
            breakpoints={{
                280:{
                    slidesPerView : 1
                },
                400:{
                    slidesPerView : 2
                },
                600:{
                    slidesPerView : 3
                },
                900:{
                    slidesPerView : 4 
                }
             }}
        >
            <SwiperSlide><NextImage src="/img/landingpage/arsip-ig1.png" width="100%" height="100%" alt="/" layout="responsive"/></SwiperSlide>
            <SwiperSlide><NextImage src="/img/landingpage/arsip-ig1.png" width="100%" height="100%" alt="/" layout="responsive"/></SwiperSlide>
            <SwiperSlide><NextImage src="/img/landingpage/arsip-ig1.png" width="100%" height="100%" alt="/" layout="responsive"/></SwiperSlide>
            <SwiperSlide><NextImage src="/img/landingpage/arsip-ig1.png" width="100%" height="100%" alt="/" layout="responsive"/></SwiperSlide>
            <SwiperSlide><NextImage src="/img/landingpage/arsip-ig1.png" width="100%" height="100%" alt="/" layout="responsive"/></SwiperSlide>
            <SwiperSlide><NextImage src="/img/landingpage/arsip-ig1.png" width="100%" height="100%" alt="/" layout="responsive"/></SwiperSlide>
        </Swiper>
    
      )
  
}

export default Carousel