import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiButton, TuiIcon, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge, TuiCell } from '@taiga-ui/layout';
import { Episode } from 'src/app/models';

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
    TuiChip,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let episodeInfo = episode();
    <button tuiCardLarge tuiCell tuiSurface="elevated" class="flex w-full mb-4">
      <tui-avatar appearance="primary" [src]="episodeInfo.image" />
      <div tuiTitle>
        {{ episodeInfo.title }}
        <div tuiSubtitle>{{ episodeInfo.description }}</div>
      </div>

      <tui-chip>{{ episodeInfo.category }}</tui-chip>
      <tui-icon icon="@tui.circle-play" />
      <tui-icon icon="@tui.list-plus" />
    </button>
  `,
})
export class EpisodesItemComponent {
  episode = input.required<Episode>();
}
