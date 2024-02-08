import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserFromJwt } from '../sharedTypes';
import { HttpHeaders } from '@angular/common/http';
import { ISubscription } from '../../registers/subscriptions/types';

@Injectable({
  providedIn: 'root',
})
export class UpdateService {
  constructor() {}

  private subscriptionSubject = new BehaviorSubject<ISubscription | null>(null);
  private deletedSubscriptionIdSubject = new BehaviorSubject<number | null>(
    null
  );
  subscription$ = this.subscriptionSubject.asObservable();
  deletedSubscriptionId$ = this.deletedSubscriptionIdSubject.asObservable();

  setSubscription(sub: ISubscription | null) {
    this.subscriptionSubject.next(sub);
  }

  setDeletedSubscriptionId(subId: number | null) {
    this.deletedSubscriptionIdSubject.next(subId);
  }
}
