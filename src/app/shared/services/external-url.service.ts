import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExternalUrlService {
  private readonly APP_URL = 'https://app.zyper.ai';

  redirectToApp(): void {
    window.location.href = this.APP_URL;
  }
} 