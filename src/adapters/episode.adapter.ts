import { Chapter, Episode } from 'src/app/models';

export const EpisodeAdapter = (chapters: Chapter[]): Episode[] =>
  chapters.map((chapter) => ({
    ...chapter,
    publishedDate: chapter.release_date,
    episodeNumber: chapter.episode_number,
    mp3: chapter.audio_url,
  }));
