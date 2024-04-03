import React, { useState } from 'react'
import Features from '../Layout/Features';
import Education from "../Layout/Education"
import Volunteers from './Volunteers';
export default function About() {
  const [Click, setCilck] = useState();
  return (
    <>
      <div className='bg-[#f3f0f0] w-full py-8 '>
        <div className='w-full py-8 grid sm:grid-cols-1 md:grid-cols-2'>
          <div className='w-[100%] py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2'>
            <div className='w-[90%] py-6 mx-6'>
              <img className='w-[90%] pl-4 rounded-2xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout1.a17e5ea9.jpg&w=384&q=75" alt="" />
            </div>
            <div className='lg:mt-16 mt-3 sm:ml-3'>
              <img className='w-[90%] rounded-2xl ' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout2.4d825a81.jpg&w=384&q=75" alt="" />
            </div>
            <div className='bg-white w-[100%] text-center rounded-xl h-[100px] my-4 ml-6 hidden sm:hidden md:block'>
              <p className='text-[20px] font-semibold'>We Complet 15000 + Projects</p>
              <p>Donet For Charity</p>
            </div>
            <div className='w-[90%] lg:mt-[-30px] mt-2 '>
              <img className='w-[90%] rounded-2xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fabout3.cdd7f5c9.jpg&w=384&q=75" alt="" />
            </div>
          </div>
          <div className='w-[90%] py-10'>
            <h2 className='text-3xl pl-5'>about us</h2>
            <h1 className='text-5xl font-semibold leading-tight pl-3 py-4'>Check What Makes Us Different Than Others</h1>
            <p className='text-[18px] pl-4'>There are many variations of passages of orem Ipsum available, but the majority have suffered alteration in some form, by cted ipsum dolor sit amet, consectetur adipisicing elit, sed do usmod mponcid idunt ut labore et dolore magna aliqua.
              <div className=''>
                <p className='flex text-3xl items-center pt-7 gap-3 font-bold'><img src="https://charite-nextjs.vercel.app/_next/static/media/circle-red.8f2be425.png" alt="" />876,000</p>
                <p className='pl-20 mt-[-20px] text-gray-500'>Raised by 78,000 people in one year</p>
                <p className='font-bold gap-3 py-8 flex text-4xl items-center pt-3'><img src="https://charite-nextjs.vercel.app/_next/static/media/circle-green.0d1b52d9.png" alt="" />45,000</p>
                <p className='pl-20 mt-[-50px] text-gray-500'>Volunteers are available to help you</p>
              </div>
            </p>
            <button className='px-5 rounded-xl h-[50px] bg-red-500 ml-6 text-white'>DIDCOVER MORE</button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className='bg-[#272727] w-full py-[30px] mt-4'>
        <div className='w-full py-[30px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
          <div className='w-[90%] ml-10'>
            <h2 className=' text-2xl text-red-600 font-semibold'>Why Choose Us</h2>
            <h1 className='text-4xl font-semibold leading-tight text-white py-5'>Trusted Non Profit Donation Center</h1>
            <div className='text-white py-5 '>
              <button className='w-[23%] bg-red-500 h-[50px] text-[14px] sm:text-[25px] m-2 rounded-xl'
                onClick={() => setCilck("Our Mission: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random aset words which don't look even slightly believable.")}
              >Mission</button>
              <button className='w-[22%] h-[50px] bg-green-500 text-[15px] sm:text-[25px] m-2 rounded-xl'
                onClick={() => setCilck(" Vission: There are many variations of passages of Lorem Ipsum available, random aset words which don't look even slightly believable, or but the majority have suffered alteration in some form, by injected humour.")}
              >Vission</button>
              <button className='w-[22%] h-[50px] bg-cyan-500 text-[15px] sm:text-[25px] m-2 rounded-xl'

                onClick={() => setCilck("Our Velu: There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or random aset words which don't look even slightly believable.")}
              >Velu</button>

              <h1>{Click}</h1>
            </div>
          </div>
          <div className='w-[90%] flex items-center justify-center ml-5 mt-3'>
            <iframe className='w-[90%] h-[200px] sm:h-[300px] sm:w-[90%]' src="https://www.youtube.com/embed/tUP5S4YdEJo?si=2wV6Tyla-9QkKQ-1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>
      {/*  */}

      <div className='bg-[#e0e0e0] py-16 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 p-[30px]'>
          <div className='w-[100%]  bg-white flex justify-center py-1 rounded-3'>
            <div className='rounded-lg p-5 '>
              <img className='w-[100%] h-[240px] rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcause-three3.150efef6.jpg&w=640&q=75" alt="" />
              <h2 className='text-[26px] font-semibold'>Water For All Children</h2>
              <p className='py-2 text-gray-500'>You believe, as we do, that every child deserves a future. Every last child.</p>
              <p className='py-4 text-gray-500 font-semibold'>Goal : $87689<span className='ml-12'>Raised : $87689</span></p>
              <input className='w-full' type="range" name="" id="" />
              <div className='flex items-center justify-center'>
                <button className='bg-green-500 hover:bg-gradient-to-r from-violet-500 to-fuchsia-500 w-[60%] h-[50px] rounded-xl my-3'>DONATION NOW</button>
              </div>
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
                <button className='bg-orange-500 hover:bg-gradient-to-r from-sky-500 to-indigo-500 w-[60%] h-[50px] my-3 rounded-xl'>DONATION NOW</button>
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
                <button className='bg-cyan-500 hover:bg-gradient-to-r from-purple-500 to-pink-500 w-[60%] h-[50px] my-3 rounded-xl'>DONATION NOW</button>
              </div>
            </div>
          </div>
        </div>
      </div>
{/*  */}
      <div className='w-full py-6'>
        <div className='w-[100%] py-6 flex flex-col sm:flex-row'>

          <div className='brightness-50 bg-[url("https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffaq-video.4afc9e6b.jpg&w=750&q=75")] w-[100%] sm:w-[30%]'>
            <Education />
          </div>

          <div className=' bg-[url("https://charite-nextjs.vercel.app/assets/img/background/feature-bg.jpg")] w-[100%] sm:w-[60%] md:w-[70%]'>
            <div className='bg-ornge-500 w-[100%] py-6 px-6'>
              <h3 className='text-red-600 text-[25px]'>Our Features</h3>
              <h1 className='text-5xl font-semibold text-gray-700 py-3'>How Could You Help?</h1>
              <p className='pt-4 text-[18px] text-gray-700'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br></br> Rem autem voluptatem obcaecati consectetur adipisicing</p>
            </div>
            <div className='w-[100%]'>
              <Features />

            </div>

          </div>
        </div>

      </div>
      <Volunteers />

    </>
  )
}
