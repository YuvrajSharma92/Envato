import React from 'react'

export default function Footer() {
  return (
    <>
      <div className='w-full py-14 bg-[#f3eded] mt-5'>
        <div className='w-full flex flex-col sm:flex-row justify-evenly'>
          <div className='w-[100%] sm:w-[24%] py-4'>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c577ead5.png&w=256&q=75" alt="" />
            <p className='text-[20px]'>Wimply dummy text of the priatype industry orem Ipsum has Maecenas quis eros at ante lacinia efficitur.</p>
            <ul className='flex justify-evenly py-6 '>
              <li className='w-[15%] hover:bg-pink-600 h-[50px] bg-slate-500 rounded-[100%] text-[30px] flex items-center justify-center'><i class="bi bi-facebook"></i></li>
              <li className='w-[15%] h-[50px] bg-slate-500 hover:bg-pink-600 rounded-[100%] text-[27px] flex items-center justify-center'><i class="bi bi-instagram"></i></li>
              <li className='w-[15%] h-[50px] bg-slate-500 rounded-[100%] hover:bg-pink-600 text-[27px] flex items-center justify-center'><i class="bi bi-linkedin"></i></li>
              <li className='w-[15%] hover:bg-pink-600 h-[50px] bg-slate-500 rounded-[100%] text-[27px] flex items-center justify-center'><i class="bi bi-twitter"></i></li>
            </ul>
          </div>
          <div className='w-[100%] sm:w-[23%]'>
            <ul className='text-[20px] pl-5 py-4 cursor-pointer'>
              <h1 className='text-3xl'>About</h1>
              <li className='hover:text-red-600'>Home</li>
              <li className='hover:text-red-600'>About Us</li>
              <li className='hover:text-red-600'>Donation</li>
              <li className='hover:text-red-600'>Event</li>
              <li>Features</li>
            </ul>
          </div>
          <div className='w-[100%] sm:w-[23%]'>
            <ul className='text-[20px] pl-5 py-4 cursor-pointer'>
              <h1 className='text-3xl'>Quick links</h1>
              <li className='hover:text-red-600'>Causes</li>
              <li className='hover:text-red-600'>About Us</li>
              <li className='hover:text-red-600'>New campaign</li>
              <li className='hover:text-red-600'>Site map</li>
              <li className='hover:text-red-600'>Stories</li>
            </ul>
          </div>
          <div className='w-[100%] sm:w-[23%]'>
            <ul className='text-[20px] pl-5 py-3 cursor-pointer'>
              <h1 className='text-3xl'>Explore</h1>
              <li className='hover:text-red-600'>Donate</li>
              <li className='hover:text-red-600'>Campaigns</li>
              <li className='hover:text-red-600'>Fundraise</li>
              <li className='hover:text-red-600'>Volunteers</li>
              <li className='hover:text-red-600'>Sponsors</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
