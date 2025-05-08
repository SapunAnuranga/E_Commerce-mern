import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={' US'} />
      </div>

      <div className='mt-4 ml-10 flex flex-col md:flex-row items-start gap-8 mb-28 px-4 md:px-20'>
        <img
          className="w-full max-w-[95%] md:max-w-[410px] h-[80vh] max-h-[400px] my-4"
          src={assets.contact_img}
          alt="Contact"
        />
        <div className='flex flex-col justify-center items-start gap-6 mt-8'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>
            123, Galle Road, <br /> Colombo 03, Sri Lanka
          </p>
          <p className='text-gray-500'>
            Tel : (070) 123-4567 <br /> Email: admin@forever.com
          </p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>
          <p className='text-gray-500'>Learn more about our team and job openings</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>
            Explore Jobs
          </button>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default Contact
