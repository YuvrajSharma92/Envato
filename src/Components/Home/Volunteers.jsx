import React from 'react'

export default function Volunteers() {
    return (
        <>
            <div className='bg-[#e9e9e9] py-7 p-8'>
                <h4 className='text-red-500 text-center text-2xl font-bold'>Our Volunteers</h4>
                <h1 className='text-center text-4xl font-bold py-3 text-gray-700'>Meet With Volunteers</h1>
                <p className='text-center text-[20px] py-3 text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem <br></br> voluptatem obcaecati consectetur adipisicing</p>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 p-[30px]'>
                    <div className='w-[100%] flex justify-center py-1'>
                        <img className='rounded-lg' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-three1.acc03a85.jpg&w=384&q=75" alt="" />
                    </div>

                    <div className='w-[100%] flex justify-center'>
                        <img className='rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-three3.84140552.jpg&w=384&q=75" alt="" />
                    </div>

                    <div className='w-[100%] flex justify-center'>
                        <img className='rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-three2.05e9479e.jpg&w=384&q=75" alt="" />
                    </div>

                    <div className='w-[100%] flex justify-center'>
                        <img className='rounded-xl' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvolunteer-three4.7c7d5962.jpg&w=384&q=75" alt="" />
                    </div>
                </div>
            </div>
            {/*  */}

            <div className='bg-gray-800 w-full flex flex-col sm:flex-row py-20 '>
                <div className='w-[100%] sm:w-[50%] bg-[url("https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvalunteer-bg.8d1ff2c2.png&w=640&q=75")]'>
                    <div className='w-[100%]'>
                        <img className='p-8' src="https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvalunteer-left.415cdfdb.png&w=828&q=75" alt="" />
                    </div>
                </div>

                <div className='w-[100%] sm:w-[50%] bg-[url("https://charite-nextjs.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvalunteer-bg.8d1ff2c2.png&w=640&q=75")] py-6 text-white'>
                    <h3 className='text-2xl text-red-400 font-serif'>Our Volunteer</h3>
                    <h1 className='text-4xl py-3'>Become A Volunteer</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
                    <div className='w-[100%] flex flex-col sm:flex-row justify-around py-5'>
                        <div className='w-[100%] sm:w-[45%] py-4 ml-2'>
                            <label class="block text-[16px] font-serif pl-2 ">
                                Your Name
                            </label>
                            <input class="pl-2  py-3 w-[90%] rounded-xl bg-transparent border-solid border-gray-500 border-[1px]" placeholder='Your Name' />

                            <label class="block text-[16px] font-serif pl-2 mt-3">
                                Phone No.
                            </label>
                            <input class="py-3 w-[90%] bg-transparent rounded-xl border-solid border-gray-500 border-[1px] pl-2" placeholder='Phone No.' />
                        </div>
                        <div className='w-[100%] sm:w-[45%] py-4 ml-2'>
                            <label class="block text-[16px] font-serif pl-2 ">
                                Your E-mail
                            </label>
                            <input class="py-3 w-[90%] bg-transparent rounded-xl border-solid border-gray-500 border-[1px] pl-2" placeholder='E-mail' />

                            <label class="block text-[16px] font-serif pl-2 mt-3">
                                Date Of Birth
                            </label>
                            <input className=' py-3 px-2 w-[90%] rounded-xl bg-transparent border-solid border-gray-500 border-[1px]' type="date" name="" id="" />
                        </div>
                    </div>
                    <label className='block ml-6'>Massage</label>
                    <input className='pl-2 w-[90%] ml-4 py-6 rounded-xl bg-transparent border-solid border-gray-500 border-[1px]' type="Massage" placeholder='Massage' />

                    <button className='bg-red-500 w-[30%] h-[50px] mt-9 ml-5 rounded-xl font-semibold hover:bg-green-400 translate-[5px]'>SEND US A MASSAGE</button>
                </div>
            </div>
            {/*  */}

        </>
    )
}
