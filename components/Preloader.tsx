'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const words = ['Own', 'Your', 'Style'];

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      words.forEach((_, i) => {
        tl.to(wordRefs.current[i], {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power4.out',
        })
          .to(wordRefs.current[i], {
            opacity: 0,
            y: -40,
            duration: 0.6,
            delay: 0.4,
            ease: 'power4.in',
          });
      });

      // Scroll the whole preloader up
      tl.to(containerRef.current, {
        y: '-100%',
        duration: 1,
        ease: 'power4.inOut',
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="!fixed inset-0 !z-[1000] flex items-center justify-center  bg-[#e5f1f1] overflow-hidden"
    >
      {words.map((word, index) => (
        <h1
          key={index}
          ref={(el) => (wordRefs.current[index] = el)}
          className="absolute text-[10rem] text-[#FD5E53] font-bold opacity-0 translate-y-10"
        >
          {word}
        </h1>
      ))}
    </div>
  );
};

export default Preloader;
