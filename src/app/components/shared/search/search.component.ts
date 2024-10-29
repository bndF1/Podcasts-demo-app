import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  output,
  viewChild,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { search } from '@utils';
import { BehaviorSubject, of, tap } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <label class="input input-bordered flex items-center gap-2">
      <input
        #search
        type="text"
        class="grow"
        placeholder="Search"
        (keyup)="updateSearch()"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="h-4 w-4 opacity-70"
      >
        <path
          fill-rule="evenodd"
          d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
          clip-rule="evenodd"
        />
      </svg>
    </label>
  `,
})
export class SearchComponent {
  private readonly searchInput = viewChild<ElementRef>('search');
  private searchText = new BehaviorSubject<string>('');

  value = output<string>();

  readonly searchTerm = toSignal(
    this.searchText.pipe(
      search((text) => of(text)),
      tap((text) => this.value.emit(text)),
    ),
  );

  updateSearch() {
    this.searchText.next(this.searchInput()?.nativeElement.value);
  }
}
