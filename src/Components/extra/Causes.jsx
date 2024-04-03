import React from 'react'
import data from "../../Utils/Cards.json"

export default function Causes() {
  console.log(data);
  return (
    <>
      <div className='bg-red-00 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 p-16'>

        {
          data.map((box, index) => {
            return (
              <div key={index} className='w-[100%] bg-k-600 bg-[#f1ecec] p-4'>
                <img className='w-[100%] rounded-lg' src={box.img} alt="image" />
                <div className='w-[100%] h-[90px] flex justify-center mt-[-50px]'>
                  <h3 className='w-[26%] h-[92px] rounded-[100%] bg-[#f84d42] text-center pt-7 text-3xl hidden sm:hidden md:block'>{box.h3}</h3>
                </div>
                <h2 className='text-3xl py-2 font-bold text-gray-600'>{box.title}</h2>
                <h1 className=' text-[20px] text-[#f84d42] font-bold'>{box.h1}<br></br> {box.h2}</h1>
                <h4 className='text-[20px] text-green-500 font-bold mt-[-30px]'>{box.h4}<br></br>{box.h5}</h4>
                <des className="text-[18px]">{box.des}</des>
                <button className='bg-green-500 w-[60%] h-[60px] rounded-xl hover:bg-gradient-to-r from-purple-500 to-pink-500'>{box.button}</button>

              </div>
            )
          })
        }
      </div>

    </>
  )
}
