import React from 'react'
import SwiperSlide from '../Layout/Swiper'
import About from './About'


export default function Home() {
  return (

    <>
      <SwiperSlide />
      <>
        <div className='bg-[#e0e0e0] py-16'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
            <div className=''>
              <div className='rounded-lg'>
                <h4 className='text-[22px] text-red-600 font-serif py-3'>Urgent cause</h4>
                <h1 className='text-4xl font-bold text-gray-700 py-4'>We Help More Than 9k Children Every Year</h1>
                <p className='text-gray-500 py-3'>BigHearts is the largest global crowdfunding community connecting nonprofits, donors, and companies in nearly every country. We help nonprofits from</p>
                  <button className='bg-teal-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 w-[60%] h-[50px] my-6 rounded-xl '>DONATION NOW</button>
              </div>
            </div>

            <div className='w-[100%]  bg-white flex justify-center py-1'>
              <div className='rounded-lg p-5 '>
                <img className='w-[100%] rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcause1.b95189dd.jpg&w=384&q=75" alt="" />
                <h2 className='text-[26px] font-semibold'>Water For All Children</h2>
                <p className='py-2 text-gray-500'>You believe, as we do, that every child deserves a future. Every last child.</p>
                <p className='py-4 text-gray-500 font-semibold'>Goal : $87689<span className='ml-12'>Raised : $87689</span></p>
                <input className='w-full' type="range" name="" id="" />
                <div className='flex items-center justify-center'>
                  <button className='bg-red-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[60%] h-[50px] rounded-xl my-3'>DONATION NOW</button>
                </div>
              </div>
            </div>

            <div className='w-full bg-white'>
              <div className='rounded-lg p-5'>
                <img className='w-[100%] rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcause2.6118214a.jpg&w=384&q=75" alt="" />
                <h2 className='text-[26px] font-semibold'>Water For All Children</h2>
                <p className='py-2 text-gray-500'>You believe, as we do, that every child deserves a future. Every last child.</p>
                <p className='py-4 text-gray-500 font-semibold'>Goal : $87689<span className='ml-12'>Raised : $87689</span></p>
                <input className='w-full' type="range" name="" id="" />
                <div className='flex items-center justify-center'>
                  <button className='bg-green-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 w-[60%] h-[50px] my-3 rounded-xl'>DONATION NOW</button>
                </div>
              </div>
            </div>

            <div className='w-full bg-white'>
              <div className='rounded-lg p-5'>
                <img className='w-[100%] rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcause3.fc9ae276.jpg&w=384&q=75" alt="" />
                <h2 className='text-[26px] font-semibold'>Water For All Children</h2>
                <p className='py-2 text-gray-600'>You believe, as we do, that every child deserves a future. Every last child.</p>
                <p className='py-4 text-gray-500 font-semibold'>Goal : $87689<span className='ml-12'>Raised : $87689</span></p>
                <input className='w-full' type="range" name="" id="" />
                <div className='flex items-center justify-center'>
                  <button className='bg-orange-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 w-[60%] h-[50px] my-3 rounded-xl'>DONATION NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <About/>
      </>
    </>
  )
}
