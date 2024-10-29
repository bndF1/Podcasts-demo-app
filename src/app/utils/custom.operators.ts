import {
  Observable,
  debounceTime,
  distinctUntilChanged,
  filter,
  switchMap,
} from 'rxjs';

export function search<T, R>(data: (query: T) => Observable<R>, delay = 500) {
  return (source$: Observable<T>) =>
    source$.pipe(
      debounceTime(delay),
      distinctUntilChanged(),
      filter(Boolean),
      switchMap(data),
    );
}
