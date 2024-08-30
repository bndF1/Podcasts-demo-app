import { Broadcast, Podcast } from '@models';

export const PodcastAdapter = (pods: Broadcast[]): Partial<Podcast>[] =>
  pods.map((pod) => ({
    id: pod.id,
    title: pod.title,
    description: pod.description,
    image: pod.image,
    category: pod.category,
    rating: pod.average_rating,
  }));
