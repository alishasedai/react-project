import React, { useState } from 'react'
import { icons } from '../assets/assets';

const ServiceCard = ({service,index}) => {

    const [position,setPosition] = useState({x:0, y :0})
    const Icon = service.icon;
  return (
   
        <div className=' relative overflow-hidden w-full mt-1 rounded-x1 border border-yellow-800 dark:border-gray-100 dark:rounded-lg bg-red-900  dark:text-black shadow-2x1 shadow-gray-100 shadow-white/10 mr-20'
>

<div className=' flex items-center gap-x-6 p-8 hover:p-7.5 hover:m-0.5 transition-all rounded-[10px] bg-white dark:bg-gray-900 z-10 relative'>

   <div className="bg-gray-200 dark:bg-gray-200 dark:text-white rounded-full w-20 h-20 flex items-center justify-center ">
  <Icon className="text-4xl dark:text-purple-400 text-blue-600" size={30}/>
</div>

    <div className='flex-2 dark:text-white'>
        <h3 className="font-bold">{service.title}</h3>
        <p className='text-sm mt-2'>{service.description}</p>
    </div>
</div>

    </div>
  )
}

export default ServiceCard

