import React from 'react'
import { assets , icons} from '../assets/assets'
import Title from './Title'
import ServiceCard from './ServiceCard'

const Services = () => {
    const servicesData = [
        {
            title : 'Advertising',
            description : 'We turn bold ideas into powerful digital solutions that connect, engage..',
            icon : icons.ad
        },
          {
            title : 'Content Marketing',
            description : 'We help you to execute your plan and deliver results.',
            icon : icons.marketing
        },
          {
            title : 'Content Writing',
            description : 'We help you to create the marketing strategy that drives results.',
            icon : icons.writing
        },
          {
            title : 'Social Media',
            description : 'We help you build a  strong social media presence and engage with your audience',
            icon : icons.facebook
        }
    ]
  return (
    <div id='services' className='relative flex flex-col items-center gap-7 px-5 sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white'>
      <img src={assets.gradient1} alt="" className='absolute h-40 w-240 left-40 top-10 -z-1 dark:hidden' />
      <Title title='How can we help?'
      desc='From strategy to execution, we craft digital solutions that move your business forward'/>
    <div className='w-240 ml-3 flex flex-col mt-4 md:grid gap-10 grid-cols-2'>
        {servicesData.map((service,index) => {
            return <ServiceCard key={index} service={service} index={index}/>
        })}
    </div>
    </div>
  )
}

export default Services
