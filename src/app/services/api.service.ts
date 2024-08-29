import {
  HttpClient,
  HttpContext,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private http = inject(HttpClient);
  private path = environment.apiBasePath;

  get<T>(
    url: string,
    params: HttpParams = new HttpParams(),
    context?: HttpContext,
  ): Observable<T> {
    return this.http.get<T>(`${this.path}${url}`, {
      params: params,
      context: context,
    });
  }

  post<T, D>(
    url: string,
    data?: D,
    params: HttpParams = new HttpParams(),
    headers?: HttpHeaders,
    context?: HttpContext,
  ): Observable<T> {
    return this.http.post<T>(`${this.path}${url}`, data, {
      params: params,
      headers: headers,
      context: context,
    });
  }

  put<T, D>(url: string, data?: D, params?: HttpParams): Observable<T> {
    return this.http.put<T>(`${this.path}${url}`, data, { params: params });
  }

  delete<T>(url: string): Observable<T> {
    return this.http.delete<T>(`${this.path}${url}`);
  }
}
