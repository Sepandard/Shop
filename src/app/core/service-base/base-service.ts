import { HttpClient } from '@angular/common/http';
import { Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {   catchError } from "rxjs/operators";
import { ErrorHandlingService } from '../error-handler/error-handling.service';
export class BaseService {
  http: HttpClient;
  errorHandler : ErrorHandlingService
  constructor(injector: Injector) {
    this.http = injector.get(HttpClient);
    this.errorHandler = injector.get(ErrorHandlingService)
  }

  baseUrl: string = environment.baseUrl;

  get$(url: string, model?: any): Observable<any> {
    return this.http.get(this.getGeneralUrl(url, model)).pipe(
      catchError(err => this.errorHandler.catchHttpError(err))
    );;
  }

  post$(url: string, body?: any): Observable<any> {
    return this.http.post(this.getGeneralUrl(url), body).pipe(
      catchError(err => this.errorHandler.catchHttpError(err))
    );;
  }

  put$(url: string, body?: any): Observable<any> {
    return this.http.put(this.getGeneralUrl(url), body).pipe(
      catchError(err => this.errorHandler.catchHttpError(err))
    );
  }

  delete$(url: string, model?: any): Observable<any> {
    return this.http.delete(this.getGeneralUrl(url, model)).pipe(
      catchError(err => this.errorHandler.catchHttpError(err))
    );;
  }

  private paramGenerator(model?: any): string {
    let path: string = '';
    if (model) {
      let keys = Object.keys(model);
      let value = Object.values(model);
      keys.forEach((element, index = 0) => {
        if ((index = 0)) {
          path = path + '?' + element + '=' + value[index];
        } else {
          path = path + '&' + element + '=' + value[index];
        }
      });
    } 
    return path;
  }

  private getGeneralUrl(url: string, model?: any): string {
    const params: string = this.paramGenerator(model);
    return `${this.baseUrl}/${url}${params}`;
  }
}
