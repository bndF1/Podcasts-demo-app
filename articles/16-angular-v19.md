# Modernizing Angular: What's New in Angular 19

Angular 19 has officially arrived, and it's packed with a range of features aimed at improving developer experience, performance, and adaptability.

In this article, I'll walk you through the key highlights and what makes Angular 19 a pivotal step forward for modern web development.

## 1. Incremental Hydration: A Game Changer for SSR

The introduction of **incremental hydration** in Angular 19 takes Server-Side Rendering (SSR) to new heights. Unlike the traditional full hydration approach, incremental hydration allows the server-rendered components to hydrate only when they enter the viewport or become interactive.

This results in faster load times and a better user experience. This feature is currently in **developer preview**, but it’s showing great promise for optimizing the initial load and improving Lighthouse scores.

To achieve this, Angular collaborated with Chrome Aurora to bring a more seamless SSR experience that is adaptable to real-world usage, focusing on **lazy hydration**. Developers can now use directives like `@defer` to control exactly when a component should be hydrated, making the process highly efficient.

```typescript
import {
  provideClientHydration,
  withIncrementalHydration,
} from '@angular/platform-browser';

bootstrapApplication(AppComponent, {
  providers: [provideClientHydration(withIncrementalHydration())],
});
```

```html
@defer (hydrate on viewport) {
<shopping-cart></shopping-cart>
}
```

## 2. Event Replay: Ensuring Smooth User Interactions

A common problem in server-side rendered apps is the delay between a user interaction and the JavaScript responsible for handling that interaction being loaded.

**Event replay**, now enabled by default in Angular 19, captures user events during the initial load and replays them when the necessary JavaScript becomes available. This ensures a smooth user experience, even if the app is still in the process of hydrating.

The **event dispatch** is powered by the same library used by Google Search (Wiz) and has been tested by billions of users.

To enable event replay, Angular uses the following setup in the hydration provider:

```typescript
bootstrapApplication(App, {
  providers: [provideClientHydration(withEventReplay())],
});
```

This ensures that any user interactions that occur before the JavaScript is fully loaded are not lost, providing a seamless experience.

## 3. Route-Level Render Mode: Fine-Grained Control Over Rendering

Angular 19 introduces **route-level render mode**, which allows developers to specify how individual routes in an application should be rendered—either on the server, client, or prerendered during the build process.

This provides fine-grained control over rendering strategy, allowing developers to optimize for performance and SEO based on the specific needs of each route.

**Example:** A login route can be server-side rendered for faster initial load times, while a dashboard route can be client-side rendered to enhance interactivity. This flexibility helps ensure that each part of the application is optimized for its intended use case.

```typescript
export const serverRouteConfig: ServerRoute[] = [
  { path: '/login', renderMode: RenderMode.Server },
  { path: '/dashboard', renderMode: RenderMode.Client },
  { path: '/**', renderMode: RenderMode.Prerender },
];
```

Angular also provides an easy way to resolve route parameters during prerendering, allowing for highly customizable prerendered pages:

```typescript
export const routeConfig: ServerRoute = [
  {
    path: '/product/:id',
    mode: 'prerender',
    async getPrerenderPaths() {
      const dataService = inject(ProductService);
      const ids = await dataService.getIds();
      return ids.map((id) => ({ id }));
    },
  },
];
```

This new interface, **ServerRoute**, gives developers greater control over how content is delivered, improving both user experience and SEO.

## 4. Hot Module Replacement (HMR) Just Got Instant

Angular 19 introduces **instant HMR**, allowing styles and templates to be updated without reloading the entire app. This means that developers can see the effect of their changes immediately, making the development cycle much smoother and faster. Hot module replacement for styles is enabled by default in v19! To try HMR for templates use:

```bash
NG_HMR_TEMPLATES=1 ng serve
```

To disable this feature specify "hmr": false as a development server option, or alternatively use:

```bash
ng serve --no-hmr
```

## 5. Zoneless Support: Continued Evolution

Six months ago, Angular introduced experimental **zoneless** support. Since then, Angular has been iterating over the APIs and enhancing them—adding support for server-side rendering and improving the testing experience.

Angular partnered with the Google Fonts team to make their application zoneless and evaluate the developer experience. The results exceeded expectations, but there are still a few more polishing touches before moving this API to developer preview.

Angular 19 continues to push towards a future where zoneless operation becomes the default, significantly simplifying change detection and making applications leaner.

To experiment with zoneless, use the following setup:

```typescript
bootstrapApplication(App, {
  providers: [provideExperimentalZonelessChangeDetection()],
});
```

## 6. Linked Signals: Reactive State with Contextual Awareness

One of the coolest new additions is **linked signals**. With this feature, signals that are tied together maintain their relationships even when data updates. This is particularly useful for scenarios where multiple data points need to stay in sync dynamically. For instance, maintaining the state of a dropdown or a selection that is derived from another reactive source is now more straightforward and requires less boilerplate.

```typescript
const options = signal(['Apple', 'Banana', 'Cherry']);
const selectedOption = linkedSignal(() => options()[0]);

// Initial value
console.log(selectedOption()); // Output: 'Apple'

// Update the selected option manually
selectedOption.set('Banana');
console.log(selectedOption()); // Output: 'Banana'

// Update the options array, and the linked signal will update accordingly
options.set(['Kiwi', 'Pineapple']);
console.log(selectedOption()); // Output: 'Kiwi'
```

The **linkedSignal** API provides a simple way to express dependencies between stateful elements without resorting to effects. The new API has two forms: a simplified version (shown here) and an advanced version that gives developers access to previous values of both the linked and source signals.

## 7. Angular Material Upgrades

Angular Material also got a significant upgrade in Angular 19. There's now a new, more customizable **theming API**, allowing developers to easily override styles and tweak the look and feel of Angular Material components without diving into deeply nested CSS. Each component's documentation also includes a **Styling tab** for easier reference on how to make these changes.

The much-anticipated **Drag and Drop** component has finally been added natively to Angular Material, allowing developers to implement sophisticated drag-and-drop interactions without relying on third-party libraries.

```scss
@use '@angular/material' as mat;

@include mat.core();
$my-theme: mat.define-light-theme(
  (
    color: (
      primary: mat.define-palette(mat.$indigo-palette),
      accent: mat.define-palette(mat.$pink-palette, A200, A100, A400),
    ),
  )
);

@include mat.all-component-themes($my-theme);
```

To customize individual components:

```scss
@include mat.sidenav-overrides(
  (
    'content-background-color': purple,
    'container-divider-color': orange,
  )
);
```

## 8. Migration Scripts for Signals

Migrating your app to the new signals-based reactivity model is now simpler thanks to the built-in **migration scripts**. These scripts help transition your existing inputs, outputs, and queries to use signals instead of the older Angular decorators, ensuring your app stays modern with minimal effort.

```bash
ng generate @angular/core:signal-input-migration
```

## 9. Enhanced Content Security Policy

Security is another key focus of this release. Angular 19 introduces support for **auto CSP** (Content Security Policy), which automatically adds a secure CSP configuration to your application to prevent XSS attacks and other vulnerabilities by default. This is a significant step towards better security practices with less manual configuration.

```json
{
  "security": {
    "autoCsp": true
  }
}
```

## 10. The Future of Testing in Angular

Lastly, a major note on testing—**Karma** is being deprecated in favor of more modern tools like **Jest** and **Web Test Runner**. By mid-2025, Karma will no longer be supported, which gives developers ample time to migrate to a more reliable testing setup that integrates smoothly with the rest of the modern Angular ecosystem.

## Wrapping Up

Angular 19 isn't just an update; it's a forward-thinking version that optimizes for both developer and user experience. With features like incremental hydration, event replay, route-level render modes, instant HMR, the move towards zoneless, and a plethora of productivity enhancements, this version brings Angular closer to its ideal—a modern, high-performance, developer-friendly framework.

If you're looking to migrate or start a new project, Angular 19 provides a solid foundation that supports cutting-edge features and evolving best practices. Let me know what features you're most excited about, or if you have any questions about adopting Angular 19 in your projects!
