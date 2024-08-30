import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { TuiButton, TuiIcon, TuiSurface, TuiTitle } from '@taiga-ui/core';
import { TuiAvatar, TuiChip } from '@taiga-ui/kit';
import { TuiCardLarge } from '@taiga-ui/layout';
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
    TuiTitle,
    TuiChip,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @let episodeInfo = episode();
    <div tuiCardLarge tuiSurface="elevated" class="flex w-full mb-4">
      <div class="flex flex-row gap-4 items-center">
        <tui-avatar appearance="primary" [src]="episodeInfo.image" />
        <div tuiTitle>
          {{ episodeInfo.title }}
          <div tuiSubtitle>{{ episodeInfo.description }}</div>
        </div>
      </div>
      <div class="flex flex-row gap-2 items-center">
        <tui-chip>{{ episodeInfo.category }}</tui-chip>
        <tui-icon icon="@tui.circle-play" />
        <tui-icon icon="@tui.list-plus" />
      </div>
    </div>
  `,
})
export class EpisodesItemComponent {
  episode = input.required<Episode>();
}
