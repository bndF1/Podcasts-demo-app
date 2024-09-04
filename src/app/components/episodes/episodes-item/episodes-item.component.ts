import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Episode } from '@models';

@Component({
  selector: 'app-episodes-item',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let episodeInfo = episode();

    <div class="card bg-base-100 shadow-xl mb-4">
      <div class="card-body">
        <h2 class="card-title">{{ episodeInfo.title }}</h2>
        <p>{{ episodeInfo.description }}</p>
        <div class="card-actions justify-start">
          <span
            class="bg-yellow-100 text-yellow-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300"
          >
            {{ episodeInfo.category }}</span
          >
          <span
            class="hover:cursor-pointer material-symbols-outlined"
            (click)="onClick()"
          >
            play_circle
          </span>
          <span class="hover:cursor-pointer material-symbols-outlined">
            add_to_queue
          </span>
        </div>
      </div>
    </div>
  `,
})
export class EpisodesItemComponent {
  episode = input.required<Episode>();

  onClick() {
    console.log('Play episode', this.episode().title);
  }
}
