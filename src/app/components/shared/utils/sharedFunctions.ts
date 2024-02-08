import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SharedFunctions {
  constructor(private router: Router) {}
  goToParentRoute() {
    const currentUrl = this.router.url;

    const parentUrl = currentUrl.substring(0, currentUrl.lastIndexOf('/'));

    this.router.navigateByUrl(parentUrl);
  }
}
