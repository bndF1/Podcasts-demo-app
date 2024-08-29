import { Route } from '@angular/router';

const EPISODES_ROUTE: Route = {
  path: 'episodes',
  loadComponent: async () =>
    (await import('@components/episodes')).EpisodesContainerComponent,
};

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    loadComponent: async () =>
      (await import('@components/navigation')).NavigationComponent,
    children: [EPISODES_ROUTE],
  },
];
