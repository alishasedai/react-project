import React from 'react'
import { assets } from '../assets/assets'

const Title = ({title,desc}) => {
   
  return (
    <div className='text-center'>
      <h2 className='text-5xl sm:text-3xl font-medium mb-6'>{title}</h2>
      <p className='max-w-lg text-gray-500 dark:text-white '>{desc}</p>
    </div>
  )
}

export default Title
