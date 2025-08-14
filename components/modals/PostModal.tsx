// components/modals/PostModal.tsx
import React, { useState } from 'react';
import { X, Camera } from 'lucide-react';
import ModalWrapper from './ModalWrapper';
import { ForumPost, PostContent } from '@/app/types/interfaces';

interface PostModalProps {
  showPostModal: boolean;
  setShowPostModal: (show: boolean) => void;
  forumPosts: ForumPost[];
  setForumPosts: React.Dispatch<React.SetStateAction<ForumPost[]>>;
}

const PostModal: React.FC<PostModalProps> = ({
  showPostModal,
  setShowPostModal,
  forumPosts,
  setForumPosts,
}) => {
  const [postContent, setPostContent] = useState<PostContent>({
    title: '',
    content: '',
    category: 'Style Tips',
    tags: [],
    images: [],
  });
  const [tagInput, setTagInput] = useState('');

  const handleAddTag = () => {
    const tag = tagInput.trim();
    if (tag && !postContent.tags.includes(tag)) {
      setPostContent({ ...postContent, tags: [...postContent.tags, tag] });
      setTagInput('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setPostContent({
      ...postContent,
      tags: postContent.tags.filter(tag => tag !== tagToRemove),
    });
  };

  const handleSubmit = () => {
    const newPost: ForumPost = {
      id: forumPosts.length + 1,
      author: 'You',
      avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=50&h=50&fit=crop&crop=face',
      title: postContent.title,
      content: postContent.content,
      category: postContent.category,
      likes: 0,
      replies: 0,
      timestamp: 'Just now',
      tags: postContent.tags,
      images: postContent.images,
      isLiked: false,
    };

    setForumPosts([newPost, ...forumPosts]);
    setShowPostModal(false);
    setPostContent({ title: '', content: '', category: 'Style Tips', tags: [], images: [] });
  };

  if (!showPostModal) return null;

  return (
    <ModalWrapper title="Create New Post" onClose={() => setShowPostModal(false)}>
      <div className="space-y-4">
        <div>
          <label className="block text-gray-300 text-sm mb-2">Title</label>
          <input
            type="text"
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="What's your post about?"
            value={postContent.title}
            onChange={(e) => setPostContent({ ...postContent, title: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Content</label>
          <textarea
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
            placeholder="Share your thoughts..."
            rows={5}
            value={postContent.content}
            onChange={(e) => setPostContent({ ...postContent, content: e.target.value })}
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Category</label>
          <select
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
            value={postContent.category}
            onChange={(e) => setPostContent({ ...postContent, category: e.target.value })}
          >
            <option value="Style Tips">Style Tips</option>
            <option value="Community Stories">Community Stories</option>
            <option value="Sustainability">Sustainability</option>
          </select>
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Tags</label>
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="text"
              className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              placeholder="Add tags (e.g. streetwear)"
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="bg-purple-500 text-white px-4 py-3 rounded-lg hover:bg-purple-600 transition-colors"
            >
              Add
            </button>
          </div>

          {postContent.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {postContent.tags.map(tag => (
                <div key={tag} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm flex items-center">
                  #{tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-gray-400 hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <label className="block text-gray-300 text-sm mb-2">Add Images (Optional)</label>
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
            <Camera className="w-8 h-8 mx-auto text-gray-400 mb-2" />
            <p className="text-gray-400 text-sm">Drag & drop images here or click to browse</p>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="button"
            onClick={handleSubmit}
            disabled={!postContent.title || !postContent.content}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-all ${
              !postContent.title || !postContent.content
                ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
            }`}
          >
            Post to Community
          </button>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default PostModal;
