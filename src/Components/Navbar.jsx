import React, { useEffect, useState } from 'react';
import {assets} from '../assets/assets';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() =>{
        if(showMobileMenu){
            document.body.style.overflow = 'hidden';
        }else{
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        }
        
    },[showMobileMenu])
  return (
    <div className="absolute top-0 left-0 w-full z-10 pt-5 bg-[#00618E]">
        
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent '>
        <img  src={assets.logo} alt="" className='w-32' />
        <div className='hidden md:flex gap-7 text-white'>
            <Link to="/" className='cursor-pointer hover:text-grey-400'>Home</Link>
            <Link to="allproducts" className='cursor-pointer hover:text-grey-400'>All Products</Link>
            <Link to="#Header" className='cursor-pointer hover:text-grey-400'>Projects</Link>
            <a href="#Header" className='cursor-pointer hover:text-grey-400'>Testomonials</a>
        </div>
        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign Up</button>
        <img onClick={()=>{setShowMobileMenu(true)}} src={assets.menu_icon} alt="" className='md:hidden w-7 cursor-pointer' />
      </div>
      {/* Mobile-Menu */}
       <div className={`md:hidden ${showMobileMenu ? 'fixed w-full': 'h-0 w-0'}  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img onClick={()=>{setShowMobileMenu(false)}} src={assets.cross_icon} alt="" className='w-6 ' />
        </div>
        <div className='flex flex-col items-center gap-2 px-5 text-lg'>
            <Link onClick={()=>{setShowMobileMenu(false)}} to="/" className='px-4 py-2 rounded-full inline-block'>Home</Link>
            <Link onClick={()=>{setShowMobileMenu(false)}} to="/allproducts" className='px-4 py-2 rounded-full inline-block'>All Products</Link>
            <Link onClick={()=>{setShowMobileMenu(false)}} to="" className='px-4 py-2 rounded-full inline-block'>Projects</Link>
            <Link onClick={()=>{setShowMobileMenu(false)}} to="" className='px-4 py-2 rounded-full inline-block'>Contact</Link>
            <Link onClick={()=>{setShowMobileMenu(false)}} to="" className='px-4 py-2 rounded-full inline-block'>Testomonials</Link>
        </div>
       </div>
    </div>
  )
}

export default Navbar