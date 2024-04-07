import React, { useState } from 'react'
import logo from '../logo.svg'
import {DownOutlined,GlobalOutlined} from '@ant-design/icons'

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
    return (
      <nav className="flex items-center drop-shadow-lg justify-between px-6 py-4 bg-white shadow-lg shadow-gray-300/45 md:px-12">
        <div>
          <img src={logo} alt="Wix Logo" className="h-6 md:h-8" />
        </div>
        <div className="hidden lg:flex items-center space-x-6 w-[90%]">
        <a href="#" className="text-gray-600 hover:text-blue-600 flex flex-row">
            Creation <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 flex flex-row">
            Business <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 flex flex-row">
            Growth <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 flex flex-row">
            Resources <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 border-l ml-3 pl-3 border-gray-400 text-center ">
            Enterprise
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 mr-auto">
            Support
          </a>
          <div className='ml-auto flex flex-row justify-end w-full gap-x-4'>
          <GlobalOutlined className="text-gray-600 hover:text-blue-600  " />
          <button className="px-4 py-2 rounded-full bg-white border-2 border-blue-500 transition-all duration-100 text-blue-500 hover:text-white hover:bg-blue-600">
            Sign In
          </button>
          </div>
        </div>
        <div className={`absolute lg:hidden z-[100] flex flex-col items-center gap-y-3 w-full bg-white shadow-lg 
        shadow-gray-200 py-8 top-[4.52rem] left-0 border-t-2 transition-all duration-200 scale-y-0 origin-top ${showNav && 'scale-y-100'} `}>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Creation <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Business <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Growth <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Resources <DownOutlined className='ml-1' />
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600 border-t mt-3 pt-3 border-gray-400 w-[70%] text-center">
            Enterprise
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Pricing
          </a>
          <a href="#" className="text-gray-600 hover:text-blue-600">
            Support
          </a>
          <GlobalOutlined className="text-gray-600 hover:text-blue-600" />
          <button className="px-4 py-2 rounded-full bg-white text-blue-500 hover:text-white hover:bg-blue-600">
            Sign In
          </button>
        </div>
        <div className="lg:hidden" onClick={()=>setShowNav((showNav)=>{return !showNav})}>
          <button className="p-2 text-gray-600 rounded-md hover:bg-gray-100">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </nav>
    );
  };

export default Navbar
