'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function JoinTheMovement() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black text-white py-8 pl-[6.2vw] md:h-screen">
          <div  className='absolute absolute-center z-10  top-0 left-0 right-0 bottom-0 object-cover object-center' >
            <video
                        
                        src="/videos/hero5.mp4"
                        autoPlay
                        loop
                        muted
                        id='next-video'
                        className=' object-cover h-full w-full'
                        
                    />
            </div>
     <div className='flex justify-between h-full gap-20'>
        <div className=" space-y-6 z-10 relative self-start flex flex-col justify-between md:h-full">
          <h2 className="text-4xl md:text-5xl font-bold header !text-white">Ready to Wear Who You Are?</h2>
          <div>
              <a
              href="/collection"
              className=" text-white font-semibold py-3  rounded-2xl hover:bg-white hover:text-black transition"
            >
              Browse the Collection →
            </a>
          </div>
        
        </div>
        <div className='relative z-10  max-w-[300px] self-end'>
          <p className=" text-gray-300">
            This isn’t just fashion—it’s identity. Join the ones who wear their truth like armor.
          </p>
          <div className=" mt-10  ">
            <a
              href="/start"
              className="px-6 py-3 text-black bg-white rounded-full hover:bg-gray-800 transition"
            >
              Start Expressing →
            </a>
          
          </div>
        </div>
     </div>
    </section>
  );
}
