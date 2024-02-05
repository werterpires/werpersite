import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ICompleteSubscription } from '../types';
import { AuthService } from '../../../shared/sharedServices/auth.service';

@Injectable({
  providedIn: 'root',
})
export class OneSubscriptionService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  getOneSubscriptionById(
    subscriptionId: number
  ): Observable<ICompleteSubscription> {
    const headers = this.authService.getHeadObject();
    return this.http

      .get<ICompleteSubscription>(
        'http://localhost:3000/subscriptions/own/' + subscriptionId,
        {
          headers,
        }
      )
      .pipe(
        catchError((error) => {
          return throwError(() => new Error(error.error.message));
        })
      );
  }
}
