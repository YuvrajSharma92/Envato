import React, { useState } from 'react'

export default function PortFolio() {
 const [Click, setCilck] = useState ();

  return (
    <>
      <div className=' p-12 '>
        <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio-details.9b1b9946.jpg&w=1920&q=75" alt="" />
        <h1 className='text-5xl font-bold pt-7 text-gray-700 py-4 '>Helping Homeless People</h1>
        <p className='text-[18px] text-gray-600'>Suscipit nibh hendrerit vel. Mauris sapien neque, placerat ut dolor nec, egestas tincidunt felis. Sed in ornare quam, finibus aliquam justo. Duis eros quam, semper at libero sed, vehicula consequat arcu. In ornare, enim at egestas bibendum, ligula ante congue arcu, sed ornare sem nulla nec magna. Morbi faucibus sed ante eu bibendum. Phasellus posuere mauris risus, pharetra pellentesque turpis porta vel. Suspendisse aculis tempor. Quisque ullamcorper feugiat elit, ut mollis diam finibus quis. Praesent fringilla urna eu purus laoreet, ac faucibus dolor vehicula. Ut consectetur maximus cursus. Proin eu purus lectus. Mauris cursus elit eget mi sagittis volutpat. Duis fermentum a urna finibus malesuada. Quisque at lacus id dolor commodo rutrum. Nulla odio lacus, rhoncus vitae ultrices et, mattis ac nunc. Praesent venenatis dui in nibh interdum.</p>
        <p className='text-[18px] text-gray-600 pt-2'>luctus feugiat. Mauris vitae turpis eu ante blandit rutrum ut at lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer congue feugiat ligula varius vestibulum. Donec volutpat leo dui, in sodales dui euismod non. Praesent id libero at ligula</p>
      </div>
      {/*  */}
      <div className='flex flex-col items-center justify-center'>
        <div className='bg-gray-300 w-[80%] flex flex-col  items-center'>
          <img className='w-[15%] sm:w-[8%] md:w-[5%]' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquote-icon2.190ec999.png&w=64&q=75" alt="" />
          <p className='text-[20px] text-gray-600 font-serif px-3 text-center'>The UK’s largest campain groarequired to cringrequirefromJanuary Find out mabout our approac From shares hoppin centres and term deposits gravida porttitor. Donec scelerisque, tortor ut mollis mollis, tortor ante mattis model sentence structures, to generate Lorem Ipsum which looks reasonable.</p>

        </div>
      </div>
      {/*  */}
      <div className='bg-[#f3f1f1] w-full py-[30px] mt-4'>
        <div className='w-full py-[30px] grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2'>
          <div className='w-[90%] ml-10'>
            <h2 className=' text-2xl text-red-600 font-semibold'>Why Choose Us</h2>
            <h1 className='text-4xl font-semibold leading-tight py-5'>Trusted Non Profit Donation Center</h1>
            <div className='text-black font-serif  py-5 '>
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
    </>
  )
}
