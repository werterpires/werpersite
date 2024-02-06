import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OperationalContainerService {
  opens = 0;

  add() {
    this.opens++;
  }

  remove() {
    this.opens--;
  }
}
