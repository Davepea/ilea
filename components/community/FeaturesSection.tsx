'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

interface CommunityFeature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  href: string,
}

const FeaturesSection: React.FC = () => {
  const communityFeatures: CommunityFeature[] = [
    {
      id: 1,
      title: 'Community Forum',
      description: 'Share your style, get inspired, and connect with like-minded creators from around the globe.',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-[#FD5E53]',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
        </svg>
      ),
      href:'/forum',
    },
    {
      id: 2,
      title: 'Exclusive Events',
      description: 'Join virtual and IRL meetups, styling sessions, and behind-the-scenes access to our creative process.',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-purple-500',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
        </svg>
      ),
      href:'/event',
    },
    {
      id: 3,
      title: 'Early Access',
      description: 'Be first to shop new drops, get exclusive discounts, and influence future designs through community feedback.',
      gradientFrom: 'from-[#FD5E53]',
      gradientTo: 'to-orange-500',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976-2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
        </svg>
      ),
      href:'/early-access',
    }
  ];

  return (
    <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
             <div className="text-center mb-16 animate-on-scroll">
               <h2 className="text-5xl md:text-6xl font-black mb-6">
                 MORE THAN
                 <br />
                 <span className="bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent">
                   JUST FASHION
                 </span>
               </h2>
             </div>
             
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {communityFeatures.map((feature, index) => (
                 <div 
                   key={feature.id}
                   className="animate-on-scroll feature-card group"
                   style={{ animationDelay: `${index * 150}ms` }}
                 >
                   <div className="relative overflow-hidden rounded-t-2xl">
                     <Image
                       src={feature.image} 
                       alt={feature.title}
                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                         height={700}
                       width={700}
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                     <div className={`absolute top-4 right-4 w-12 h-12 bg-gradient-to-r ${feature.gradientFrom} ${feature.gradientTo} rounded-full flex items-center justify-center`}>
                       {feature.icon}
                     </div>
                   </div>
                   
                   <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-b-2xl p-6 hover:bg-white/10 transition-all duration-300">
                     <h3 className="text-2xl font-bold mb-4 text-white">{feature.title}</h3>
                     <p className="text-gray-400 mb-4">{feature.description}</p>
                     <Link href={feature.href}>
                      <button className="text-[#a5160c] hover:text-purple-300 font-medium text-sm flex items-center group">
                       Learn More 
                       <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                       </svg>
                     </button>
                     </Link>
                   </div>
                 </div>
               ))}
             </div>
           </div>
    </section>
  );
};

export default FeaturesSection;