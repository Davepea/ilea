'use client';

import React, { useState } from 'react';
import { ForumPost } from '@/app/types/interfaces';
import PostModal from '@/components/modals/PostModal';
import Image from 'next/image';

const dummyPosts: ForumPost[] = [
  {
    id: 1,
    author: 'Jane Doe',
    avatar: 'https://images.pexels.com/photos/32203540/pexels-photo-32203540/free-photo-of-elegant-woman-in-white-lace-ensemble-portrait.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'My Favorite Streetwear Looks',
    content: 'I love pairing oversized hoodies with sleek cargo pants...',
    category: 'Style Tips',
    likes: 12,
    replies: 3,
    timestamp: '2 hours ago',
    tags: ['streetwear', 'hoodies'],
    images: [],
    isLiked: false
  },
  {
    id: 2,
    author: 'John Smith',
    avatar: 'https://images.pexels.com/photos/879585/pexels-photo-879585.png?auto=compress&cs=tinysrgb&w=600',
    title: 'How I Found Confidence Through Fashion',
    content: 'Growing up, I struggled with self-image. Clothing became my voice...',
    category: 'Community Stories',
    likes: 34,
    replies: 5,
    timestamp: '1 day ago',
    tags: ['confidence', 'stories'],
    images: [],
    isLiked: false
  }
];

const ForumPage = () => {
  const [forumPosts, setForumPosts] = useState<ForumPost[]>(dummyPosts);
  const [showPostModal, setShowPostModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredPosts = (forumPosts ?? []).filter(post => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === 'all' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Community Forum</h1>
        <button
          onClick={() => setShowPostModal(true)}
          className="bg-gradient-to-r from-[#FD5E53] to-[#FD5E53] text-white px-6 py-2 rounded-lg hover:from-[#FD5E53] hover:to-pink-600 transition-all"
        >
          New Post
        </button>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <input
          type="text"
          className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#FD5E53]"
          placeholder="Search posts..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          className="px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#FD5E53]"
        >
          <option value="all">All Categories</option>
          <option value="Style Tips">Style Tips</option>
          <option value="Community Stories">Community Stories</option>
          <option value="Sustainability">Sustainability</option>
        </select>
      </div>

      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <p className="text-gray-400 text-center">No posts found.</p>
        ) : (
          filteredPosts.map(post => (
            <div key={post.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Image
                  src={post.avatar}
                  alt={post.author}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-white font-semibold">{post.author}</h4>
                  <span className="text-gray-400 text-sm">{post.timestamp}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-gray-300 mb-2">{post.content}</p>
              <div className="text-sm text-gray-400">Category: {post.category}</div>
              {post.tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>

      <PostModal
        showPostModal={showPostModal}
        setShowPostModal={setShowPostModal}
        forumPosts={forumPosts}
        setForumPosts={setForumPosts}
      />
    </div>
  );
};

export default ForumPage;
