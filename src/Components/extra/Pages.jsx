import React from 'react'

export default function Pages() {
  return (
    <>
      <div className='bg-red w-full grid grid-cols-1 sm:grid-cols-2 px-8 md:grid-cols-4 gap-3 py-6'>
        <div className='bg-green-500 bg-[url("https://charite-nextjs.vercel.app/_next/static/media/feature1.ac8caca4.jpg")] opacity-70'>
          <div className='w-[100%] h-[350px] bg-red-700 opacity-80 text-white flex flex-col justify-center items-center'>
            <div className='w-[70px] h-[70px] rounded-full bg-white overflow-hidden '>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-left-circle.7d915153.jpg&w=256&q=75" alt="" />
            </div>
            <h1 className='text-3xl py-2 font-bold'>Become A Volunteer</h1>
              <p className='py-3'>Morem ipsum is simply free text <br></br> amet  consectetuer adipiscing elit</p>
              <button className='bg-white text-red-700 p-3 rounded-xl font-bold'>JOIN US NOW</button>
          </div>
        </div>
        <div className='bg-pink-600 bg-[url("https://charite-nextjs.vercel.app/_next/static/media/feature2.77a2a24e.jpg")]'>
          <div className='w-[100%] h-[350px] bg-green-600 opacity-80 text-white flex flex-col justify-center items-center'>
          <div className='w-[70px] h-[70px] rounded-full bg-white overflow-hidden'>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-left.698c8767.jpg&w=640&q=75" alt="" />
            </div>
            <h1 className='text-3xl py-2 font-bold'>Become A Volunteer</h1>
              <p className='py-3'>Morem ipsum is simply free text <br></br> amet  consectetuer adipiscing elit</p>
              <button className='bg-white text-red-700 p-3 rounded-xl font-bold'>JOIN US NOW</button>
          </div>
        </div>
        <div className='bg-orange-500 bg-[url("https://charite-nextjs.vercel.app/_next/static/media/feature3.3cc2c570.jpg")]'>
          <div className='w-[100%] h-[350px] bg-yellow-300 opacity-80 text-white flex flex-col justify-center items-center'>
          <div className='w-[70px] h-[70px] rounded-full bg-white overflow-hidden'>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvalunteer6.b768126f.jpg&w=384&q=75" alt="" />
            </div>
            <h1 className='text-3xl py-2 font-bold'>Become A Volunteer</h1>
              <p className='py-3'>Morem ipsum is simply free text <br></br> amet  consectetuer adipiscing elit</p>
              <button className='bg-white text-red-700 p-3 rounded-xl font-bold'>JOIN US NOW</button>
          </div>
        </div>
        <div className='bg-blue-600 h-[350px] bg-[url("https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fevent-three7.350de92f.jpg&w=384&q=75")] bg-cover'>
          <div className='w-[100%] h-[350px] opacity-80 bg-cyan-600 text-white flex flex-col justify-center items-center'>
          <div className='w-[70px] h-[70px] rounded-full bg-white overflow-hidden'>
            <img src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-two4.d1593b70.jpg&w=384&q=75" alt="" />
            </div>
            <h1 className='text-3xl py-2 font-bold'>Become A Volunteer</h1>
              <p className='py-3'>Morem ipsum is simply free text <br></br> amet  consectetuer adipiscing elit</p>
              <button className='bg-white text-red-700 p-3 rounded-xl font-bold'>JOIN US NOW</button>
          </div>
        </div>
      </div>
        {/*  */}
        <div className='w-full flex flex-col sm:flex-row py-20 '>
                <div className='w-[100%] sm:w-[50%]'>
                    <div className='w-[100%]'>
                        <img className='p-8' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvalunteer-left.415cdfdb.png&w=828&q=75" alt="" />
                    </div>
                </div>

                <div className='w-[100%] sm:w-[50%] py-6 '>
                    <h3 className='text-2xl text-red-400 font-serif'>Our Volunteer</h3>
                    <h1 className='text-4xl py-3'>Become A Volunteer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className='w-[100%] flex flex-col sm:flex-row justify-around py-5'>
                        <div className='w-[100%] sm:w-[45%] py-4 ml-2'>
                            <label class="block text-[16px] font-serif pl-2 ">
                                Your Name
                            </label>
                            <input class="pl-2  py-3 w-[90%] bg-[#fff3ed] rounded-xl border-solid border-gray-500 border-[1px]" placeholder='Your Name' />

                            <label class="block text-[16px] font-serif pl-2 mt-3">
                                Phone No.
                            </label>
                            <input class="py-3 w-[90%] bg-[#fff3ed] rounded-xl border-solid border-gray-500 border-[1px] pl-2" placeholder='Phone No.' />
                        </div>
                        <div className='w-[100%] sm:w-[45%] py-4 ml-2'>
                            <label class="block text-[16px] font-serif pl-2 ">
                                Your E-mail
                            </label>
                            <input class="py-3 w-[90%] bg-[#fff3ed] rounded-xl border-solid border-gray-500 border-[1px] pl-2" placeholder='E-mail' />

                            <label class="block text-[16px] font-serif pl-2 mt-3">
                                Date Of Birth
                            </label>
                            <input className=' py-3 px-2 w-[90%] rounded-xl bg-[#fff3ed] border-solid border-gray-500 border-[1px]' type="date" name="" id="" />
                        </div>
                    </div>
                    <label className='block ml-6'>Massage</label>
                    <input className='pl-2 w-[90%] ml-4 py-6 rounded-xl bg-[#fff3ed] border-solid border-gray-500 border-[1px]' type="Massage" placeholder='Massage' />

                    <button className='bg-red-500 w-[30%] h-[50px] mt-9 ml-5 rounded-xl font-semibold hover:bg-green-400'>SEND US A MASSAGE</button>
                </div>
            </div>
    </>
  )
}
