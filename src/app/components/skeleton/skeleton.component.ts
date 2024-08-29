import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="w-fulld mx-auto animate-pulse p-9">
      <h1 class="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
      <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
    </div>
  `,
})
export class SkeletonComponent {}
