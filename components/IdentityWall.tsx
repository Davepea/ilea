'use client';

import { useEffect, useRef } from 'react';
import AnimatedTitle2 from "@/components/AnimatedTitle2";
import { gsap } from 'gsap';
import Image from 'next/image';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

const sampleImages = [
  '/img/identity1.jpeg',
  '/img/identity2.jpeg',
  '/img/identity3.jpeg',
  '/img/identity4.jpeg',
  '/img/identity5.jpeg',
  '/img/identity6.jpeg',
  '/img/identity7.jpeg',
  // Add more images or map from props later
];

export default function IdentityWall() {
  // Properly typed refs
  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    // Initial section fade-in animation
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out', 
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
    }

    // Horizontal scroll gallery setup
    const galleryElement = galleryRef.current;
    const containerElement = scrollContainerRef.current;
    
    if (galleryElement && containerElement) {
      const galleryWidth = galleryElement.scrollWidth;
      const containerWidth = containerElement.clientWidth;
      
      // Only apply horizontal scroll if content overflows
      if (galleryWidth > containerWidth) {
        // Store ScrollTrigger instance for later use
        scrollTriggerRef.current = ScrollTrigger.create({
          trigger: containerElement,
          start: "top center",
          end: `+=${galleryWidth / 1.5}`, // Adjust this value to control scroll distance
          scrub: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Don't update during button-triggered animations
            const currentlyAnimating = gsap.isTweening(galleryElement);
            if (!currentlyAnimating) {
              gsap.set(galleryElement, {
                x: -(galleryWidth - containerWidth) * self.progress,
                overwrite: "auto"
              });
            }
          }
        });
      }
    }

    return () => {
      // Cleanup ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      scrollTriggerRef.current = null;
    };
  }, []);

  // Function to handle manual scrolling via buttons
  const handleScroll = (direction: 'left' | 'right', e: React.MouseEvent) => {
    // Prevent default to stop page scrolling
    e.preventDefault();
    
    const galleryElement = galleryRef.current;
    const containerElement = scrollContainerRef.current;
    
    if (galleryElement && containerElement) {
      // Calculate how much to scroll
      const scrollDistance = containerElement.clientWidth * 0.5; // Scroll half a container width
      
      // Directly animate the gallery's position
      const currentX = gsap.getProperty(galleryElement, "x") as number;
      const galleryWidth = galleryElement.scrollWidth;
      const containerWidth = containerElement.clientWidth;
      const maxScrollDistance = -(galleryWidth - containerWidth);
      
      let newX;
      if (direction === 'left') {
        // Move right (increasing X value)
        newX = Math.min(0, currentX + scrollDistance);
      } else {
        // Move left (decreasing X value)
        newX = Math.max(maxScrollDistance, currentX - scrollDistance);
      }
      
      // Animate to the new position
      gsap.to(galleryElement, {
        x: newX,
        duration: 0.5,
        ease: "power2.out"
      });
    }
  };

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-neutral-100" id="identity-wall">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex justify-between items-center text-start md:px-16">
          <AnimatedTitle2 className="font-bold tracking-tight !text-[#FD5E53]" text='Real Ones. Real Looks.'/>
          <p className=" text-lg text-gray-600">Styled by You, Not a Stylist.</p>
        </div>

        
        <div ref={scrollContainerRef} className=" overflow-hidden relative">
          <div 
            ref={galleryRef} 
            className="flex space-x-1"
          >
            {sampleImages.map((src, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-64 !h-[400px] sm:w-72 sm:h-72 overflow-hidden shadow-sm"
              >
                <Image
                  src={src}
                  alt={`Community look ${index + 1}`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation buttons for manual scrolling */}
        <div className="flex justify-center gap-2 mt-4">
          <button 
            className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition"
            onClick={(e) => handleScroll('left', e)}
            aria-label="Scroll left"
            type="button"
          >
            ←
          </button>
          <button 
            className="p-2 bg-black rounded-full text-white hover:bg-gray-800 transition"
            onClick={(e) => handleScroll('right', e)}
            aria-label="Scroll right"
            type="button"
          >
            →
          </button>
        </div>

        <Link
          href="/submit" 
          className="inline-block mt-10 px-6 py-3 text-white bg-black rounded-full hover:bg-gray-800 transition"
        >
          Join the Identity Wall →
        </Link>
      </div>
    </section>
  );
}