import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PodcastService } from '@services';
import { PodcastItemComponent } from './podcast-item/podcast-item.component';

@Component({
  selector: 'app-podcasts-container',
  standalone: true,
  imports: [PodcastItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let podcasts = allPodcasts();
    @defer (when podcasts) {
      <h2
        class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
      >
        All Podcasts
      </h2>
      <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        @for (podcast of podcasts; track podcast.id) {
          <app-podcast-item [podcast]="podcast" />
        }
      </div>
    }
  `,
})
export class PodcastsContainerComponent {
  allPodcasts = inject(PodcastService).getAllPodcasts();
}
