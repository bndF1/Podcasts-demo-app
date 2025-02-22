---
title: 'New in Angular: Bridging RxJS and Signals with toSignal!'
published: true
description: 'Enhance your Angular apps with `toSignal`, a powerful feature that bridges RxJS Observables and Angular Signals!'
tags: 'angular, rxjs, signals'
cover_image: ./assets/to-signal.png
id: 2158985
date: '2024-12-17T11:33:49Z'
---

Angular developers, are you ready to simplify your reactive programming? Let me introduce you to `toSignal`, a game-changing feature that seamlessly connects RxJS Observables with Angular's new Signals API.

🔗 What is `toSignal`?
It's a function that converts an Observable into a Signal, giving you the best of both worlds - the power of RxJS and the simplicity of Signals.

💡 Key benefits:

1. Streamlined code: No more async pipe in templates
2. Automatic subscription management
3. Use anywhere in your app, not just in templates
4. Improved performance and change detection

Here's a quick example from a recent project:

```typescript
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
```

And here's how you can use it in a component:

```typescript
@Component({
  selector: 'app-episodes-container',
  template: `
    @for (episode of episodes(); track episode.id) {
      <app-episodes-item [episode]="episode" />
    }
  `,
})
export class EpisodesContainerComponent {
  episodes = inject(EpisodesService).getAllEpisodes();
}
```

We're fetching data from an API, transforming it with EpisodeAdapter, and then wrapping the resulting Observable with toSignal(). Now, any component using this service can easily consume the episode data as a Signal!

In the template, we can directly use episodes() to access the latest value, just like any other Signal!
⚠️ Important Note: The RxJS Interop package (`@angular/core/rxjs-interop`) is currently available for developer preview. While it's ready for experimentation, be aware that it might undergo changes before reaching a stable release.

🚀 Ready to level up your Angular skills? Start experimenting with `toSignal` in your projects today!!

What do you think? Want to dive deeper into Signals and RxJS integration? Let me know in the comments!.
