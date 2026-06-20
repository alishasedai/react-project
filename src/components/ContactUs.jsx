import React from 'react';
import Title from './Title';
import { assets } from '../assets/assets';
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import toast from 'react-hot-toast';

const ContactUs = () => {
    const onSubmit = async(event) => {
        event.preventDefault();
    
    const formData = new FormData(event.target);

    formData.append("access_key", "2eab9855-f7d8-428a-9545-1d7d879f1e0e");

   try{
     const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
    }
   }
   catch(err){
     toast.error(err.message)
   }
    }
   
  return (
    <div id='contact-us' className='flex flex-col items-center gap-7 px-2 sm:px-12 lg:px-24 xl:px-40 pt-15 text-gray-800 dark:text-white'>
      <Title title='Reach out to us'
      desc='Ready to grow our brand? Let connect and build something exceptional together'/>


    <form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl w-full'>
        <div >
            <p className="mb-2 text-sm  font-medium">Your name</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
                <IoPerson className="text-xl my-auto text-gray-500" />
                <input type="text" placeholder='Enter your name'
                className='w-full p-3 text-sm outline-none' required name="name" id="" />
            </div>
        </div>

         <div >
            <p className="mb-2 text-sm  font-medium">Email id:</p>
            <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
             <MdEmail className="text-xl my-auto text-gray-500" />
                <input type="text" name="email" placeholder='Enter your email'
                className='w-full p-3 text-sm outline-none' required />
            </div> 
        </div>
            <div className="sm:col-span-2">
                <p className="mb-2 text-sm font-medium">Message</p>
                <textarea rows={8} placeholder='Enter your message '
                className='w-full p-3 text-sm outline-none rounded-lg border border-gray-400 dark:border-gray-600' name='message' required></textarea>
            </div>
            <button type='submit' className='w-max flex gap-2 bg-primary text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 transition-all'>
                Submit <img src={assets.arrowRight} className='h-4 w-4 mt-1 bg-white rounded-full' alt="" />
            </button>
    </form>
    </div>
  )
}

export default ContactUs
