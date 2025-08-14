'use client'
import Link from 'next/link';
import React, { useState } from 'react';

const Navigation: React.FC = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 backdrop-blur-md  m-4 mx-6 border-2 border-[#ffffff3a] rounded-full">
      <div className="max-w-8xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className='flex items-center gap-7'>
              <Link href='/'>
                    <div className='flex gap-[2px] items-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-8 text-[#FD5E53]'
                >
                  <path d='M15 3.75H9v16.5h6V3.75ZM16.5 20.25h3.375c1.035 0 1.875-.84 1.875-1.875V5.625c0-1.036-.84-1.875-1.875-1.875H16.5v16.5ZM4.125 3.75H7.5v16.5H4.125a1.875 1.875 0 0 1-1.875-1.875V5.625c0-1.036.84-1.875 1.875-1.875Z' />
                </svg>
                <div className='md:flex hidden gap-[2px]'>
                  <b className='font-title font-bold text-3xl'>ILEA-Commmunity</b>
                  <small>&#xae;</small>
                </div>
              </div>
              </Link>
            </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/product" className="text-gray-300 hover:text-white transition-colors">Shop</Link>
            <Link href="/community/forum" className="text-gray-300 hover:text-white transition-colors">Forum</Link>
            <Link href="/community/early-access" className="text-gray-300 hover:text-white transition-colors">Early Access</Link>
          </div>
          <button 
            className="md:hidden text-white"
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        
        {isNavOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <Link href="/product" className="text-gray-300 hover:text-white transition-colors">Shop</Link>
            <Link href="/community/forum" className="text-gray-300 hover:text-white transition-colors">Forum</Link>
            <Link href="/community/early-access" className="text-gray-300 hover:text-white transition-colors">Early Access</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;