// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaSearch, FaBell, FaUserCircle, } from 'react-icons/fa';
import { FaSpaceAwesome } from 'react-icons/fa6';

const NavbarWithSearch = () => {
  return (
    <nav className='bg-emerald-700 px-4 py-3 flex justify-between'>
      <div className='flex items-center text-xl'>
      <FaSpaceAwesome className='text-black me-4 cursor-pointer'/>
        <span className='text-black font-semibold'>Dreammonks</span>
      </div>
      <div className='flex items-center gap-x-5'>
        <div className='relative md:w-65'>
          <span className='relative md:absolute inset-y-0 left-0 flex items-center pl-2'>
            <button className='p-1 focus:outline-none text-white md:text-black'><FaSearch/></button></span>
          <input type='text' className='w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block'></input>
        </div>
        <div className='text-black'><FaBell className='w-6 h-6 cursor-pointer'/></div>
        <div className='relative'>
          <button className='text-black group'>
            <FaUserCircle className='w-6 h-6 mt-1'/>
            <div className='z-10 hidden absolute bg-emerald-600 rounded-lg shadow w-32 group-focus:block  top-full right-0'>
              <ul className='py-2 text-sm text-gray-950'>
                <li className='py-1'><a href=''>Profile</a></li>
                <li className='py-1'><a href=''>Settings</a></li>
                <li className='py-1'><a href=''>Log Out</a></li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}


export default NavbarWithSearch;
