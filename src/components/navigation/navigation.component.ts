import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TuiRepeatTimes } from '@taiga-ui/cdk';
import {
  TuiAppearance,
  TuiButton,
  TuiDataList,
  TuiDropdown,
  TuiIcon,
  TuiSurface,
  TuiTitle,
} from '@taiga-ui/core';
import {
  TuiAvatar,
  TuiBadge,
  TuiBadgeNotification,
  TuiChevron,
  TuiDataListDropdownManager,
  TuiFade,
  TuiTabs,
} from '@taiga-ui/kit';
import { TuiCardLarge, TuiHeader, TuiNavigation } from '@taiga-ui/layout';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    CommonModule,
    TuiNavigation,
    TuiButton,
    TuiIcon,
    TuiChevron,
    TuiDropdown,
    TuiFade,
    TuiDataList,
    TuiBadgeNotification,
    TuiAvatar,
    RouterLink,
    RouterLinkActive,
    TuiAppearance,
    TuiBadge,
    TuiTabs,
    TuiRepeatTimes,
    TuiCardLarge,
    TuiHeader,
    TuiSurface,
    TuiTitle,
    TuiDataListDropdownManager,
  ],
  template: `
    <header tuiNavigationHeader>
      <button appearance="secondary" iconStart="@tui.layout-grid" tuiIconButton>
        Menu
      </button>

      <hr />
      <button iconStart="@tui.search" tuiIconButton>Search</button>

      <button iconStart="@tui.ellipsis" tuiIconButton>More</button>
    </header>
    <div [style.display]="'flex'">
      <aside [style.height.rem]="27" [tuiNavigationAside]="expanded">
        <header>
          <button iconStart="@tui.home" tuiAsideItem>
            <span tuiFade>Home</span>
          </button>
        </header>

        <tui-aside-group>
          <button iconStart="@tui.settings" tuiAsideItem tuiChevron>
            Settings
            <ng-template>
              <button tuiAsideItem>Account</button>
              <button tuiAsideItem>Notifications</button>
            </ng-template>
          </button>
        </tui-aside-group>

        <hr />

        <footer>
          <button iconStart="@tui.star" tuiAsideItem>Favorites</button>
          <button
            tuiAsideItem
            [iconStart]="expanded ? '@tui.chevron-left' : '@tui.chevron-right'"
            (click)="expanded = !expanded"
          >
            {{ expanded ? 'Collapse' : 'Expand' }}
          </button>
        </footer>
      </aside>

      <main tuiNavigationMain>
        <nav tuiNavigationNav [style.position]="'sticky'">
          <!-- <a routerLink=".">
            <tui-icon icon="@tui.chevron-left" />
            Back
          </a>
          /
          <span tuiNavigationLogo>
            <span tuiFade>Groups</span>
            <tui-badge iconStart="@tui.lock">Status</tui-badge>
          </span>
          <hr /> -->
        </nav>

        <!-- <div
          *tuiRepeatTimes="let index of 10"
          tuiCardLarge
          tuiHeader
          tuiSurface="elevated"
        >
          <h2 tuiTitle>
            Some random content
            <span tuiSubtitle>A subtitle</span>
          </h2>
        </div> -->
      </main>
    </div>
  `,
})
export class NavigationComponent {
  expanded = false;
  routes: any = {};
}
