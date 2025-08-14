'use client'
import React from 'react';

interface CommunityStats {
  members: string;
  cities: string;
  stories: string;
  authentic: string;
}

const StatsSection: React.FC = () => {
  const stats: CommunityStats = {
    members: '25K+',
    cities: '150+',
    stories: '500+',
    authentic: '100%'
  };

  return (
    <section className="py-10 bg-[#151414] backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(stats).map(([key, value]) => (
            <div key={key} className="animate-on-scroll stat-item text-center">
              <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-[#a5160c] to-[#FD5E53] bg-clip-text text-transparent mb-2">
                {value}
              </div>
              <div className="text-white font-medium">
                {key === 'members' && 'Community Members'}
                {key === 'cities' && 'Cities Worldwide'}
                {key === 'stories' && 'Stories Shared'}
                {key === 'authentic' && 'Authentic'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;