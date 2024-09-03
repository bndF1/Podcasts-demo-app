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
          <div class="badge badge-accent p-4 mt-4">
            {{ episodeInfo.category }}
          </div>
          <button class="btn btn-circle"></button>
        </div>
      </div>
    </div>
  `,
})
export class EpisodesItemComponent {
  episode = input.required<Episode>();
}
