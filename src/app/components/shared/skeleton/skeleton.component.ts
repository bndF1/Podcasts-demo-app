import { NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ng-container
      [ngTemplateOutlet]="type() === 'LIST' ? listSkeleton : cardSekeleton"
    />

    <ng-template #listSkeleton>
      <div class="w-fulld mx-auto animate-pulse p-9">
        <h1 class="h-2 bg-gray-300 rounded-lg w-52 dark:bg-gray-600"></h1>
        <p class="w-full h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700"></p>
        <p class="h-2 mt-4 bg-gray-200 rounded-lg dark:bg-gray-700 w-24"></p>
      </div>
    </ng-template>

    <ng-template #cardSekeleton>
      <div class="flex flex-col gap-4">
        <div class="flex items-center gap-4">
          <div class="flex flex-col gap-4">
            <div class="skeleton h-4 w-28"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-full"></div>
            <div class="skeleton h-4 w-20"></div>
          </div>
        </div>
        <div class="skeleton h-32 w-full"></div>
      </div>
    </ng-template>
  `,
})
export class SkeletonComponent {
  type = input<'LIST' | 'CARD'>('LIST');
}
