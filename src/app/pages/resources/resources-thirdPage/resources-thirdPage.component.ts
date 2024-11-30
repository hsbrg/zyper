import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-thirdPage',
  templateUrl: './resources-thirdPage.component.html',
  styleUrls: ['./resources-thirdPage.component.scss'],
})
export class ResourcesThirdComponent implements OnInit {
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

    // Listen for route changes and update meta tags accordingly
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateMetaTags();
      });

    // Call updateMetaTags() on initial load as well (in case the page is directly accessed)
    this.updateMetaTags();
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
   */
  private updateMetaTags(): void {
    const currentRoute = this.router.url;

    if (
      currentRoute ===
      '/ai-marketing-resources/simplify-your-web-tracking-with-google-tag-manager'
    ) {
      this.setPageTitle(
        'Simplify your web tracking with Google Tag Manager | Zyper AI'
      );
      this.setMetaTags(
        "Simplify your website's tracking setup with Google Tag Manager, improving your analytics and marketing insights.",
        'Google Tag Manager, web tracking, marketing analytics, tag management, digital marketing'
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
