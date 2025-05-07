import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img
          className='w-full md:max-w-[450px] h-[300px] md:h-[400px] object-cover'
          src={assets.about_img}
          alt="About us"
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-base md:text-lg text-left'>
          <p>
            At our core, we are dedicated to building a customer-first e-commerce platform that prioritizes trust, convenience, and reliability.
            Our team continuously works to bring you not only the best products but also a shopping experience that is smooth, intuitive, and enjoyable.
          </p>
          <p>
            We are passionate about using technology to simplify everyday life. By combining secure payment systems, fast delivery, and responsive customer support,
            we ensure that every customer receives top-notch service.
          </p>
          <b className='text-gray-800'>Our Mission</b>
          <p>
            Our mission is to make online shopping effortless and accessible for everyone. We aim to deliver not just quality products,
            but also exceptional service that builds lasting relationships with our customers.
          </p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 min-h-[auto]'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>
            Every product we offer undergoes rigorous testing and quality checks to ensure it meets our standards.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 min-h-[auto]'>
          <b>Convenience:</b>
          <p className='text-gray-600'>
            We focus on making your shopping experience fast, easy, and enjoyable—from product discovery to final delivery.
          </p>
        </div>

        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 min-h-[auto]'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>
            Our dedicated support team is always ready to assist you and ensure your concerns are handled quickly and efficiently.
          </p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  );
};

export default About;
