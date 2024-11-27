import React, { useState } from 'react';
import logo from '../assets/logo.png';
import Button from './Button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="md:bg-[#F3F3F5] bg-[#fff] sticky left-0 top-0 z-50">
      <div className="container">
        <div className="flex justify-between items-center  py-4">
          <img src={logo} className='max-w-[100%] h-auto w-[100px] lg:w-[160px]' width="160" height="43" alt="logo" />
          {/* Hamburger Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:items-center md:gap-2 xl:gap-4">
            <li>
              <Link
                to="/"
                className="xl:text-[16px] md:text-[12px] text-[#181818] leading-6 font-normal"
              >
                Home
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="xl:text-[16px] md:text-[12px] text-[#181818] leading-6 font-normal"
              >
                For Employment Agencies
              </a>
            </li>
            <li>
              <Link to="/"
               
                className="xl:text-[16px]  md:text-[12px] text-[#181818] leading-6 font-normal"
              >
                The Teaching Team
              </Link>
            </li>
            <li>
              <a
                href="#"
                className="xl:text-[16px]  md:text-[12px] text-[#181818] leading-6 font-normal"
              >
                Course Structure
              </a>
            </li>
            <li>
              <a
                href="#"
                className="xl:text-[16px]  md:text-[12px] text-[#181818] leading-6 font-normal"
              >
                Partner
              </a>
            </li>
          </ul>
          <div className="hidden md:block">
            <Button value="Non-Binding Inquiry" className="md:px-3 md:py-2 md:text-[12px]" />
          </div>
        </div>
      </div>

      {/* Right Sidebar for Mobile */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="p-4 flex justify-between items-center">
          <img className='max-w-[100%] h-auto' src={logo} alt='logo'/>
          <button onClick={toggleMenu} className="focus:outline-none">
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="space-y-4 px-4 mt-4">
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              For Employment Agencies
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              The Teaching Team
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              Course Structure
            </a>
          </li>
          <li>
            <a href="#" className="block text-[#181818] text-lg">
              Partner
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
