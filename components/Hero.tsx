"use client"
import { useGSAP } from '@gsap/react';
import React, { useRef, useState } from 'react'

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


  const totalVideos = 4;

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;

  const handleMiniVidClick = () =>{
    sethasClicked(true)
    setCurrentIndex(upcomingVideoIndex)
  }
  const nextVideoRef = useRef(null);
  const handleVideoLoad = () =>{
    setloadedVideos((prev)=> prev + 1)
  }

  const getVideoSrc = (index: number) => `videos/hero${index}.mp4`;



  useGSAP(()=>{
    gsap.set('#hero', {
      // clipPath: 'polygon(20% 0%, 70% 0%, 90% 90%, 0% 100%)',

      width:'90%',

      borderRadius: '10px'
    })

    gsap.from("#hero", {
      // clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
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
    <section className=' overflow-hidden relative m-auto h-screen w-full' id='hero'>
    <div onClick={handleMiniVidClick} className='absolute absolute-center z-10  top-0 left-0 right-0 bottom-0 object-cover object-center' >
    <video
                ref={nextVideoRef}
                src={getVideoSrc(currentIndex)}
                autoPlay
                loop
                muted
                id='next-video'
                className=' object-cover h-full w-full'
                onLoadedData={handleVideoLoad}
              />
    </div>
    {/* <div className='bg-[#00000024] absolute top-0 bottom-0 right-0 left-0 z-10 '/> */}
  
    <div className='mt-24 px-5 sm:px-10'>
      <h1 className=' z-20 relative header' >Wear Your <br/><span className=' '> Truth.</span></h1>
        <Link
          href="/product" 
          className="inline-block mt-10 px-6 py-3 relative z-20 text-white bg-black rounded-full hover:bg-gray-800 transition"
        >
          Discover Your Style →
        </Link>
      {/* <Link href="#" >
       <Button id='product-button' title='Discover Your Style' rightIcon={<HiArrowLongRight />} containerClass=' md:flex flex items-center justify-center gap-5 mt-10 ml-3 text-[20px]' leftIcon={undefined}/>
      </Link> */}
      
    </div>
    </section>
    </>
  )
}

export default Hero