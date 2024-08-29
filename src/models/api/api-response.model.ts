export interface Podcast {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  language: string;
  country: string;
  website: string;
  subscribers: number;
  monthly_listeners: number;
  average_rating: number;
}

export interface Chapter {
  id: number;
  podcast_id: number;
  title: string;
  description: string;
  duration: string;
  release_date: string;
  audio_url: string;
  image: string;
  episode_number: number;
  listeners: number;
  rating: number;
}

export interface ChapterComment {
  id: number;
  episode_id: number;
  username: string;
  comment_text: string;
  date_posted: string;
  likes: number;
  replies?: ChapeterReply[];
}

export interface ChapeterReply {
  id: number;
  username: string;
  comment_text: string;
  date_posted: string;
  likes: number;
}
