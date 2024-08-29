import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EpisodesService } from 'src/app/services';
import { SkeletonComponent } from '../skeleton/skeleton.component';
import { EpisodesItemComponent } from './episodes-item/episodes-item.component';

@Component({
  selector: 'app-episodes-container',
  standalone: true,
  imports: [CommonModule, EpisodesItemComponent, SkeletonComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let episodeList = episodes();
    @if (episodeList) {
      @for (episode of episodeList; track episode.id) {
        @defer (on viewport) {
          <app-episodes-item [episode]="episode" />
        } @placeholder {
          <app-skeleton />
        } @loading {
          <app-skeleton />
        }
      }
    }
  `,
})
export class EpisodesContainerComponent {
  episodes = inject(EpisodesService).getAllEpisodes();
}
