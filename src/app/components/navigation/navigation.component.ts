import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { LoadingComponent, SearchComponent } from '@components/shared';
import { LoadingService } from '@services';
import { map } from 'rxjs';

@Component({
  selector: 'app-navigation',
  imports: [CommonModule, RouterModule, SearchComponent, LoadingComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div #drawer>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        (click)="expanded.set(!expanded())"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>

        <span class="material-symbols-outlined"> menu </span>
      </button>

      @if (expanded()) {
        <aside
          id="default-sidebar"
          class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
          [ngClass]="{
            'translate-x-0': expanded(),
            '-translate-x-full': !expanded(),
          }"
        >
          <div
            class="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800"
          >
            <ul class="space-y-2 font-medium">
              <li>
                <a
                  routerLink="./podcasts"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="material-symbols-outlined"> podcasts </span>
                  <span class="ms-3">All Podcasts</span>
                </a>
              </li>
              <li>
                <a
                  [routerLink]="'./episodes'"
                  class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="material-symbols-outlined"> rss_feed </span>
                  <span class="flex-1 ms-3 whitespace-nowrap"
                    >Subscriptions</span
                  >
                </a>
              </li>
              <li>
                <a
                  class="cursor-not-allowed flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <span class="material-symbols-outlined"> queue_music </span>
                  <span class="flex-1 ms-3 whitespace-nowrap"
                    >Queue (todo)</span
                  >
                  <span
                    class="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >3</span
                  >
                </a>
              </li>
            </ul>
          </div>
        </aside>
      }
    </div>

    <div class="flex flex-col p-4 sm:ml-64 gap-4">
      <app-search />
      @if (isLoading()) {
        <app-loading />
      }
      <router-outlet />
    </div>
  `,
})
export class NavigationComponent {
  readonly drawer = viewChild<ElementRef>('drawer');

  readonly breakpointObserver = inject(BreakpointObserver);
  readonly isMobile = toSignal(
    this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .pipe(map((result) => result.matches)),
  );

  expanded = signal(!this.isMobile());

  isLoading = inject(LoadingService)._isLoading();

  @HostListener('document:click', ['$event'])
  @HostListener('document:touchend', ['$event'])
  @HostListener('document:scroll', ['$event'])
  @HostListener('document:keypress', ['$event'])
  public onClick($event: Event) {
    if (
      this.isMobile() &&
      !this.drawer()?.nativeElement.contains($event.target)
    ) {
      this.expanded.set(false);
    }
  }
}
