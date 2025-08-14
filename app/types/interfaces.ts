export interface ForumPost {
  id: number;
  author: string;
  avatar: string;
  title: string;
  content: string;
  category: string;
  likes: number;
  replies: number;
  timestamp: string;
  tags: string[];
  images?: string[];
  isLiked: boolean;
}

export interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  type: 'virtual' | 'irl';
  location: string;
  attendees: number;
  maxAttendees: number;
  image: string;
  host: string;
  tags: string[];
  isAttending: boolean;
}

export interface EarlyAccessItem {
  id: number;
  title: string;
  description: string;
  image: string;
  originalPrice: number;
  memberPrice: number;
  discount: number;
  releaseDate: string;
  category: string;
  isWishlisted: boolean;
  stock: number;
}

export interface Story {
  id: number;
  name: string;
  location: string;
  story: string;
  hashtag: string;
  image: string;
  outfit: string;
  likes: number;
  isLiked: boolean;
}

export interface JoinFormData {
  name: string;
  email: string;
  location: string;
  interests: string[];
  styleDescription: string;
}

export interface PostContent {
  title: string;
  content: string;
  category: string;
  tags: string[];
  images: string[];
}