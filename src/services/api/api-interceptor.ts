import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (request.url.includes('dog')) {
      console.log('Request on https://some-random-api.ml/img/dog');
    } else if (request.url.includes('facts')) {
      console.log('Request on https://some-random-api.ml/facts ');
    }

    return next.handle(request);
  }
}
