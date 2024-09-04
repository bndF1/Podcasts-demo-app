import { inject, Injectable } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { Broadcast } from '@models';
import { map } from 'rxjs';

import { PodcastAdapter } from '@adapters';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  readonly PATH = '/podcasts';

  apiService = inject(ApiService);

  getAllPodcasts() {
    return toSignal(
      this.apiService
        .get<Broadcast[]>(`${this.PATH}`)
        .pipe(map(PodcastAdapter)),
    );
  }
}
