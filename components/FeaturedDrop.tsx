'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedDrop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.headline', { y: 50, opacity: 0, duration: 1.2, ease: 'power3.out' });
      gsap.from('.subtext', { y: 30, opacity: 0, delay: 0.3, duration: 1.2, ease: 'power3.out' });
      gsap.from('.cta', { y: 20, opacity: 0, delay: 0.6, duration: 1, ease: 'power2.out' });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative md:h-[100vh] h-[70vh] w-full overflow-hidden bg-black text-white flex flex-col rounded-bl-[10px] rounded-tl-[10px]"
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Image
          src="https://i.pinimg.com/736x/23/06/c2/2306c2437a0e034b4a68c59e02244719.jpg" // Replace with real image
          alt="Unfiltered Collection"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>



      {/* Content */}
      <div className="relative z-20 h-full flex flex-col  py-10 px-6 md:p-10 max-w-5xl">
        <h2 className=" text-5xl md:text-7xl font-bold tracking-tight leading-tight !font-anton">
          This Season’s Drop
          <br />
          <span className="italic text-red-500 bg-white pr-[1rem]">The “Unfiltered” Series</span>
        </h2>

       

        <Link
          href="/collection/unfiltered"
          className=" mt-8 inline-block w-fit bg-white text-black px-6 py-3 text-sm md:text-base rounded-full  hover:bg-gray-200 transition relative !z-10"
        >
          Shop the Drop →
        </Link>
      </div>

      <div className='md:p-10 p-6'>
         <p className="subtext text-gray-200 max-w-xl  text-xs">
          Raw textures. Urban silhouettes. Bold expression. This collection was made for walking the
          line between rebel and royalty.
        </p>
      </div>
    </section>
  );
}

