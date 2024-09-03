import { Chapter, Episode } from 'src/app/models';

export const EpisodeAdapter = (chapters: Chapter[]): Episode[] =>
  chapters.map((chapter) => ({
    id: chapter.id,
    title: chapter.title,
    description: chapter.description,
    image: chapter.image,
    duration: chapter.duration,
    publishedDate: chapter.release_date,
    episodeNumber: chapter.episode_number,
    mp3: chapter.audio_url,
    category: chapter.category,
  }));
