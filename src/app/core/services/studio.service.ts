import { environment } from './../../../environments/environment';

import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Studio } from 'src/app/shared/models/studio';

@Injectable({
  providedIn: 'root'
})
export class StudioService {

  private baseUrl = `${environment.api}/studios`


  constructor(private http: HttpClient) { }

  getAllStudio(): Observable<Studio[]>{
    return this.http.get<Studio[]>(this.baseUrl).pipe(
      catchError( err => {
        throw 'Errror' + err;
      })
    )
  }
}
