'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Link from 'next/link';

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
    <section ref={sectionRef} className="w-full bg-black text-white py-20 md:pb-8 pb-20 px-[6.2vw] md:h-screen">
          <div  className='absolute absolute-center z-10  top-0 left-0 right-0 bottom-0 object-cover object-center' >
            <video
                        
                        src="/videos/new.mp4"
                        autoPlay
                        loop
                        muted
                        id='next-video'
                        className=' object-cover h-full w-full'
                        
                    />
            </div>
          <div className='md:flex md:justify-between grid grid-cols-1 gap-40 md:h-full md:gap-5  h-[70vh]'>
              <div className=" z-10 relative self-start max-w-[750px] ">
                <h2 className="text-4xl md:text-5xl font-bold header2 !text-white">Ready to Wear Who You Are?</h2>
            
              
              </div>
              <div className='z-10   self-end text-end '>
                  <div>
                    <Link
                    href="/collection"
                    className=" text-white font-semibold py-3  rounded-2xl hover:bg-white hover:text-black transition"
                  >
                    Browse the Collection →
                  </Link>
                </div>
               
              </div>
          </div>
    </section>
  );
}
