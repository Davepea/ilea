'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Words to display in the marquee
const words = [
  'Rebellious',
  'Unapologetic',
  'Expressive',
  'Raw',
  'First',
  'Authentic',
];

// Create an extended array with more words for a longer sequence
const extendedWords = [...words, ...words, ...words, ...words]; // Quadruple the words for more content

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const content = contentRef.current;
    
    if (!marquee || !content) return;
    
    // Clone the content for seamless looping
    const duplicated = content.cloneNode(true) as HTMLDivElement;
    marquee.appendChild(duplicated);
    
    // Get the total width of content for animation calculations
    const totalWidth = content.offsetWidth;
    
    // Set initial position
    gsap.set(marquee, { x: 0 });
    
    // Create ScrollTrigger to control marquee position based on scroll direction
    const trigger = ScrollTrigger.create({
      trigger: document.body,
      start: 'top top',
      end: 'bottom bottom',
      scrub: 1, // Smooth scrubbing effect with 1 second lag
      onUpdate: (self) => {
        // Calculate position based on scroll progress
        // Map scroll progress (0-1) to marquee position (0 to -totalWidth)
        const scrollProgress = self.progress;
        const position = -totalWidth * scrollProgress;
        
        // Apply the position directly
        gsap.set(marquee, { x: position });
      }
    });
    
    // When no user scroll is happening, setup an automatic animation
    const autoScroll = gsap.to(marquee, {
      x: -totalWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
      paused: true, // Start paused
    });
    
    // Function to check if user is actively scrolling
    let scrollTimeout: NodeJS.Timeout;
    
    function handleScroll() {
      autoScroll.pause(); // Pause auto-scroll during manual scrolling
      
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        
        // Get the current position and set it as the starting point for auto-scroll
        const currentX = gsap.getProperty(marquee, 'x') as number;
        gsap.set(marquee, { x: currentX });
        
        // Create a new auto-scroll animation from current position
        gsap.to(marquee, {
          x: -totalWidth,
          duration: 30 * (1 - Math.abs(currentX) / totalWidth), // Adjust time based on position
          ease: 'none',
          repeat: -1,
          onRepeat: () => {
            gsap.set(marquee, { x: 0 }); // Reset position on repeat
          }
        });
      }, 500);
    }
    
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    
    // Start auto-scroll initially
    autoScroll.play();
    
    // Cleanup function
    return () => {
      trigger.kill();
      autoScroll.kill();
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);
  
  return (
    <div className="flex flex-col w-full">
     
      
      {/* Marquee container */}
      <div className="overflow-hidden whitespace-nowrap w-full bg-black text-white py-6 border-t border-b border-gray-800">
        <div
          ref={marqueeRef}
          className="flex w-max will-change-transform"
        >
          <div ref={contentRef} className="flex space-x-12 text-2xl px-6">
            {extendedWords.map((word, index) => (
              <span key={index} className="uppercase tracking-wide text-white">
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
      
     
      
    </div>
  );
}