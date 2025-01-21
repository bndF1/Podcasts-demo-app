---
title: 'Boosting Angular Performance: @defer, Lazy Loading, and Core Web Vitals'
published: false
description: Understanding Core Web Vitals
tags: 'Angular, CoreWebVitals, defer, LazyLoading'
cover_image: ./assets/core-web-vitals.png
---

## 🔍 Understanding Core Web Vitals

Before we dive in, let's quickly recap what Core Web Vitals are:

- **Largest Contentful Paint (LCP)**: Measures loading performance. 🖼️
- **Interaction to Next Paint (INP)**: Measures overall responsiveness. ⚡ - INP replaced First Input Delay (FID) in March 2024.
- **Cumulative Layout Shift (CLS)**: Measures visual stability. 📏

> **Note**: First Input Delay (FID) is no longer a Core Web Vital. It measured initial interactivity, aiming for values less than 100 milliseconds for a good user experience. INP now provides a more comprehensive measure of responsiveness throughout the user's entire session.

## 🧩 The Power of @defer

Angular's `@defer` block is a game-changer for performance optimization. It allows you to defer the loading of component trees until they're needed. Here's an example:

```typescript
@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to Our Podcast App</h1>
    <app-featured-podcasts />
    @defer (on viewport) {
      <app-podcast-list [podcasts]="podcasts" />
    } @placeholder {
      <p>Scroll down to see more podcasts...</p>
    }
  `,
})
export class HomeComponent {
  podcasts = inject(PodcastStore).podcasts;
}
```

In this example, the `app-podcast-list` component will only be loaded when it enters the viewport, but it starts prefetching when the browser is idle.

`On idle` will trigger the deferred loading once the browser has reached an idle state. This is the default behavior with a defer block.

### 🎯 Impact on Core Web Vitals

- **Improves LCP**: Deferring non-critical content allows faster loading of main content. Lazy loading reduces initial bundle size, speeding up load times.
- **Enhances INP**: By deferring non-essential interactivity, the app remains responsive throughout the user's session. Prefetching during idle time ensures smoother interactions when content is needed.
- **Minimizes CLS**: Using placeholders prevents layout shifts as deferred content loads.

## 🏋️ Lazy Loading: The Perfect Companion

Combine `@defer` with lazy loading for even better performance:

```typescript
const routes: Routes = [
  {
    path: 'podcasts',
    loadComponent: () =>
      import('./podcasts/podcasts.component').then((m) => m.PodcastsComponent),
  },
];
```

This approach loads the entire `PodcastsComponent` only when the user navigates to the `/podcasts` route.

### 🎯 Core Web Vitals impact

- **Further improves LCP**: Initial bundle size is reduced, leading to faster load times.
- **Boosts FID**: Less JavaScript to parse on initial load means the app becomes interactive faster.

## 🔧 Practical Implementation Tips

### Prioritize Above-the-fold Content

Use `@defer` for below-the-fold content to improve LCP.

```typescript
@Component({
  selector: 'app-home',
  template: `
    <app-header />
    <app-featured-podcasts />
    @defer (on viewport; prefetch on idle) {
      <app-podcast-categories />
    } @placeholder {
      <div>...</div>
    }
  `,
})
export class HomeComponent {}
```

### Smart Prefetching

For critical paths, use prefetch with `@defer`:

```typescript
@let podcasts = store.podcasts();
@defer (on interaction; prefetch when podcasts) {
  <!-- content -->
} @placeholder {
  <div>...</div>
}
```

Multiple event triggers can be defined at once.

### Lazy Load Feature Modules

Group related functionality into feature modules and lazy load them:

```typescript
const routes: Routes = [
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];
```

### Use Standalone Components

They can be lazy-loaded individually, offering finer-grained control:

```typescript
const routes: Routes = [
  {
    path: 'profile',
    loadComponent: () =>
      import('./profile.component').then((m) => m.ProfileComponent),
  },
];
```

## 🎭 Real-world Scenario: Podcast Streaming App

Let's look at how we might apply these techniques in a podcast streaming app:

```typescript
@Component({
  selector: 'app-podcasts-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let podcasts = store.podcasts();
    @defer (when podcasts) {
      <h2 class="text-2xl capitalize lg:text-3xl">All Podcasts</h2>
      <div class="grid gap-8 mt-8">
        @for (podcast of podcasts; track podcast.id) {
          @defer (on viewport) {
            <app-podcast-item [podcast]="podcast" />
          } @placeholder {
            <app-skeleton />
          }
        }
      </div>
    }
    @defer (on interaction; prefetch when isLoggedIn()) {
      <app-add-to-favorites [podcast]="podcast" />
    } @placeholder {
      <div>...</div>
    }
    @defer (on timer(5s); prefetch on idle) {
      <app-related-podcasts [category]="podcast.category" />
    } @placeholder {
      <div>...</div>
    }
  `,
})
export class PodcastsContainerComponent {
  store = inject(PodcastStore);
  isLoggedIn = inject(AuthService).isLoggedIn();
}
```

This example:

- Loads critical content immediately.
- Defers episode list, loading when in viewport and prefetching during idle time.
- Defers and prefetches "Add to Favorites" based on user login state.
- Defers related podcasts, loading after 5 seconds but prefetching during idle time.

This approach significantly improves all Core Web Vitals:

- **LCP**: Critical content loads first.
- **INP**: Interactivity is improved by deferring non-essential components.
- **CLS**: Placeholders prevent layout shifts as content loads.

## 📊 Measuring the Impact

Always measure the impact of your optimizations:

- Use Chrome DevTools' Performance tab to analyze loading, scripting, and rendering times.
- Leverage Lighthouse for a comprehensive performance audit, including Core Web Vitals scores.
- Monitor real-user metrics using tools like Google Analytics or custom performance tracking.

## 🏁 Conclusion

By leveraging `@defer` blocks with placeholders, loading states, and prefetching, combined with lazy loading, you can significantly improve your Angular app's performance and Core Web Vitals scores. Remember, performance optimization is an ongoing process. Continuously measure, optimize, and iterate for the best results.

The key is to understand your user's journey and prioritize content accordingly. Use `@defer` and lazy loading strategically to create a fast, responsive, and smooth user experience.

Have you implemented `@defer` or lazy loading in your Angular projects? What improvements did you see? Share your experiences in the comments below! 💬
