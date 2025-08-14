'use client'
import Image from 'next/image';
import React from 'react';

interface CommunityStory {
  id: number;
  name: string;
  location: string;
  story: string;
  hashtag: string;
  initial: string;
  gradientFrom: string;
  gradientTo: string;
  image: string;
  outfit: string;
}

const StoriesSection: React.FC = () => {
  
  const communityStories: CommunityStory[] = [
    {
      id: 1,
      name: 'Maya Chen',
      location: 'Brooklyn, NY',
      story: "Finding Ilea was like finding my voice. Their pieces don't just fit my body—they fit my soul. Every morning, I choose rebellion over conformity.",
      hashtag: '#WearYourTruth',
      initial: 'M',
      gradientFrom: 'from-purple-500',
      gradientTo: 'to-[#FD5E53]',
      image: 'https://images.pexels.com/photos/5885752/pexels-photo-5885752.jpeg?auto=compress&cs=tinysrgb&w=900',
      outfit: 'Purple oversized blazer with statement jewelry'
    },
    {
      id: 2,
      name: 'Jamal Rivera',
      location: 'Los Angeles, CA',
      story: "Street culture meets consciousness. Ilea gets it. When I wear their designs, I'm not just dressed—I'm armed with authenticity.",
      hashtag: '#StayRaw',
      initial: 'J',
      gradientFrom: 'from-blue-500',
      gradientTo: 'to-purple-500',
      image: 'https://i.pinimg.com/736x/c5/2d/98/c52d989b5c63a4f55d3236a6f2bbf913.jpg',
      outfit: 'Urban streetwear with bold graphics'
    },
    {
      id: 3,
      name: 'Alex Thompson',
      location: 'Portland, OR',
      story: "Slow fashion that moves fast through culture. Every Ilea drop feels like a movement, not just a purchase. This is how change looks.",
      hashtag: '#StayFirst',
      initial: 'A',
      gradientFrom: 'from-[#FD5E53]',
      gradientTo: 'to-orange-500',
      image: 'https://images.pexels.com/photos/10536998/pexels-photo-10536998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      outfit: 'Sustainable avant-garde pieces'
    }
  ];

  return (
    <section  className="py-20 relative">
         {/* Background pattern */}
         <div className="absolute inset-0 opacity-5">
           <div className="w-full h-full" style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}></div>
         </div>
         
         <div className="max-w-7xl mx-auto px-6 relative z-10">
           <div className="text-center mb-16 animate-on-scroll">
             <h2 className="text-5xl md:text-6xl font-black mb-6">
               REAL STORIES,
               <br />
               <span className="bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent">
                 REAL VOICES
               </span>
             </h2>
             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
               Every piece tells a story. Here are some of the voices that make our community extraordinary.
             </p>
           </div>
           
           <div className="grid md:grid-cols-3 gap-8">
             {communityStories.map((story, index) => (
               <div 
                 key={story.id}
                 className="animate-on-scroll story-card group cursor-pointer"
                 style={{ animationDelay: `${index * 200}ms` }}
               >
                 <div className="relative overflow-hidden rounded-2xl mb-6">
                   <Image
                     src={story.image} 
                     alt={story.name}
                     height={600}
                     width={600}
                     className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                   <div className="absolute bottom-4 left-4 right-4">
                     <div className="flex items-center mb-2">
                       <div className={`w-12 h-12 bg-gradient-to-r ${story.gradientFrom} ${story.gradientTo} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                         {story.initial}
                       </div>
                       <div className="ml-3">
                         <div className="font-bold text-white">{story.name}</div>
                         <div className="text-gray-300 text-sm">{story.location}</div>
                       </div>
                     </div>
                     <div className="text-xs text-purple-300 bg-purple-900/50 px-2 py-1 rounded-full inline-block">
                       {story.outfit}
                     </div>
                   </div>
                 </div>
                 
                 <div className="bg-gradient-to-br from-purple-500/10 to-[#FD5E53]/10 border border-purple-500/20 rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                   <p className="text-gray-300 mb-4 italic">&quot;{story.story}&quot;</p>
                   <div className="flex items-center justify-between">
                     <div className="text-sm text-[#a5160c] font-medium">{story.hashtag}</div>
                     <div className="flex space-x-1">
                       {[...Array(5)].map((_, i) => (
                         <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                         </svg>
                       ))}
                     </div>
                   </div>
                 </div>
               </div>
             ))}
           </div>
           
           {/* Style Inspiration Gallery */}
           <div className="mt-20 animate-on-scroll">
             <h3 className="text-3xl font-bold text-center mb-8">Style Inspiration from Our Community</h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
               {[
                 'https://i.pinimg.com/736x/aa/05/86/aa05862e9f84cb30a26600cfaa31c297.jpg',
                 'https://i.pinimg.com/736x/48/82/af/4882af689bd8a98a0a679b5706407420.jpg',
                 'https://i.pinimg.com/736x/09/c1/db/09c1db29f9333074a1c8918c9ee91420.jpg',
                 'https://i.pinimg.com/736x/31/ec/45/31ec45cd95b4ab7f2868faf033796456.jpg'
               ].map((img, index) => (
                 <div key={index} className="relative group overflow-hidden rounded-lg">
                   <Image src={img} alt="Community style" className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-110" 
                          height={700}
             width={700}/>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                     <span className="text-white text-sm">#IleaStyle</span>
                   </div>
                 </div>
               ))}
             </div>
           </div>
         </div>
       </section>
  );
};

export default StoriesSection;