'use client'
import Image from 'next/image';
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section 
      className="py-20 relative overflow-hidden backdrop-grayscale-50"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.6)), url('https://images.pexels.com/photos/5325586/pexels-photo-5325586.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
     <div className="max-w-4xl mx-auto text-center px-6 relative z-10">
             <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight animate-on-scroll">
               READY TO
               <br />
               <span className="bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent">
                 JOIN THE MOVEMENT?
               </span>
             </h2>
             <p className="text-xl text-gray-200 mb-12 max-w-2xl mx-auto animate-on-scroll">
               This isn&apos;t just fashion—it&apos;s identity. Connect with creators, rebels, and authentic voices who wear their truth like armor.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 animate-on-scroll">
               <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105">
                 Join Community
               </button>
               <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
                 Explore Stories
               </button>
             </div>
             
             {/* Community Avatars */}
             <div className="flex justify-center items-center space-x-4 mb-8 animate-on-scroll">
               <div className="flex -space-x-3">
                 {[
                   'https://images.unsplash.com/photo-1494790108755-2616c95fd0d5?w=60&h=60&fit=crop&crop=face',
                   'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
                   'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=60&h=60&fit=crop&crop=face',
                   'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face',
                   'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face'
                 ].map((avatar, index) => (
                   <Image
                     key={index}
                     src={avatar}
                     height={700}
                     width={700} 
                     alt="Community member"
                     className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                   />
                 ))}
                 <div className="w-12 h-12 rounded-full border-2 border-white bg-gradient-to-r from-purple-500 to-[#FD5E53] flex items-center justify-center text-white text-sm font-bold">
                   +20K
                 </div>
               </div>
             </div>
             
             <div className="text-center animate-on-scroll">
               <p className="text-2xl font-bold bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent mb-4">
                 Stay Raw. Stay First.
               </p>
               <p className="text-gray-300">Join 25,000+ authentic voices worldwide</p>
             </div>
    </div>
    </section>
  );
};

export default CTASection;