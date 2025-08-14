"use client"
import { useGSAP } from '@gsap/react';
import React, { useRef, useState, useEffect } from 'react'

import gsap from 'gsap';

import { ScrollTrigger } from 'gsap/all';
import Link from 'next/link';
// import Button from '@/components/Button';
// import { HiArrowLongRight } from 'react-icons/hi2';

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [, sethasClicked] = useState(false);
  const [, setloadedVideos] = useState(0)
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const totalVideos = 4;

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVidClick = () =>{
    sethasClicked(true)
    setCurrentIndex(upcomingVideoIndex)
  }
  
  const nextVideoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  
  const handleVideoLoad = () =>{
    setloadedVideos((prev)=> prev + 1)
  }

  const getVideoSrc = (index: number) => `videos/hero${index}.mp4`;

  // Mouse tracking for cursor follower
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "back.out(1.7)"
        });
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          scale: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut"
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseenter', handleMouseEnter);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseenter', handleMouseEnter);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  // Update cursor position with smooth following
  useEffect(() => {
    if (cursorRef.current) {
      gsap.to(cursorRef.current, {
        x: cursorPos.x,
        y: cursorPos.y,
        duration: 0.15,
        ease: "power2.out"
      });
      
      // Subtle cursor ripple effect
      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        left: ${cursorPos.x}px;
        top: ${cursorPos.y}px;
        width: 20px;
        height: 20px;
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        pointer-events: none;
        transform: translate(-50%, -50%);
      `;
      
      if (heroRef.current) {
        heroRef.current.appendChild(ripple);
        
        gsap.to(ripple, {
          scale: 3,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove()
        });
      }
    }
  }, [cursorPos]);

  useGSAP(()=>{
    // Initial setup
    gsap.set('#hero', {
      width:'90%',
      borderRadius: '10px'
    })

    // Simple entrance animations
    gsap.set('.hero-title', {
      y: 50,
      opacity: 0
    });

    gsap.set('.hero-button', {
      y: 30,
      opacity: 0
    });

    gsap.set('#next-video', {
      scale: 1.05,
      opacity: 0
    });

    // Clean entrance timeline
    const tl = gsap.timeline({ delay: 0.3 });
    
    tl.to('#next-video', {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power2.out"
    })
    .to('.hero-title', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.1
    }, "-=0.5")
    .to('.hero-button', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.3");

    // Scroll animation
    gsap.from("#hero", {
      borderRadius: '0 0 0 0',
      width:'100%',
      ease: 'power1.inOut',
      scrollTrigger:{
        trigger: '#hero',
        start: 'center center',
        end: 'bottom center',
        scrub: true,
      }
    })
  })

  
  return (
    <>
    <section 
      ref={heroRef}
      className='overflow-hidden relative m-auto h-screen w-full cursor-none' 
      id='hero'
    >
      {/* Beautiful Custom Cursor - keeping this amazing effect! */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-50"
        style={{
          transform: 'translate(-50%, -50%)',
          opacity: 0,
          scale: 0
        }}
      >
        <div className="relative">
          {/* Main cursor body */}
          <div className="w-24 h-24 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center shadow-2xl">
            <div className="text-white text-xs font-light tracking-wider">
              <div className="flex flex-col items-center">
                <div className="w-6 h-6 border border-white/40 rounded-full mb-1 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                </div>
                <span>CHANGE</span>
              </div>
            </div>
          </div>
          
          {/* Orbital rings */}
          <div className="absolute inset-0 rounded-2xl border border-white/10 animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute inset-2 rounded-xl border border-white/5 animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }} />
        </div>
      </div>

      <div 
        onClick={handleMiniVidClick} 
        className='absolute absolute-center z-10 top-0 left-0 right-0 bottom-0 object-cover object-center' 
      >
        <video
          ref={nextVideoRef}
          src={getVideoSrc(currentIndex)}
          autoPlay
          loop
          muted
          id='next-video'
          className='object-cover h-full w-full'
          onLoadedData={handleVideoLoad}
        />
      </div>
    
      <div className='mt-24 px-5 sm:px-10'>
        <h1 className='z-20 relative header hero-title'>
          Wear Your <br/>
          <span className='hero-title'>Truth.</span>
        </h1>
        <Link
          href="/product" 
          className="hero-button inline-block mt-10 px-6 py-3 relative z-20 text-white bg-black rounded-full hover:bg-gray-800 transition"
        >
          Discover Your Style →
        </Link>
      </div>
    </section>
    </>
  )
}

export default Hero