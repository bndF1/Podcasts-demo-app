import { NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { tuiCountFilledControls } from '@taiga-ui/cdk';
import { TuiButton, TuiLink, TuiTextfield } from '@taiga-ui/core';
import {
  TuiChevron,
  TuiDataListWrapper,
  TuiFilter,
  TuiSegmented,
  TuiSwitch,
} from '@taiga-ui/kit';
import { TuiSearch } from '@taiga-ui/layout';
import { map } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    NgForOf,
    ReactiveFormsModule,
    TuiSearch,
    TuiTextfield,
    TuiButton,
    TuiSegmented,
    TuiChevron,
    TuiDataListWrapper,
    TuiFilter,
    TuiLink,
    TuiSwitch,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <search tuiSearch>
      <form [formGroup]="form">
        <fieldset tuiTextfieldSize="s">
          <tui-textfield iconStart="@tui.search">
            <input
              formControlName="search"
              placeholder="Search Episodes or Podcast..."
              tuiTextfield
            />
          </tui-textfield>
          <button size="s" tuiButton>Search</button>
        </fieldset>
      </form>
    </search>
  `,
})
export class SearchComponent {
  readonly form = new FormGroup({
    search: new FormControl(),
    select: new FormControl(),
    date: new FormControl(),
    switch: new FormControl(),
    filter: new FormControl(),
    segmented: new FormControl(),
  });

  protected readonly filters = ['Python', 'JavaScript', 'TypeScript'];
  protected readonly segments = [null, 'New', 'Archived'];

  protected readonly count = toSignal(
    this.form.valueChanges.pipe(map(() => tuiCountFilledControls(this.form))),
    { initialValue: 0 },
  );
}
