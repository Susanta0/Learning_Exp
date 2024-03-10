import React from 'react'
import video from "../assets/video1.mp4"
import poster from "../assets/Group/Group3.png"
export const Why = () => {
    const para="At Learning Exp. We Are Committed To Providing You With A Superior Learning Experience That Empowers You To Achieve Your Goals. Join Us Today And Embark On A Journey Of Discovery, Growth, And Success."
  return (
    <>
    <div className=' mt-5'>
        <h1 className='text-center text-3xl font-bold'>Why Us</h1>
        <p className=' mt-3 px-[34em] font-semibold text-sm text-center text-[#707070]'>{para}</p>
        <div className=' flex px-[15em] items-center gap-10 mt-8
        '>
            <div className=''>
                <div className=' w-[25em] h-[15em] flex items-center'
                >
                    <video className='w-[24em] m-auto rounded-tl-3xl' controls poster={poster}>
                        <source src={video} />
                    </video>
                </div>
            </div>
            <div className=''>
                <h1 className='text-4xl font-bold'>Crafting Your Dream Career: Building a Path You Love with us</h1>
                <p className='mt-4 text-[#707070] text-sm font-semibold'>{para}</p>
                <p className='mt-5 text-[#707070] text-sm font-semibold'>Our Platform Is Designed To Empower Learners Like You To Excel In Today’s Dynamic World.</p>
                <button className='mt-5 border px-10 text-sm py-2 rounded-full bg-[#FFEC05] font-semibold'>Get More</button>
            </div>
        </div>
    </div>
    </>
  )
}
