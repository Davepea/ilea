'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

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
      className="relative h-[100vh] w-full overflow-hidden bg-black text-white"
    >
      {/* Background image */}
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Image
          src="https://images.pexels.com/photos/27960326/pexels-photo-27960326/free-photo-of-two-people-in-black-leather-jackets-and-pants.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with real image
          alt="Unfiltered Collection"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-70 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-end p-10 md:p-20 max-w-5xl">
        <h2 className="headline text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          This Season’s Drop:
          <br />
          <span className="italic text-red-500">The “Unfiltered” Series</span>
        </h2>

        <p className="subtext mt-6 text-lg md:text-xl text-gray-200 max-w-xl">
          Raw textures. Urban silhouettes. Bold expression. This collection was made for walking the
          line between rebel and royalty.
        </p>

        <a
          href="/collection/unfiltered"
          className=" mt-8 inline-block w-fit bg-white text-black px-6 py-3 text-sm md:text-base rounded-full  hover:bg-gray-200 transition relative !z-10"
        >
          Shop the Drop →
        </a>
      </div>
    </section>
  );
}
