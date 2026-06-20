import React from 'react'
import Title  from './Title'
import { assets,teamData } from '../assets/assets'

const Team = () => {
  return (
    <div id='team-work' className='flex flex-col items-center gap-7 px-2 sm:px-12 lg:px-24 xl:px-40 pt-15 text-gray-800 dark:text-white'>
      <Title title="Meet the team"
      desc="A passionate team of digital experts dedicated to your brand's success" />
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {teamData.map((team,index) => {
            return <div className='flex max-sm:flex-col items-center gap-5 p-4 rounded-xl border border-gray-300 dark:border-gray-500 bg-white dark:bg-gray-900 shadow-xl shadow-gray-100 dark:shadow-white/5 hover:scale-103 transition-all duration-400'>
                <img src={team.image} className='rounded-full w-12 h-12' alt="" />
                <div className='flex-1'>
                    <h3 className='font-bold text-sm'>{team.name}</h3>
                    <p className='text-xs'>{team.title}</p>
                </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default Team
