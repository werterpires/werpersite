import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Validates {
  public static validateString(length: number, text: string): boolean {
    return text.length >= length;
  }
}
