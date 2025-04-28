import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div className="px-5">
      <div className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Company Info */}
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora eos, odit quaerat sequi, hic at ex similique aut labore quo reiciendis nemo ducimus nostrum voluptas ipsa accusamus sed, rerum in.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+94 713 084 852</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div>
        <hr className="my-5 border-gray-300" />
        <p className="py-5 text-sm text-center text-gray-500">
          © 2024 forever.com - All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
