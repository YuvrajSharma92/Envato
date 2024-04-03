import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';

import {Autoplay, Pagination} from "swiper/modules"

export default function App() {
  return (
    <>
      <Swiper
      centeredSlides={true}
      autoplay={{
        delay: 1000,
      }}
      modules={[Autoplay,Pagination]}
        slidesPerView={
            window.screen.width > 768 ? 3: window.screen.width > 640 ? 2 : 1
        }
        spaceBetween={30}
        loop= {true}
       
      >
        <SwiperSlide>
            <div className='w-[100%] p-5 md:mt-[-13px]'>
               <img src="https://charite-nextjs.vercel.app/_next/static/media/circle-red.8f2be425.png" alt="" />
               <h1 className='md:text-3xl font-bold text-gray-600 py-3'>Start Donating</h1>
               <p className='text-gray-600 text-[18px]'>Lorem ipsum dolor sit amet consect cingo eiusmod tempor sentence structures to generate Lorem Ipsum</p>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] p-5 md:mt-[-13px]'>
          <img src="https://charite-nextjs.vercel.app/_next/static/media/circle-green.0d1b52d9.png" alt="" />
          <h1 className='md:text-3xl font-bold text-gray-600 py-3'>Quick Fundraising</h1>
          <p className='text-gray-600 text-[18px]'>Lorem ipsum dolor sit amet consect cingo eiusmod tempor sentence structures to generate Lorem Ipsum</p>
         </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] p-5 md:mt-[-13px]'>
        <img src="https://charite-nextjs.vercel.app/_next/static/media/circle-red.8f2be425.png" alt="" />
        <h1 className='md:text-3xl font-bold text-gray-600 py-3'>Become an volunteer</h1>
          <p className='text-gray-600 text-[18px]'>Lorem ipsum dolor sit amet consect cingo eiusmod tempor sentence structures to generate Lorem Ipsum</p>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='w-[100%] p-5 md:mt-[-13px]'>
        <img src="https://charite-nextjs.vercel.app/_next/static/media/circle-green.0d1b52d9.png" alt="" />
        <h1 className='md:text-3xl font-bold text-gray-600 py-3'>Quick Fundraising</h1>
          <p className='text-gray-600 text-[18px]'>Lorem ipsum dolor sit amet consect cingo eiusmod tempor sentence structures to generate Lorem Ipsum</p>
        </div>
        </SwiperSlide>
       
      </Swiper>
    </>
  );
}

