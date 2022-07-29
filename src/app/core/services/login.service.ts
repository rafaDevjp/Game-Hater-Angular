
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  baseUrl = `${environment.api}/auth`;

  constructor(private http:HttpClient) { }

  async getLogin(user:any){
    
   const data =  await this.http.post<any>(this.baseUrl, user).toPromise()

   if(data && data.token){
        window.localStorage.setItem('token', data.token);
        return true;
   }else{
        return false;
   }

  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }

  //Decodifica o token
  getTokenExpirationDate(token:string){ 
    const decoded: any = jwt_decode(token);
    if (decoded.exp === undefined) {
        return null;
    }
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  //verifica se o token esta expirado
  isTokenExpired(token?: string): boolean  {
      if (!token) {
        return true;
      }

      const date = this.getTokenExpirationDate(token)
      if(date ==undefined){
        return false;
      }

      return !(date.valueOf() > new Date().valueOf())
  }

  isUserLoggedIn(){
    const token = this.getAuthorizationToken()
    if(!token){
      return false;
    }else if(this.isTokenExpired(token)){
      return false;
    }

    return true;
  }

 

}//END_CLASS
