import React from 'react'
import { assets } from '../assets/assets'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa";

const Footer = ({ theme }) => {
  return (
    <footer className='bg-[#c1dbf4] dark:bg-gray-900 pt-10 mt-20 sm:mt-10 px-4 sm:px-10 lg:px-24 xl:px-40'>

      {/* Footer Top */}
      <div className='flex justify-between lg:items-center max-lg:flex-col gap-10'>

        {/* Left Side */}
        <div className='space-y-5 text-sm text-gray-700 dark:text-gray-400'>
          <img
            src={theme === "dark" ? assets.logo_dark : assets.logo}
            alt="Logo"
            className='w-32 sm:w-44 h-20 object-contain'
          />

          <p className='max-w-md'>
            From strategy to execution, we craft digital solutions
            that move your business forward.
          </p>

          <ul className='flex flex-wrap gap-4'>
            <li>
              <a className='hover:text-primary' href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href="#services">
                Services
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className='hover:text-primary' href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Right Side */}
        
        <div className='text-gray-700 dark:text-gray-400'>
          <h3 className='font-bold text-sm'>
            Subscribe to our newsletter
          </h3>

          <p className='text-sm mt-2 mb-6'>
            The latest news, articles and resources sent to your inbox weekly.
          </p>

          <div className='flex gap-4'>
            <input
              type="email"
              placeholder="Enter your email"
              className='w-full p-3 text-sm outline-none rounded bg-transparent border border-gray-200 dark:border-gray-500 dark:text-gray-300'
            />

            <button className='bg-primary text-white rounded px-5 py-3'>
              Subscribe
            </button>
          </div>
        </div>
      </div>
      {/* Divider */}
      <hr className='border-gray-500 dark:border-gray-200 my-6' />

      {/* Footer Bottom */}
      <div className='pb-6 text-sm text-gray-700 dark:text-gray-400 flex justify-center sm:justify-between items-center gap-4 flex-wrap'>

        <p>
          Copyright © 2025 FunP. All Rights Reserved.
        </p>

        <div className='flex gap-4 text-2xl'>
          <FaFacebook className='cursor-pointer hover:text-blue-600 transition' />
          <FaInstagram className='cursor-pointer hover:text-pink-500 transition' />
          <FaLinkedin className='cursor-pointer hover:text-blue-500 transition' />
          <FaWhatsapp className='cursor-pointer hover:text-green-500 transition' />
        </div>

      </div>

    </footer>
  )
}

export default Footer