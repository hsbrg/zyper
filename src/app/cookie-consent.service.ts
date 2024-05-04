import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class CookieConsentService {

  constructor(private cookieService: CookieService) { }

  getCookie(name: string): string {
    return this.cookieService.get(name);
  }

  setCookie(name: string, value: string, days: number): void {
    this.cookieService.set(name, value, days, '/');
  }
}
