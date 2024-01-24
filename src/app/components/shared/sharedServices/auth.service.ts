import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IUserFromJwt } from '../sharedTypes';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  private user = new BehaviorSubject<IUserFromJwt | null>(null);
  users$ = this.user.asObservable();

  getUserFromJwt(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
    const user = JSON.parse(atob(accessToken.split('.')[1])) as IUserFromJwt;
    this.user.next(user);
  }

  setUser(user: IUserFromJwt | null) {
    this.user.next(user);
  }

  getHeadObject(): HttpHeaders {
    const token = localStorage.getItem('accessToken');
    const headObj = new HttpHeaders().set('Authorization', 'bearer ' + token);
    return headObj;
  }
}
