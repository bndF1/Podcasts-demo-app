# 🎙️ Podcasts demo app

The goal of this project is to show some of the new features that Angular is introducing.

Starting version 16, Angular has been making some changes that will become crucial for the future of the framework.

Starting from standalone components, the new control flow, new way to inject, etc to the new SSR and the future hydration and partial hydration that the core team is implementing now.

Signals from my point of view are the key point of the evolution, thanks to them we will be able to run away from zone.js and improve the performance a lot.

## 🚀 Project Overview

This project is a demonstration of modern Angular features and best practices, showcasing the evolution of the framework and its ecosystem. It's built using Angular 18.2.0 and leverages the power of Nx for monorepo management.

The goal of this project is to illustrate some of the new features that Angular is introducing, particularly focusing on changes that have been implemented since version 16. These changes are crucial for the future of the framework and include:

- Standalone components
- New control flow syntax
- New dependency injection techniques
- Server-Side Rendering (SSR) improvements
- Future hydration and partial hydration capabilities

A key focus of this demo is the implementation of Signals, which are viewed as a pivotal evolution in Angular's reactivity model. Signals are expected to significantly improve performance by enabling Angular to move away from Zone.js for change detection.

## 📚 Learning Articles

In the `articles` folder at the root of the project, you'll find a collection of short, insightful articles. These pieces aim to demonstrate powerful, future-oriented features of Angular, as well as some lesser-known aspects that can significantly improve development efficiency.

Each article focuses on a specific topic, providing practical examples and explanations of concepts that I believe will make Angular development easier and more effective.

Topics covered include:

- [New in Angular: Bridging RxJS and Signals with `toSignal`! 🚀](https://github.com/bndF1/Podcasts-demo-app/blob/main/articles/to-signal.md)

## 🏗️ Architecture and Key Features

### 🅰️ Angular 18.2.0

This project uses the latest stable version of Angular, taking advantage of its newest features and performance improvements.

### 📦 Nx Monorepo

The project is set up as an Nx monorepo, which provides:

- Efficient build system
- Powerful code generation tools
- Smart, fast testing capabilities

### 🧩 Standalone Components

All components in this project are standalone, showcasing Angular's move towards a more modular and tree-shakable architecture.

### 📡 Signals

The project extensively uses Angular's new Signals API for state management and reactivity. Signals provide a more efficient and predictable way to handle reactive state in Angular applications.

### 🏪 NgRx Signal Store

NgRx SignalStore is a fully-featured state management solution that offers a robust way to manage application state. With its native support for Signals, it provides the ability to define stores in a clear and declarative manner. The simplicity and flexibility of SignalStore, coupled with its opinionated and extensible design, establish it as a versatile solution for effective state management in Angular.

### 🔄 RxJS Integration

The project demonstrates the integration of RxJS with Signals, using the `toSignal` function to bridge the gap between Observables and Signals.

### 🚀 Lazy Loading

Routes are lazy-loaded to improve initial load time and overall application performance.

### 🖥️ Server-Side Rendering (SSR)

While not fully implemented in this demo, the project is structured to support SSR, which is a key feature for improving initial page load times and SEO.

### 🎨 Tailwind CSS and DaisyUI

The project uses Tailwind CSS for styling, with DaisyUI as a component library, providing a modern and responsive design system.

## 📁 Project Structure

- `src/app/components`: Contains all the Angular components, organized by feature
- `src/app/services`: Houses services for data fetching and business logic
- `src/app/models`: Defines TypeScript interfaces for data models
- `src/app/adapters`: Contains adapter functions for transforming API responses
- `src/app/store`: Implements the custom signal-based store
- `src/app/utils`: Utility functions and constants
- `src/environments`: Environment-specific configuration files

## 🔑 Key Components

- `NavigationComponent`: Handles the main navigation and layout of the application
- `PodcastsContainerComponent`: Manages the display of all podcasts
- `EpisodesContainerComponent`: Manages the display of podcast episodes

## 🛠️ Services

- `ApiService`: Handles HTTP requests to the backend API
- `PodcastService`: Manages podcast-related data and operations
- `EpisodesService`: Manages episode-related data and operations
- `LoadingService`: Manages loading state across the application

## 🗃️ State Management

The project uses NgRx SignalStore for managing application state. This demonstrates how Signals can be used to create a robust state management solution with the power and flexibility of NgRx.

## 🧪 Testing

The project is set up with Jest for unit testing and Playwright for end-to-end testing, ensuring code quality and reliability.

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `bun install`
3. Start the development server: `bun start`

## 🏗️ Building for Production

Run `nx build` or `bun run build` to build the project for production. The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

The project is currently deployed and can be previewed at:

[https://demos-sepia.vercel.app](https://demos-sepia.vercel.app)

This deployment is hosted on Vercel and represents the latest version of the application. Feel free to visit the link to see the project in action.

Note: The instance will spin down with inactivity, which can delay requests by 50 seconds or more.

## 🤝 Contributing

Contributions are welcome! Please read the contributing guidelines before submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
