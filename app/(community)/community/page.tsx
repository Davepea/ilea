'use client'
import { useEffect } from 'react';
import Navigation from '@/components/community/Navigation';
import HeroSection from '@/components/community/HeroSection';
import StatsSection from '@/components/community/StatsSection';
import StoriesSection from '@/components/community/StoriesSection';
import FeaturesSection from '@/components/community/FeaturesSection';
import NewsLetter from '@/components/NewsLetter';
import Marquee from '@/components/Marquee';

const CommunityPage: React.FC = () => {
 
  useEffect(() => {
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className=" text-white overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <Marquee/>
      <StatsSection />
      <StoriesSection />
      <FeaturesSection />
      <Marquee/>
      <NewsLetter/>
    </div>
  );
};

export default CommunityPage;