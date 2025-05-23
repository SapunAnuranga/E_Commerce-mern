import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const {setShowSearch, getCartCount} = useContext(ShopContext);
    
  return (
    <div className="flex items-center justify-between py-5 font-medium">
      
      <Link to='/'><img src={assets.logo} className="w-36" alt="Logo" /></Link>

      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

        <NavLink to="/" className="flex flex-col items-center gap-1"> 
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/collection" className="flex flex-col items-center gap-1"> 
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/about" className="flex flex-col items-center gap-1"> 
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>

        <NavLink to="/contact" className="flex flex-col items-center gap-1"> 
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>

      <div className='flex items-center gap-6'>
            <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

            <div className='group relative'>
                <Link to={'/Login'} ><img src={assets.profile_icon} className='w-5 cursor-pointer' alt="" /> </Link>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                         <p className='cursor-pointer hover:text-black'>My Profile</p>
                         <p className='cursor-pointer hover:text-black'>Orders</p>
                         <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                 </div>
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className="absolute right-[-5px] bottom-[-5px] flex items-center justify-center w-4 aspect-square bg-black text-white text-[8px] rounded-full">
                {getCartCount()}
                </p>               
            </Link>
            <img onClick= {()=> setVisible(true)} src={assets.menu_icon} className="w-5 cursor-pointer sm:hidden" alt="" />
      </div>
      {/* sidebar menu for small screens */}
      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all duration-300 ${visible ? 'w-full' : 'w-0'}`}>
        <div className="flex flex-col h-full">
            <div onClick={() => setVisible(false)} className="flex items-center gap-3 p-4 cursor-pointer border-b border-gray-200">
                <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
                <span className="font-medium">Back</span>
                </div>
                <nav className="flex flex-col flex-grow">
                    <NavLink onClick={()=> setVisible(false)} className='py-4 px-6 border-b border' to="/" >HOME</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className='py-4 px-6 border-b border' to="/collection">COLLECTION</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className='py-4 px-6 border-b border' to="/about">ABOUT</NavLink>
                    <NavLink onClick={()=> setVisible(false)} className='py-4 px-6 border-b border' to="/contact">CONTACT</NavLink>
                </nav>
            </div>
        </div>
      </div>  
  );
};

export default Navbar;
