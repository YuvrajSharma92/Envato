import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
// import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2000,
                    // disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>

                    <div className='text-white' >
                        <h1 className='text-center text-5xl  pt-7'>Child <br></br> Education <br></br> Help</h1>
                        <p className=' text-center pt-5 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis.</p>
                        <button className='bg-red-400 py-3 px-7 mt-3 rounded-xl ml-5'>READ MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='text-white' >
                        <h1 className='text-center text-5xl  pt-7'>Child <br></br> Education <br></br> Help</h1>
                        <p className=' text-center pt-5 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis.</p>
                        <button className='bg-green-400 py-3 px-7 mt-3 ml-5 rounded-xl'>READ MORE</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>

                    <div className='text-white' >
                        <h1 className='text-center text-5xl  pt-7'>Child <br></br> Education <br></br> Help</h1>
                        <p className=' text-center pt-5 text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quis.</p>
                        <button className='bg-cyan-500 py-3 px-7 mt-3 ml-5 rounded-xl'>READ MORE</button>
                    </div>
                </SwiperSlide>

            </Swiper>
        
        </>
    );
}
