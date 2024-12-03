# 🚀 Exploring Angular Server-Side Rendering (SSR) 🚀

Let's break down Angular's Server-Side Rendering (SSR) basics, showing how this approach can dramatically boost performance and SEO with a few simple steps. Here’s a quick recap of what [Alain Chautard](https://www.linkedin.com/in/achautard/) shared at ng-conf:

## 🔹 Why SSR Matters

Traditional Angular apps rely on client-side rendering, which can slow down initial load times, especially on low-powered devices. SSR, however, pre-renders HTML on the server, giving users a fully rendered page right off the bat, improving speed, SEO, and user experience.

## 🔹 Simple Setup

With Angular 17+, enabling SSR is as simple as running **ng add @angular/ssr**. This automatically configures your project, adding server files and updating the configuration for server-side rendering.

## 🔹 Performance Boost

Running SSR with a sample e-commerce app, Alain showed how it achieves near-perfect Lighthouse scores (up to 99% performance). This is thanks to reduced layout shifts and immediate content rendering.

## 🔹 Client-Server Synchronization

Angular uses "hydration" to sync the server-rendered DOM with the client. Additionally, SSR allows caching HTTP requests on the server, reducing redundant client requests and speeding up load times.

This powerful feature makes it easier than ever to build high-performing, SEO-friendly Angular applications. [Watch Alain's session to dig deeper into SSR!](https://youtu.be/zCinRB33oqI?si=JGmZ6SyjqLUiQq5h)

---
