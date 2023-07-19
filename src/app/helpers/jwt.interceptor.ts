import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  headers = {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjJhYTI4YTdmMjNmYTE4OGIzMTcyN2Q1OTdkZGJjNiIsInN1YiI6IjY0YjgwMWZjNWFhZGM0MDEzOWQxNmVlYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N_AM7wYJIf3IeC6-cQOyu6otisZa3nNUfN_aszHZA7k',
  };
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    request = request.clone({
      setHeaders: this.headers,
    });
    return next.handle(request);
  }
}
