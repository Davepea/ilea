import React from 'react';
import { MessageSquare, Calendar, Star, Heart, Share2 } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  setShowJoinModal: (show: boolean) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage, setShowJoinModal }) => (
  <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-gray-800">
    <div className="max-w-7xl mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div 
          className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent cursor-pointer"
          onClick={() => setCurrentPage('home')}
        >
          ILEA COMMUNITY
        </div>
        <div className="flex items-center space-x-6">
          <button 
            onClick={() => setCurrentPage('forum')}
            className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'forum' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
          >
            <MessageSquare className="w-4 h-4 inline mr-2" />
            Forum
          </button>
          <button 
            onClick={() => setCurrentPage('events')}
            className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'events' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
          >
            <Calendar className="w-4 h-4 inline mr-2" />
            Events
          </button>
          <button 
            onClick={() => setCurrentPage('early-access')}
            className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'early-access' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
          >
            <Star className="w-4 h-4 inline mr-2" />
            Early Access
          </button>
          <button 
            onClick={() => setCurrentPage('stories')}
            className={`px-4 py-2 rounded-lg transition-all ${currentPage === 'stories' ? 'bg-purple-600 text-white' : 'text-gray-300 hover:text-white'}`}
          >
            Stories
          </button>
          <button 
            onClick={() => setShowJoinModal(true)}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Join Community
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navigation;