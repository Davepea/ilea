'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import AnimatedTitle2 from '@/components/AnimatedTitle2';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current.querySelectorAll('.fade-in'),
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          stagger: 0.2,
        }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className=" text-gray-900">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] overflow-hidden">
        <Image
          src="https://images.pexels.com/photos/6068971/pexels-photo-6068971.jpeg?auto=compress&cs=tinysrgb&w=1500&lazy=load"
          alt="About Ilea"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="md:px-10 px-6 py-10 absolute inset-0 bg-opacity-40 flex items-end justify-start">
          <h1 className="header">About Ilea</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 md:px-20 md:py-20 md:gap-8 ">
       <div className='overflow-hidden  '>
         <div className=" overflow-hidden max-h-[700px]">
          <Image src="https://images.pexels.com/photos/31090139/pexels-photo-31090139/free-photo-of-stylish-woman-in-red-coat-on-modern-staircase.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={500} height={500} alt="skdksjdjk" className=" w-full object-cover h-full"/>

          </div>

       </div>
       <div className='flex flex-col justify-end bg-[#3f4147] p-10 text-white'>
        
          <AnimatedTitle2 className="font-bold tracking-tight md:!pb-10 !pb-0" text='Our Story'/>
        <p className="text-lg leading-relaxed fade-in">
          Ilea was born from a desire to empower individuality in a world driven by trends. Founded in 2022 in Brooklyn,
          New York, we set out to create streetwear that doesn&apos;t just make a statement—but tells your story. Our mission is
          simple: wear your truth. From sketchbook to sidewalk, every collection channels authenticity, rebellion, and
          unapologetic style. We blend cutting-edge design with premium fabrics to deliver pieces that feel as bold as they look.
        </p>
       </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#3f4147] relative text-white h-[700px]">
             <Image
              src="https://images.pexels.com/photos/1884584/pexels-photo-1884584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=1000&dpr=1"
              alt="Mission Visual"
               layout="fill"
               objectFit="cover"
              className="w-full"
            />
          
        <div className="md:px-20 px-6 py-20 absolute inset-0 bg-opacity-40 flex items-end justify-start bg-[#0000007a]">
          <div className="fade-in">
            <h2 className="header2 pb-10">Our Mission</h2>
            <p className="text-lg leading-relaxed max-w-6xl">
              At Ilea, we believe fashion is a canvas for self-expression. That’s why we design with intention—each drop
              reflects a different facet of human identity, culture, and emotion. We&apos;re committed to slow fashion practices,
              ethical sourcing, and limited releases to minimize our footprint while maximizing our impact.
            </p>
          </div>

        </div>
      </section>

      {/* Team Section */}
      <section className="md:max-w-7xl mx-auto px-6 py-20 text-white">
         <AnimatedTitle2 className="font-bold tracking-tight md:!pb-10 !pb-0 text-white" text='Meet the Team'/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
           
            {
              name: 'Alyssa R.',
              title: 'Head of Product Design',
              img: 'https://images.pexels.com/photos/20269193/pexels-photo-20269193/free-photo-of-young-woman-in-black-blazer.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
             {
              name: 'Jordan M.',
              title: 'Founder & Creative Director',
              img: 'https://images.pexels.com/photos/7433326/pexels-photo-7433326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            },
            {
              name: 'Marcus K.',
              title: 'Marketing & Culture Strategist',
              img: 'https://images.pexels.com/photos/14081789/pexels-photo-14081789.jpeg?auto=compress&cs=tinysrgb&w=600',
            },
          ].map((member, index) => (
            <div key={index} className="text-start fade-in">
              <div className='max-h-[500px] overflow-hidden'>
                <Image
                src={member.img}
                alt={member.name}
                width={300}
                height={300}
                className=" mx-auto  object-cover h-full w-full"
              />
              </div>
              <h3 className="mt-4 text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500">{member.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="bg-black text-white ">
        <div className=" mx-auto">
          <div className='md:px-20 px-6 pb-10 pt-20'>
          
             <AnimatedTitle2 className="font-bold tracking-tight md:!pb-10 !pb-0 text-white" text='Our Core Values'/>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 md:h-full h-screen ">
            {[{
              title: 'Authenticity',
              text: 'We create for real people, with real stories. Every piece should feel like it belongs to you before you wear it.',
              img: 'https://images.pexels.com/photos/1975342/pexels-photo-1975342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }, {
              title: 'Expression',
              text: 'Our designs speak loud—but your voice speaks louder. Fashion is how we amplify individuality.',
              img: 'https://i.pinimg.com/736x/6a/b5/74/6ab57434b44a7d58e2ea1eecdcc4d849.jpg'
            }, {
              title: 'Sustainability',
              text: 'We’re dedicated to sustainable materials, ethical labor, and mindful production with limited runs.',
              img: 'https://i.pinimg.com/736x/af/bb/c5/afbbc51577ea791bb8df28a87fc83af0.jpg'
            }].map((value, index) => (
              <div key={index} className="fade-in md:h-[700px] flex flex-col justify-end relative">
                 <Image
                    src={value.img}
                    alt="Mission Visual"
                    layout="fill"
                    objectFit="cover"
                    className="w-full"
                  />
               <div className='md:px-10 px-6 py-10 absolute inset-0 bg-opacity-40 flex flex-col justify-end bg-[#0000007a]'>
                 <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.text}</p>
               </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
     
    </div>
  );
};

export default About;
