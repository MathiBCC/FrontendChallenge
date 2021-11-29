import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtService } from '../services/jwt.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private readonly jwtService: JwtService,
    private readonly router: Router,
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    } as any;

    const token = this.jwtService.getToken();

    if (token) headersConfig['Authorization'] = `Bearer ${token}`;

    const newRequest = request.clone({ setHeaders: headersConfig });

    return next.handle(newRequest).pipe(catchError(error => {
      if (error instanceof HttpErrorResponse) {
        switch (error.status) {
          case 401:
            this.jwtService.destroyToken();
            this.router.navigate(['/auth/login'], { queryParams: { returnUrl: this.router.url } });
            break;
          case 403:
            this.router.navigate(['/forbidden']);
            break;
        }
      }
      return throwError(error);
    }));
  }
}
