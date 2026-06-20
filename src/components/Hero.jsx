import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <div id='hero' className='flex flex-col items-center gap-6 py-10 px-4 sm: px-12 lg:px-24 xl:px-40 text-center w-full overflow-hidden text-gray-700 dark:text-white '>
        <div className='inline-flex items-center gap-2 border border-gray-700 dark:border-white p-1.5 pr-4 rounded-full'>
            <div className="flex -gap-3">
                <img className="w-6 h-6 rounded-full ml-2 border border-white" src={assets.p} />
                <img className="w-6 h-6 rounded-full  border border-white" src={assets.p} />
                </div>
            <p className='text-xs font-medium'>Trusted by 10k+ people</p>
        </div>
        <h1 className='text-3xl sm:text-4xl md:text-5xl xl:text-[54px] font-medium xl:leading-[60px] max-w-5xl'>Turing Imagination into <br /> <span className='bg-gradient-to-r from-[#5044e5] to-[#4d8cea] bg-clip-text text-transparent '>digital</span> impact.</h1>

        <p id='our-work' className='text-sm sm:text-lg font-medium text-yellow-100 dark:text-white/75 max-w-lg pb-3'>Creating meaningful connections and turning big ideas into interactive digital experiences</p>
        <div className="realtive">
            <img  src={assets.girl} className='bg-transparent w-300 h-60' alt="" />
            <img src={assets.gradient} className='absolute w-320 h-77  sm:top-24 sm:right-0 -z-1 dark:hidden' alt="" />
        </div>
    </div>
  )
}

export default Hero
