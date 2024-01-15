import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ITerm } from './types';

@Injectable({
  providedIn: 'root',
})
export class TermsSignService {
  constructor(private readonly http: HttpClient) {}

  findAllTermsByRoleId(roleId: number): Observable<ITerm[]> {
    return this.http
      .get<ITerm[]>('http://localhost:3000/terms/role/' + roleId)
      .pipe(
        catchError((error) => {
          console.log('Aqui está o erro: ', error);
          return throwError(() => new Error(error));
        })
      );
  }
}
