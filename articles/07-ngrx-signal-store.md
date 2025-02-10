---
title: "Mastering State Management with NgRx Signal Store in Angular \U0001F680"
published: true
description: "Discover how to master state management in Angular with NgRx Signal Store. This article explores the integration of Angular's Signals API with NgRx to create a powerful and efficient state management solution. Learn how to set up NgRx Signal Store, manage centralized state, leverage reactive updates, and utilize computed properties for derived state in your Angular applications."
tags: 'Angular, NgRx, signals, store'
cover_image: ./assets/ngrx-store.png
id: 2231126
date: '2025-02-10T10:18:12Z'
series: Ngrx Signal Store
---

In the ever-evolving landscape of Angular development, efficient state management is crucial for building scalable and maintainable applications. Enter NgRx Signal Store, a powerful solution that combines the simplicity of Angular's Signals API with the robustness of NgRx. Let's dive into how you can leverage NgRx Signal Store to streamline your state management in Angular applications.

---

## What is NgRx Signal Store?

NgRx Signal Store is a state management library that integrates seamlessly with Angular's Signals API. It provides a structured way to manage application state, offering benefits such as:

- Centralized state management
- Reactive updates with Signals
- Computed properties for derived state
- Type-safe state modifications
- Easy integration with Angular's dependency injection

---

### Setting Up NgRx Signal Store

To get started with NgRx Signal Store, you first need to install it in your Angular project.

```bash
bun add @ngrx/signals@latest
```

---

### Creating a Signal Store

Let's look at a real-world example of how to create a Signal Store for managing podcast data:

```typescript
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
  withMethods((store, podcastService = inject(PodcastService)) => ({
    async getAllPodcasts() {
      patchState(store, { loading: true });
      const allPodcasts = await lastValueFrom(podcastService.getAll());
      patchState(store, { podcasts: allPodcasts, loading: false });
    },
    async getMyPodcasts() {
      patchState(store, { loading: true });
      const pods = await lastValueFrom(podcastService.getMyPodcasts());
      patchState(store, { myPodcasts: pods, loading: false });
    },
  })),
  withHooks({
    async onInit(store) {
      store.getAllPodcasts();
      store.getMyPodcasts();
    },
  }),
);
```

**Key components of the store:**

- **State Definition**: We define the shape of our store state using TypeScript interfaces. Defined using an _InjectionToken_ allowing us to inject values, services, or configurations.
- **Initial State**: We set up the initial state of our store. Let's say "empty" in this case.
- **Store Creation**: We can use the methods that signalStore provides to create our store, providing various configurations.

---

### Computed Properties

One of the powerful features of NgRx Signal Store is the ability to create computed properties.

We can add computed signals to the store using the `withComputed` feature, which takes a factory function as its input.

```typescript
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
}));
```

This function runs within the injection context and returns a dictionary of computed signals.

It can leverage both previously defined state and existing computed signals accessible through the function's input argument.

These computed properties allow us to efficiently derive state without unnecessary recalculations.

---

### State Modifications

NgRx Signal Store provides a clean way to modify state through methods:

```typescript
withMethods((store, podcastService = inject(PodcastService)) => ({
  async getAllPodcasts() {
    patchState(store, { loading: true });
    const allPodcasts = await lastValueFrom(podcastService.getAll());
    patchState(store, { podcasts: allPodcasts, loading: false });
  },
  async getMyPodcasts() {
    patchState(store, { loading: true });
    const pods = await lastValueFrom(podcastService.getMyPodcasts());
    patchState(store, { myPodcasts: pods, loading: false });
  },
}));
```

- These methods encapsulate the logic for updating our store, making it easy to manage complex state changes.
- We can add methods to the store using the `withMethods` feature, which takes a factory function as its input and returns a dictionary of methods.
- Like `withComputed`, the `withMethods` factory runs within the injection context, providing access to the store's instance, including previously defined state, computed signals, and methods.

---

### Using the Store in Components

To use our NgRx Signal Store in a component, we can simply inject it and access its properties and methods:

```typescript
@Component({
  selector: 'app-podcasts-container',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let podcasts = store.podcasts();
    @defer (when podcasts) {
      <h2 class="text-2xl font-semibold text-center text-gray-800">
        All Podcasts
      </h2>
      <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        @for (podcast of podcasts; track podcast.id) {
          @defer (on viewport) {
            <app-podcast-item [podcast]="podcast" />
          } @placeholder {
            <app-skeleton />
          } @loading {
            <app-skeleton />
          }
        }
      </div>
    }
  `,
})
export class PodcastsContainerComponent {
  store = inject(PodcastStore);
}
```

This component injects our PodcastStore and uses its `podcasts` signal in the template, demonstrating how easy it is to consume state from our store.

---

### Benefits of NgRx Signal Store

- **Reactivity**: Changes to the store automatically update all subscribers, thanks to Signals.
- **Performance**: Computed properties and fine-grained updates lead to optimal performance.
- **Type Safety**: TypeScript integration provides excellent type checking and autocompletion.
- **Testability**: The structure of Signal Stores makes unit testing straightforward.
- **Developer Experience**: Simplified API compared to traditional NgRx, reducing boilerplate.

---

### Conclusion

NgRx Signal Store represents a significant step forward in state management for Angular applications. By combining the power of NgRx with the simplicity of Signals, it offers a robust yet developer-friendly solution for managing application state.

As you build your next Angular application, consider how NgRx Signal Store can help you create more maintainable, performant, and scalable state management solutions. Happy coding! 🚀
