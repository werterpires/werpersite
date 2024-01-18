import { Injectable } from '@angular/core';
import { IFormErrors } from '../../shared/form-error/types';
import { Validates } from '../../shared/utils/validates';
import { CreateSignerUserDto } from './types';
import { Observable, catchError, throwError } from 'rxjs';
import { IUser } from '../../shared/sharedTypes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LogonService {
  constructor(private readonly http: HttpClient) {}

  createSignerUser(
    createSignerUserData: CreateSignerUserDto
  ): Observable<IUser[]> {
    return this.http
      .post<IUser[]>(
        'http://localhost:3000/users/signer/',
        createSignerUserData
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }

  //-------------------------Validates------------------------------------------
}
