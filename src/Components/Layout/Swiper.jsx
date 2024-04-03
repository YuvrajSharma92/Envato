import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
export default function SwiperSlider() {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className=''>
            <div className='brightness-50 h-[400px] bg-[url("https://charite-nextjs.vercel.app/assets/img/hero/hero.jpg")] bg-cover bg-no-repeat bg-opacity-50'>
              <div className=' w-full'>
                <div className="px-6 text-center md:px-12 text-white">
                  <div className='px-6 text-center  md:px-12'>
                    <h1 className='md:6 text-[30px] sm:text-[50px] font-semibold'>
                      Donations Even If It Is A Small Can Bring Bigger
                    </h1>
                    <h3 className='py-4 text-[18px] sm:text-[30px]'>
                      Only when the society comes together and contributesIt was popularised in <br></br> the t we will be able to make an impact.
                    </h3>
                    <div className=' items-center justify-center hidden sm:hidden md:block'>
                      <button className='bg-[#f84d42] w-[10%] h-[50px] gap-[20px] text-center  sm:text-[14px] text-[21px] rounded-xl sm:m-5'>
                        DONATE NOW
                      </button>

                      <button className='bg-[#20b86d] w-[10%] h-[50px] text-center text-[21px] rounded-xl sm:text-[14px]'>
                        KNOW MORE
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-white'>
            <div className='h-[400px] bg-[url("https://charite-nextjs.vercel.app/assets/img/background/page-banner.jpg")] bg-cover bg-no-repeat opacity-90'>
              <div className=' w-full bg-fixed'>
                <div className='px-6 text-center  md:px-12'>
                  <h1 className='md:6  text-[30px] sm:text-[50px] font-semibold'>
                    Donations Even If It Is A Small Can Bring Bigger
                  </h1>
                  <h3 className='py-4  text-[18px] sm:text-[30px]'>
                    Only when the society comes together and contributesIt was popularised in <br></br> the t we will be able to make an impact.
                  </h3>
                  <div className=' items-center justify-center hidden sm:hidden md:block'>
                      <button className='bg-[#f84d42] w-[10%] h-[50px] gap-[20px] text-center  sm:text-[14px] text-[21px] rounded-xl sm:m-5'>
                        DONATE NOW
                      </button>

                      <button className='bg-[#20b86d] w-[10%] h-[50px] text-center text-[21px] rounded-xl sm:text-[14px]'>
                        KNOW MORE
                      </button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='text-white'>
            <div className='h-[400px] brightness-50 bg-[url("https://charite-nextjs.vercel.app/assets/img/hero/hero-three.jpg")] bg-cover bg-no-repeat bg-opacity-100 bg-black'>
              <div className='h-full w-full bg-fixed'>
                <div className="px-6 text-center md:px-12">
                  <div className='px-6 text-center  md:px-12'>
                    <h1 className='md:6  text-[30px] sm:text-[50px] font-semibold'>
                      Donations Even If It Is A Small Can Bring Bigger
                    </h1>
                    <h3 className='py-4  text-[18px] sm:text-[30px]'>
                      Only when the society comes together and contributesIt was popularised in <br></br> the t we will be able to make an impact.
                    </h3>
                    <div className=' items-center justify-center hidden sm:hidden md:block'>
                      <button className='bg-[#f84d42] w-[10%] h-[50px] gap-[20px] text-center  sm:text-[14px] text-[21px] rounded-xl sm:m-5'>
                        DONATE NOW
                      </button>

                      <button className='bg-[#20b86d] w-[10%] h-[50px] text-center text-[21px] rounded-xl sm:text-[14px]'>
                        KNOW MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
