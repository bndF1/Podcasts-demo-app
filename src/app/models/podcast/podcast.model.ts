export interface Podcast {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  language: string;
  website: string;
  subscribers: number;
  rating: number;
}

export type SubscribedPodcast = Podcast & { subscribed: boolean };
