import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Podcast } from '@models';

@Component({
  selector: 'app-podcast-item',
  imports: [NgOptimizedImage],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (podcast(); as podcast) {
      <div
        class="overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800"
      >
        <div class="px-4 py-2">
          <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">
            {{ podcast.title }}
          </h1>
          <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
            {{ podcast.description }}
          </p>
        </div>

        <img
          class="object-cover w-full h-48 mt-2"
          [ngSrc]="podcast.image"
          [alt]="podcast.title"
          width="400"
          height="192"
        />

        <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
          <h1 class="text-lg font-bold text-white">{{ podcast.rating }}</h1>
          <button
            class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none"
          >
            Subscribe
          </button>
        </div>
      </div>
    }
  `,
})
export class PodcastItemComponent {
  podcast = input.required<Podcast>();
}
