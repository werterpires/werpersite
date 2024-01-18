import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormsUtils {
  changeInputType(element: HTMLInputElement) {
    if (element.type === 'password') {
      element.type = 'text';

      element.style.border = 'none';
    } else {
      element.type = 'password';
      element.style.border = '2px solid var(--darkGreen)';
    }
  }
}
