import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { SkeletonComponent } from '@components/shared';
import { PodcastStore } from '@store';
import { PodcastItemComponent } from './podcast-item/podcast-item.component';

@Component({
  selector: 'app-podcasts-container',
  imports: [PodcastItemComponent, SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let podcasts = store.podcasts();
    @defer (when podcasts) {
      <h2
        class="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white"
      >
        All Podcasts
      </h2>
      <div class="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        @for (podcast of podcasts; track podcast.id) {
          @defer (on viewport) {
            <app-podcast-item [podcast]="podcast" />
          } @placeholder {
            <app-skeleton [type]="'CARD'" />
          } @loading {
            <app-skeleton [type]="'CARD'" />
          }
        }
      </div>
    }
  `,
})
export class PodcastsContainerComponent {
  store = inject(PodcastStore);
}
