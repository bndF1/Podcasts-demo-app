---
title: Modernizing Angular: Embracing Fetch API for Better Performance and Security
published: true
description: Learn how to switch Angular HttpClient to use the Fetch API for improved performance and security.
tags: 'angular, performance, fetch'
cover_image: ./assets/ng-fetch.png
---

As Angular evolves, it brings exciting changes that streamline our development process and enhance our applications. One such change is the introduction of `app.config.ts`, where we now define providers for bootstrapping our main component. Today, let's highlight a simple yet powerful feature: switching Angular's HttpClient to use the Fetch API.

🔄 The Shift from XMLHttpRequest to Fetch
Traditionally, Angular's HttpClient relied on XMLHttpRequest (XHR) for handling HTTP requests. While XHR has served us well, the web platform has evolved, offering more modern alternatives.

Enter the **Fetch API** - a contemporary approach to making HTTP requests. With Angular's new configuration options, we can now easily switch HttpClient to use Fetch instead of XHR.

🌟 Why Consider the Switch?

1. **Performance Boost**: Fetch is designed with modern web applications in mind, offering potential performance improvements, especially for complex applications.
2. **Enhanced Security**: Fetch comes with better support for modern security features like CORS and Content Security Policy, helping to fortify our applications against common vulnerabilities.
3. **Simplified Promise-based API**: Fetch provides a cleaner, more intuitive API based on Promises, aligning well with modern JavaScript practices.
4. **Future-Proofing**: As the web evolves, Fetch is more likely to receive updates and improvements compared to the older XHR.

🛠️ How to Make the Switch
Implementing this change is surprisingly simple. In your `app.config.ts`, use the `withFetch()` option when providing HttpClient:

```typescript
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';

export const appConfig: ApplicationConfig = {
  providers: [
    // ... other providers
    provideHttpClient(withFetch()),
  ],
};
```

This small change can have a significant impact on your application's performance and security posture.

⚖️ Considerations
While Fetch offers numerous advantages, it's worth noting that it has some limitations. For instance, it doesn't support upload progress events, which might be crucial for certain applications. Always evaluate your specific needs before making the switch.

🎯 Conclusion
As Angular continues to embrace modern web standards, features like `withFetch()` offer us simple ways to keep our applications cutting-edge. By adopting these new capabilities, we not only potentially improve performance and security but also future-proof our applications.

💬 Have you tried switching to Fetch in your Angular applications? I'd love to hear about your experiences! Share your thoughts in the comments - did you notice any performance improvements? Any challenges you faced? Let's discuss and learn from each other's experiences!
