import { inject, Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { PodcastService } from '../podcasts/podcast.service';
import { EpisodesService } from '../episodes/episodes.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  episodesService = inject(EpisodesService);
  podcastService = inject(PodcastService);

  search(searchTerm: string) {
    console.log(searchTerm);
  }
}
