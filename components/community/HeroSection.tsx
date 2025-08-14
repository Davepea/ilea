'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection: React.FC = () => {
 

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('https://images.pexels.com/photos/6995092/pexels-photo-6995092.jpeg?auto=compress&cs=tinysrgb&w=1500')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="floating-element absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl animate-float"></div>
        <div className="floating-element absolute top-40 right-20 w-32 h-32 bg-blue-500/20 rounded-full blur-xl animate-float-delayed"></div>
        <div className="floating-element absolute bottom-20 left-1/3 w-24 h-24 bg-[#FD5E53]/20 rounded-full blur-xl animate-float-slow"></div>
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-6">
        <h1 className="hero-title text-6xl md:text-8xl font-black mb-6 leading-tight animate-fade-up">
          YOUR TRIBE
          <br />
          <span className="bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent">
            AWAITS
          </span>
        </h1>
        <p className="hero-subtitle text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto animate-fade-up-delayed">
          Join a community of authentic voices, bold creators, and fearless individuals who wear their truth like armor.
        </p>
         <Link
          href="/product" 
          className="inline-block mt-10 px-6 py-3 relative z-20 text-black bg-white rounded-full hover:bg-gray-800 transition"
        >
          Join The Movement →
        </Link>
      </div>
      
      {/* Community Preview Images */}
      <div className="absolute bottom-20 left-10 hidden lg:block animate-fade-in-left">
        <div className="flex space-x-1">
          <Image src="https://i.pinimg.com/736x/b1/6d/5a/b16d5ad5e6f04fa6743559db75ca9b52.jpg" 
          height={700}
          width={700}
               className="w-10 h-10 rounded-full border-2 border-[#FD5E53]" alt="Community member" />
          <Image src="https://i.pinimg.com/736x/00/bd/d3/00bdd3d13f98878dc931848336805851.jpg" 
           height={700}
          width={700}
               className="w-10 h-10 rounded-full border-2 border-[#00F0FF]" alt="Community member" />
          <Image src="https://i.pinimg.com/736x/d2/df/fa/d2dffaa5c9b3941a9277dbb073ea6b02.jpg" 
           height={700}
          width={700}
               className="w-10 h-10 rounded-full border-2 border-[#FD5E53]" alt="Community member" />
        </div>
        <p className="text-sm text-gray-300 mt-2">25,000+ members worldwide</p>
      </div>
      
  
    </section>
  );
};

export default HeroSection;