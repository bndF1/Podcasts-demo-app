import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { EpisodesService } from '@services';
import { EpisodesItemComponent } from './episodes-item/episodes-item.component';

@Component({
  selector: 'app-episodes-container',
  standalone: true,
  imports: [CommonModule, EpisodesItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let episodeList = episodes();
    @if (episodeList) {
      @for (episode of episodeList; track episode.id) {
        @defer (on viewport) {
          <app-episodes-item [episode]="episode" />
        } @placeholder {
          <div>Loading...</div>
        }
      }
    }
  `,
})
export class EpisodesContainerComponent {
  episodes = inject(EpisodesService).getAllEpisodes();
}
