import React from 'react'
import Title from './Title'
import { assets,images,works } from '../assets/assets'

const OurWork = () => {
     const workData = [
        {
            title : "Mobile app marketing",
            description : "We turn the bold ideas into powerful digital solutions that connect, engage..",
            image : works.mobileApp
          
        },
            {
            title : "Dashboard Management",
            description : "We help you execute your plan and deliver results",
            image : works.dashboard
          
        },
            {
            title : "Fitness app promotion",
            description : "We help you create a marketing strategy that drives results.",
            image : works.fitness
        },

    ]
  return (
    <div className='flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white'>
        <Title title='Our latest work'
        desc='From strategy to execution, we craft digital solutions that move your business forward.'/>
      
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl'>
            {workData.map((work,index) => {
                return <div className='border-bottom border-red-800 hover:scale-102 duration-500 transition-all cursor-pointer'>
                    <img src={work.image} className='w-full rounded-xl ' alt="" />
                    <h3 className='mt-2 text-xl font-bold '>{work.title}</h3>
                    <p className='mt-3 text-sm'>{work.description}</p>
                </div>

            })}
        </div>
    </div>
  )
}

export default OurWork
