import { inject, Injectable, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { EpisodeAdapter } from 'src/app/adapters/episode.adapter';
import { Chapter, Episode } from 'src/app/models';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class EpisodesService {
  readonly path = '/episodes';

  readonly #api = inject(ApiService);

  getAllEpisodes(): Signal<Episode[]> {
    return toSignal(
      this.#api.get<Chapter[]>(this.path).pipe(map(EpisodeAdapter)),
      { initialValue: [] },
    );
  }
}
