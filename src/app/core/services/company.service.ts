import { Observable, catchError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/shared/models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private baseUrl = `${environment.api}/companies`

  constructor(private http: HttpClient) { }

getCompany(): Observable<Company[]>{
  return this.http.get<Company[]>(this.baseUrl).pipe(
    catchError( err => {
      throw 'Errror' + err;
    })
  )
}

}
