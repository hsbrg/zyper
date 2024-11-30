import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-fifthPage',
  templateUrl: './resources-fifthPage.component.html',
  styleUrls: ['./resources-fifthPage.component.scss'],
})
export class ResourcesFifthComponent implements OnInit {
  activeWhatsapp: boolean = false;
  showLoader: boolean = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showLoader = true;

    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        this.showLoader = false;
      });
    }

    // Initial meta tags and title setup
    this.updateMetaTags();

    // Listen for route changes and update meta tags accordingly
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateMetaTags();
      });
  }

  /**
   * Sets the title of the page dynamically.
   * @param title - The title of the page to be set.
   */
  private setPageTitle(title: string): void {
    this.title.setTitle(title);
  }

  /**
   * Updates the meta tags dynamically based on the current route.
   * This method is triggered on page load and route change.
   */
  private updateMetaTags(): void {
    const currentRoute = this.router.url;

    if (
      currentRoute ===
      '/ai-marketing-resources/unlock-the-power-of-accurate-google-ads-conversion-event-setup'
    ) {
      this.setPageTitle(
        'Unlock the power of accurate Google Ads conversion event setup | Zyper AI'
      );
      this.setMetaTags(
        'Learn how to set up accurate Google Ads conversion events to track and optimize your campaigns for better ROI.',
        'Google Ads, conversion events, ad tracking, optimization, marketing performance'
      );
    }
  }

  /**
   * Sets the meta tags dynamically for description, keywords, and robots.
   * @param description - The description content for the meta tag.
   * @param keywords - The keywords content for the meta tag.
   */
  private setMetaTags(description: string, keywords: string): void {
    this.meta.updateTag({ name: 'description', content: description });
    this.meta.updateTag({ name: 'keywords', content: keywords });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  switchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
