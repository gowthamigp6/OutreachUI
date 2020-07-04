import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' ,
  'Access-Control-Allow-Origin':'*', 
  "Access-Control-Allow-Credentials" : "true"})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  private loginUrl =  window["apiBaseUrl"]+"userDetails/signin"; 

  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
  }

}
