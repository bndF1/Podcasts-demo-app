import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';
import { NG_EVENT_PLUGINS } from '@taiga-ui/event-plugins';
import { loadingInterceptor } from 'src/interceptors/loading/loading.interceptor';
import { appRoutes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      appRoutes,
      withComponentInputBinding(),
      withViewTransitions(),
    ),
    NG_EVENT_PLUGINS,
    provideExperimentalZonelessChangeDetection(),
    provideHttpClient(withFetch(), withInterceptors([loadingInterceptor])),
  ],
};
