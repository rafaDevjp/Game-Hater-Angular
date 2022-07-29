import { LoadingService } from './loading.service';
import { Games } from './../../shared/models/games';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { MyObjectGames } from 'src/app/shared/models/games';
import { environment } from 'src/environments/environment';

const token = window.localStorage.getItem('token')


@Injectable({
  providedIn: 'root'
})
export class GameService {

    baseUrl = `${environment.api}/games`;
    loading = false;

    constructor(private http:HttpClient) { }

    //get all games
    getAllGames(): Observable<MyObjectGames>{
        return this.http.get<MyObjectGames>(this.baseUrl).pipe(
            retry(3),
            catchError(this.handleError)
            );
    }

    // Get game find id references
    getGameId(id:Games): Observable<any>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.get(url).pipe(
            retry(3),
            catchError(this.handleError)
            );
    }

    // Create a new Games and insert in API:
    createGame(data: Games): Observable<Games>{
        return this.http.post<Games>(this.baseUrl, data).pipe(
            catchError(this.handleError)
        )
    }

    //Update Game:
    updateGame(game: any): Observable<Games>{
        const url = `${this.baseUrl}`;
        return this.http.put<Games>(url, game).pipe(
            catchError(this.handleError)
        )
    }

    //
    deleteGame(id:any): Observable<any>{
        const url = `${this.baseUrl}/${id}`;
        return this.http.delete(url).pipe(
          catchError(this.handleError)
        )
    }


      //ERROS MESSAGES
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
      return throwError(() => new Error('net::ERR_INTERNET_DISCONNECTED' + error.error));
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error(' ::: Something bad happened; please try again later. :::'));
  }




}//END_CLASS
