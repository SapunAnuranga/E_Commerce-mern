import React from 'react';
import { assets } from '../assets/assets';

const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700'>
      {/* 1st Policy */}
      <div>
        <img className='w-12 m-auto mb-5' src={assets.exchange_icon} alt="Exchange Icon" />
        <p className='font-semibold'>Easy Exchange Policy</p>
        <p className='text-gray-400'>We offer hassle-free exchange policy</p>
      </div>

      {/* 2nd Policy */}
      <div>
        <img className='w-12 m-auto mb-5' src={assets.quality_icon} alt="Return Icon" />
        <p className='font-semibold'>7 Day Return Policy</p>
        <p className='text-gray-400'>We provide a 7 days return policy</p>
      </div>

      {/* 3rd Policy */}
      <div>
        <img className='w-12 m-auto mb-5' src={assets.support_img} alt="Customer Support Icon" />
        <p className='font-semibold'>Best Customer Support</p>
        <p className='text-gray-400'>We are always here to assist you</p>
      </div>
    </div>
  );
};

export default OurPolicy;
