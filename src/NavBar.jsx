import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavBar() {
    const [open, setOpen] = useState(false)
    const location = useLocation().pathname;
    const navigate = useNavigate();
  return (
   <>
{/*  */}
<div>
   <div className='bg-gray-950 w-full h-[60px] flex items-center justify-around'>
      <div className='w-[20%] h-[50px] hidden sm:hidden md:block'>
        <p className='text-white p-3'><span className='text-red-700 '>HI,</span>Good Afternoon Dude!</p>
      </div>
      <div className='w-[20%] h-[50px] hidden sm:hidden md:block'>
      <p className='text-white p-3'><span className='text-red-800'><i class="bi bi-geo-alt-fill"></i></span>Shiloh, Hawaii 81063</p>
      </div>

      <div className='w-[50%] h-[50px] text-white'>
      <p className='p-3 flex justify-end gap-3 '> Follow Us- <span>
      <i className="bi bi-facebook"> </i>
      <i className="bi bi-twitter"> </i>
      <i className="bi bi-instagram"> </i>
      <i className="bi bi-whatsapp"> </i>
        </span></p>
      </div>
  </div>
</div>
{/*  */}

{/*  */}
<nav className="bg-gray-100 py-2 sticky top-0 z-[4]">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.c577ead5.png&w=256&q=75" className="h-16 pt-4" alt="" />
   <button
   onClick={()=>{
    setOpen(!open)
   }}
   >

   <i className={`md:hidden text-[34px] pr-5 bi bi-${
    open ? "x" : "list"
   }`}>

   </i>
   </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
      <ul className="flex flex-col font-medium rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
        <Link to={"/"} className={`block py-2 px-3 md:p-0 ${
            location == "/" ? "text-blue-600" :"text-black"
          }`}>Home
        </Link>
        <Link to={"/causes"} 
         className={`block py-2 px-3 md:p-0 ${
            location == "/causes" ? "text-blue-600" :"text-black"
          }`}>Causes
        </Link>
        <Link to={"/events"}
          className={`block py-2 px-3 md:p-0 ${
            location == "/events" ? "text-blue-600" :"text-black"
          }`}>Events
        </Link>
        <Link to={"/blog"}
           className={`block py-2 px-3 md:p-0 ${
            location == "/blog" ? "text-blue-600" :"text-black"
          }`}>Blog
        </Link>
        <Link to={"/pages"}
        className={`block py-2 px-3 md:p-0 ${
            location == "/pages" ? "text-blue-600" :"text-black"
          }`}>Pages
        </Link>
        <Link to={"/protfolio"}
       className={`block py-2 px-3 md:p-0 ${
            location == "/protfolio" ? "text-blue-600" :"text-black"
          }`}>PortFolio
        </Link>
      </ul>
    </div>

    <div className={`w-full ${open? "block" : "hidden"}`}>
      <ul className="flex flex-col font-medium mt-4 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row">
        <Link to={"/"}
         className={`block py-2 px-3 md:p-0 ${
            location == "/" ? "text-blue-600" :"text-black"
          }`}>Home
        </Link>
        <Link to={"/causes"}
         className={`block py-2 px-3 md:p-0 ${
            location == "/causes" ? "text-blue-600" :"text-black"
          }`}>Causesevents
        </Link>
        <Link to={"/events"}
         className={`block py-2 px-3 md:p-0 ${
            location == "/events" ? "text-blue-600" :"text-black"
          }`}>Events
        </Link>
        <Link to={"/blog"}
        className={`block py-2 px-3 md:p-0 ${
            location == "/blog" ? "text-blue-600" :"text-black"
          }`}>Blog
        </Link>
        <Link to={"/pages"}
          className={`block py-2 px-3 md:p-0 ${
            location == "/pages" ? "text-blue-600" :"text-black"
          }`}>Pages
        </Link>
        <Link to={"/protfolio"}
         className={`block py-2 px-3 md:p-0 ${
            location == "/protfolio" ? "text-blue-600" :"text-black"
          }`}>PortFolio
        </Link>
      </ul>
    </div>
    <button className='bg-[#f84d42] w-[12%] h-[47px] rounded-xl text-white font-bold hidden sm:hidden md:block'>DONATE NOW</button>
  </div>
</nav>

   </>
  )
}
