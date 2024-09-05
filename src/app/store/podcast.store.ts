import { computed, inject, InjectionToken } from '@angular/core';
import { Podcast } from '@models';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { PodcastService } from '@services';
import { lastValueFrom } from 'rxjs';

type PodcastStoreState = {
  podcasts: Podcast[];
  myPodcasts: Podcast[];
  loading: boolean;
  filter: { query: string; order: 'asc' | 'desc' };
};

const initialState: PodcastStoreState = {
  podcasts: [],
  myPodcasts: [],
  loading: false,
  filter: { query: '', order: 'asc' },
};

const STORE_STATE = new InjectionToken<PodcastStoreState>('PodcastStore', {
  factory: () => initialState,
});

export const PodcastStore = signalStore(
  { providedIn: 'root' },
  withState(() => inject(STORE_STATE)),
  withEntities<Podcast>(),
  withMethods((store, podcastService = inject(PodcastService)) => ({
    async getAllPodcasts() {
      patchState(store, { loading: true });
      const allPodcasts = await lastValueFrom(podcastService.getAll());
      patchState(store, { podcasts: allPodcasts, loading: false });
    },
    getMyPodcasts() {
      return podcastService.getMyPodcasts();
    },
  })),
  withComputed(({ podcasts, myPodcasts, filter }) => ({
    subscribedPodcasts: computed(() =>
      podcasts().filter((podcast) =>
        myPodcasts().some((myPodcast) => myPodcast.id === podcast.id),
      ),
    ),
    sortByRating: computed(() => {
      const direction = filter().order === 'asc' ? 1 : -1;
      return podcasts().sort((a, b) => (a.rating - b.rating) * direction);
    }),
  })),
  withHooks({
    async onInit(store) {
      store.getAllPodcasts();
    },
  }),
);
