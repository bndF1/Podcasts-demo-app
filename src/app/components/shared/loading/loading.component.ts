import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ` <div class="flex w-full justify-center">
    <span class="loading loading-dots loading-lg"></span>
  </div>`,
})
export class LoadingComponent {}
