'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, Share2, MapPin } from 'lucide-react';

interface Story {
  id: number;
  name: string;
  image: string;
  location: string;
  hashtag: string;
  story: string;
  outfit: string;
  isLiked: boolean;
  likes: number;
}

export default function Story() {
  const [stories, setStories] = useState<Story[]>([]); // fetch or mock your stories

  useEffect(()=>{
       setStories([
      {
        id: 1,
        name: 'Maya Chen',
        location: 'Brooklyn, NY',
        story: "Finding Ilea was like finding my voice. Their pieces don't just fit my body—they fit my soul. Every morning, I choose rebellion over conformity.",
        hashtag: '#WearYourTruth',
        image: 'https://images.unsplash.com/photo-1494790108755-2616c95fd0d5?w=400&h=500&fit=crop&crop=face',
        outfit: 'Purple deconstructed blazer with statement jewelry',
        likes: 234,
        isLiked: true
      },
      {
        id: 2,
        name: 'Jamal Rivera',
        location: 'Los Angeles, CA',
        story: "Street culture meets consciousness. Ilea gets it. When I wear their designs, I'm not just dressed—I'm armed with authenticity.",
        hashtag: '#StayRaw',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face',
        outfit: 'Urban streetwear with bold graphics',
        likes: 189,
        isLiked: false
      },
      {
        id: 3,
        name: 'Alex Thompson',
        location: 'Portland, OR',
        story: "Slow fashion that moves fast through culture. Every Ilea drop feels like a movement, not just a purchase. This is how change looks.",
        hashtag: '#StayFirst',
        image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=500&fit=crop&crop=face',
        outfit: 'Sustainable avant-garde pieces',
        likes: 156,
        isLiked: true
      }
    ]);
  }, [])
  const handleLike = (storyId: number) => {
    setStories(stories =>
      stories.map(story =>
        story.id === storyId
          ? { ...story, isLiked: !story.isLiked, likes: story.isLiked ? story.likes - 1 : story.likes + 1 }
          : story
      )
    );
  };

  return (
    <div className="pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4">
            COMMUNITY <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">STORIES</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real people wearing their truth. See how our community styles ILEA pieces in their everyday lives.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map(story => (
            <div key={story.id} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all group">
              <div className="relative">
                <Image height={700} width={700} src={story.image} alt={story.name} className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{story.name}</h3>
                  <div className="text-gray-300 text-sm mb-2">
                    <MapPin className="w-4 h-4 inline mr-1" />
                    {story.location}
                  </div>
                  <div className="text-purple-300 text-sm font-medium">
                    {story.hashtag}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-300 mb-4 italic">&quot;{story.story}&quot;</p>
                <div className="text-sm text-gray-400 mb-4">
                  <span className="font-medium">Wearing:</span> {story.outfit}
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleLike(story.id)}
                    className={`flex items-center space-x-2 ${story.isLiked ? 'text-pink-400' : 'text-gray-400'} hover:text-pink-400 transition-colors`}
                  >
                    <Heart className={`w-5 h-5 ${story.isLiked ? 'fill-current' : ''}`} />
                    <span>{story.likes}</span>
                  </button>
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
