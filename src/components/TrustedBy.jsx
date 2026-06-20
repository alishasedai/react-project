import React from 'react'
import { assets, images } from '../assets/assets'

const TrustedBy = () => {
  return (
    <div className='dark:text-white flex flex-col items-center px-4 sm:px-12 lg:px-24 x;:px-40 gap-10 text-gray-700 '>
      <h3 className='font-semibold text-center text-xl '>Trusted By Leading Companies</h3>
      <div className='flex items-center justify-center flex-wrap gap-14 m-4'>
        {images.map((image,index) => {
          return <img key={index} src={image} className=' sm:max-h-20 dark:drop-shadow-4xl '  />
        })}
      </div>
    </div>
  )
}

export default TrustedBy
