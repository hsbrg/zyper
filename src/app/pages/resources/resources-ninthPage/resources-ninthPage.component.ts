import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-ninthPage',
  templateUrl: './resources-ninthPage.component.html',
  styleUrls: ['./resources-ninthPage.component.scss'],
})
export class ResourcesNinthComponent implements OnInit {
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

    // Set initial meta tags on page load
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
      '/ai-marketing-resources/zyper-ai-case-study-for-pet-store-small-business-owner'
    ) {
      this.setPageTitle(
        'Zyper.ai Case Study for Pet Store Small Business Owner | Zyper AI'
      );
      this.setMetaTags(
        'Read our case study on how Zyper AI helped a pet store small business owner enhance their marketing strategies and grow their business.',
        'Zyper AI case study, small business marketing, pet store, business growth, marketing strategies'
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
