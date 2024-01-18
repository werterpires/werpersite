import { Injectable } from '@angular/core';
import { LoginData } from './types';
import { Observable, catchError, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginData: LoginData): Observable<{ accessToken: string }> {
    return this.http
      .post<{ accessToken: string }>('http://localhost:3000/login', loginData)
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }
}
