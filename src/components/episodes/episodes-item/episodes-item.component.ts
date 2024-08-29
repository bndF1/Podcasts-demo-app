import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Episode } from '@models';
import { TuiButton, TuiIcon, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';

@Component({
  selector: 'app-episodes-item',
  standalone: true,
  imports: [
    CommonModule,
    TuiCardLarge,
    TuiIcon,
    TuiAvatar,
    TuiButton,
    TuiSurface,
    TuiCell,
    TuiTitle,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let episodeInfo = episode();
    <button tuiCardLarge tuiCell tuiSurface="elevated" class="mb-4">
      <tui-avatar appearance="primary" [src]="episodeInfo.image" />
      <div tuiTitle>
        {{ episodeInfo.title }}
        <div tuiSubtitle>{{ episodeInfo.description }}</div>
      </div>
    </button>
  `,
})
export class EpisodesItemComponent {
  episode = input.required<Episode>();
}
