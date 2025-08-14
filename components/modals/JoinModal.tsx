// components/modals/JoinModal.tsx
import React from 'react';
import ModalWrapper from './ModalWrapper';
import { JoinFormData } from '@/app/types/interfaces';

interface JoinModalProps {
  showJoinModal: boolean;
  setShowJoinModal: (show: boolean) => void;
  joinFormData: JoinFormData;
  setJoinFormData: React.Dispatch<React.SetStateAction<JoinFormData>>;
}

const JoinModal: React.FC<JoinModalProps> = ({
  showJoinModal,
  setShowJoinModal,
  joinFormData,
  setJoinFormData,
}) => {
  if (!showJoinModal) return null;

  return (
    <ModalWrapper title="Join the Community" onClose={() => setShowJoinModal(false)}>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Full Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="Your name"
            value={joinFormData.name}
            onChange={(e) => setJoinFormData({ ...joinFormData, name: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="your@email.com"
            value={joinFormData.email}
            onChange={(e) => setJoinFormData({ ...joinFormData, email: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Location</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="City, Country"
            value={joinFormData.location}
            onChange={(e) => setJoinFormData({ ...joinFormData, location: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Your Style (Optional)</label>
          <textarea
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="Describe your personal style..."
            rows={3}
            value={joinFormData.styleDescription}
            onChange={(e) => setJoinFormData({ ...joinFormData, styleDescription: e.target.value })}
          ></textarea>
        </div>

        <div className="pt-4">
          <button
            type="button"
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all"
          >
            Submit Application
          </button>
        </div>
      </form>
    </ModalWrapper>
  );
};

export default JoinModal;
