import React from 'react'

export default function Events() {
  return (
    <>
      <div className='bg-[url("https://charite-nextjs.vercel.app/assets/img/background/feature-bg.jpg")] w-full py-7'>
        <h3 className='text-2xl text-red-500 text-center'>Feedback</h3>
        <h1 className='text-4xl text-gray-700 font-bold text-center py-3'>What Say Our Client</h1>
        <p className='text-center py-4 text-gray-600 text-[20px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit Rem autem voluptate<br></br> Rem autem voluptatem obcaecati consectetur adipisicing</p>
        <div className='py-14 flex flex-col sm:flex-row justify-evenly px-7 gap-14'>
          <div className='bg-white sm:w-[30%] flex-col items-center flex rounded-md'>
            <div className='w-[100px] overflow-hidden rounded-[100%] -mt-12 border-solid border-4 border-red-500 '>
              <img className='w-[100%]' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor1.72b2c8e0.jpg&w=96&q=75" alt="" />

            </div>
            <h1 className='text-3xl text-gray-700 font-bold py-3'>Jenny Wilson</h1>
            <p className='text-gray-600 text-2xl'>Doner, Canada</p>
            <h3 className='p-6 text-center text-[20px] text-gray-500'>I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro</h3>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquote-icon1.2d111244.png&w=64&q=75" alt="" />
          </div>
          <div className='bg-white  sm:w-[30%]  flex flex-col items-center rounded-md'>
            <div className='w-[100px] overflow-hidden rounded-[100%] -mt-12 border-solid border-4 border-green-500'>
              <img className='w-[100%]' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor2.05dcd788.jpg&w=96&q=75" alt="" />
            </div>
            <h1 className='text-3xl text-gray-700 font-bold py-3'>Wade Warren</h1>
            <p className='text-gray-600 text-2xl'>Doner, Canada</p>
            <h3 className='p-6 text-center text-[20px] text-gray-500'>I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro</h3>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquote-icon2.190ec999.png&w=64&q=75" alt="" />

          </div>
          <div className='bg-white w-[100%] sm:w-[30%] flex flex-col items-center rounded-md'>
            <div className=' overflow-hidden rounded-[100%] -mt-12 border-solid border-4 border-yellow-500'>
              <img className='w-[100%]' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fauthor3.6755daf3.jpg&w=96&q=75" alt="" />
            </div>
            <h1 className='text-3xl text-gray-700 font-bold py-3'>Jenny Wilson</h1>
            <p className='text-gray-600 text-2xl'>Doner, Canada</p>
            <h3 className='p-6 text-center text-[20px] text-gray-500'>I was very impresed by thcompanyservice lore ipsu isimply free text used by copy typing refreshing. Neque porro</h3>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fquote-icon3.75fa5b06.png&w=64&q=75" alt="" />
          </div>
        </div>
      </div>
       {/*  */}
       
       <div className='py-6'>
            <div className='flex flex-col sm:flex-row px-12 gap-6'>
                  <div className='w-[100%] sm:w-[60%]'>
                   <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio1.0840294a.jpg&w=640&q=75" alt="" />
                  </div>
                  <div className='w-[100%] sm:w-[60%]'>
                   <img className='rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio2.6ab4185c.jpg&w=640&q=75" alt="" />
                  </div>
                  <div className='w-[100%] sm:w-[60%]'>
                     <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio3.d78077f7.jpg&w=640&q=75" alt="" />
                  </div> 
            </div>
            <div className='flex flex-col sm:flex-row px-12 gap-6 py-6'>
                <div className='w-[100%] sm:w-[60%]'>
                     <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio4.3e258dab.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='w-[100%] sm:w-[60%]'>
                       <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio5.d5248081.jpg&w=640&q=75" alt="" />
                    </div>
                    <div className='w-[100%] sm:w-[60%]'>
                      <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportfolio6.1bee4f11.jpg&w=640&q=75" alt="" />
                    </div>
                </div>
       </div>
    </>
  )
}
