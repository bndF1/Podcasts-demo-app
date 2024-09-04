import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { EpisodeAdapter } from 'src/app/adapters/episode.adapter';
import { Chapter } from 'src/app/models';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  readonly path = '/episodes';

  readonly #api = inject(ApiService);

  getAllEpisodes() {
    return toSignal(
      this.#api.get<Chapter[]>(this.path).pipe(map(EpisodeAdapter)),
      { initialValue: [] },
    );
  }
}
