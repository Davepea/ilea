'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Loading() {
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".loader-circle",
        { rotate: 0 },
        { rotate: 360, duration: 1, repeat: -1, ease: "linear" }
      );
    }, loaderRef);
    

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={loaderRef}
      className="h-screen w-full flex flex-col gap-4 items-center justify-center bg-white text-black"
    >
      <p className="text-lg tracking-wide font-semibold">Loading...</p>
    </div>
  );
}
