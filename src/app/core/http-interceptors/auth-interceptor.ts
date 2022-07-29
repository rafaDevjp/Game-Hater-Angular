import { GameService } from './../services/game.service';
import { Injectable } from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse} from '@angular/common/http';

import { catchError, Observable, throwError } from 'rxjs';
import { LoginService } from '../services/login.service';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {

 


    constructor(
        private gameService:GameService, 
        private loginService: LoginService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.loginService.getAuthorizationToken();
    let request: HttpRequest<any> = req;

    if(token && !this.loginService.isTokenExpired(token)){

        request = req.clone({
            headers: req.headers.set('x-api-key', `${token}`)
        })

  
    }



    return next.handle(request).pipe(
        catchError(this.handleError)
    )
  }

  
  //ERROS MESSAGES
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error( error.error.message));
  }

  
}//EN_CLASS