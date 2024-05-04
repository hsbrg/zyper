import { Component, OnInit } from '@angular/core';
import { CookieConsentService } from '../../cookie-consent.service';
import { getWindow } from 'ssr-window';

@Component({
  selector: 'app-cookieconsent',
  templateUrl: './cookieconsent.component.html',
  styleUrls: ['./cookieconsent.component.scss']
})
export class CookieconsentComponent implements OnInit {
  showPopup = false;
  constructor(private cookieConsentService: CookieConsentService) { }

  ngOnInit(): void {
    getWindow().setTimeout(() => {
      this.showPopup = true;
    }, 5000);
  }

  acceptCookies(): void {
    this.cookieConsentService.setCookie('zyperCookieConsent', 'true', 365);
    this.showPopup = false;
  }

  rejectCookies(): void {
    this.cookieConsentService.setCookie('zyperCookieConsent', 'false', 1);
    this.showPopup = false;
  }

  hasConsented(): boolean {
    return this.cookieConsentService.getCookie('zyperCookieConsent') === 'true';
  }

  hasRejectedRecently(): boolean {
    return this.cookieConsentService.getCookie('zyperCookieConsent') === 'false';
  }

}
