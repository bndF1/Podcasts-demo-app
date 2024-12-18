import { Route } from '@angular/router';

const EPISODES_ROUTE: Route = {
  path: 'episodes',
  loadComponent: async () =>
    (await import('src/app/components/episodes')).EpisodesContainerComponent,
};

const PODCASTS: Route = {
  path: 'podcasts',
  loadComponent: async () =>
    (await import('src/app/components/podcasts')).PodcastsContainerComponent,
};

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'main/podcasts',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: async () =>
      (await import('src/app/components/navigation')).NavigationComponent,
    children: [PODCASTS, EPISODES_ROUTE],
  },
];
