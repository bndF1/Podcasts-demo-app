import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoadingService } from '@services';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);

  loadingService.startLoading(); // Show loading spinner UI element

  return next(req).pipe(
    finalize(() => {
      console.log('Request completed');
      loadingService.stopLoading(); // Hide loading spinner UI element
    }),
  );
};
