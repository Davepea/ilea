'use client';
import React from 'react';
import {  Heart, Calendar } from 'lucide-react';
import Image from 'next/image';
import { EarlyAccessItem } from '@/app/types/interfaces';

interface EarlyAccessPageProps {
  earlyAccessItems: EarlyAccessItem[] | undefined;
  setEarlyAccessItems: React.Dispatch<React.SetStateAction<EarlyAccessItem[]>>;
}

const EarlyAccessPage: React.FC<EarlyAccessPageProps> = ({ 
  earlyAccessItems = [], 
  setEarlyAccessItems 
}) => {
  const handleWishlist = (itemId: number) => {
    setEarlyAccessItems(items => items.map(item => 
      item.id === itemId 
        ? { ...item, isWishlisted: !item.isWishlisted }
        : item
    ));
  };



  return (
    <div className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4">
            EARLY <span className="bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent">ACCESS</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Be first to shop new drops, get exclusive discounts, and influence future designs through community feedback.
          </p>
        </div>

        {/* Items Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {earlyAccessItems?.length ? (
            earlyAccessItems.map(item => (
              <div key={item.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-[#a5160c]/50 transition-all group">
                <div className="relative">
                  <Image height={700} width={700} src={item.image} alt={item.title} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#a5160c] text-white px-3 py-1 rounded-full text-xs font-medium">
                      -{item.discount}% OFF
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <button 
                      onClick={() => handleWishlist(item.id)}
                      className={`w-10 h-10 rounded-full backdrop-blur-sm border transition-all ${
                        item.isWishlisted 
                          ? 'bg-[#FD5E53]/20 border-[#FD5E53]/50 text-[#FD5E53]' 
                          : 'bg-gray-700/50 border-gray-600/50 text-gray-300 hover:border-[#FD5E53]/50 hover:text-[#FD5E53]'
                      }`}
                    >
                      <Heart className={`w-5 h-5 mx-auto ${item.isWishlisted ? 'fill-current' : ''}`} />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{item.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-[#a5160c] font-bold">
                      ${item.memberPrice}
                    </div>
                    <div className="text-gray-400 line-through text-sm">
                      ${item.originalPrice}
                    </div>
                    <div className="text-green-400 text-sm">
                      Save ${item.originalPrice - item.memberPrice}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="text-gray-400">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Releases {new Date(item.releaseDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </div>
                    <div className={`${item.stock > 10 ? 'text-green-400' : 'text-yellow-400'}`}>
                      {item.stock} left in stock
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
                      {item.category}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-[#a5160c] to-[#FD5E53] text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all">
                    Get Early Access
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-400">No early access items available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarlyAccessPage;
