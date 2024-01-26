import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import {
  CreateSubscriptionDto,
  ISubscription,
  UpdateSubscriptionDto,
} from './types';
import { AuthService } from '../../shared/sharedServices/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getOwnSubscriptionsByUserId(): Observable<ISubscription[]> {
    const headers = this.authService.getHeadObject();
    return this.http

      .get<ISubscription[]>('http://localhost:3000/subscriptions/own', {
        headers,
      })
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }

  createSubscription(
    createSubscriptionData: CreateSubscriptionDto
  ): Observable<ISubscription> {
    const headers = this.authService.getHeadObject();
    return this.http
      .post<ISubscription>(
        'http://localhost:3000/subscriptions',
        createSubscriptionData,
        { headers }
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }

  updateSubscription(
    updateSubscriptionData: UpdateSubscriptionDto
  ): Observable<ISubscription> {
    const headers = this.authService.getHeadObject();
    return this.http
      .put<ISubscription>(
        `http://localhost:3000/subscriptions/`,
        updateSubscriptionData,
        { headers }
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }
}
