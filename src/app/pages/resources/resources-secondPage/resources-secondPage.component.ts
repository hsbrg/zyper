import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-secondPage',
  templateUrl: './resources-secondPage.component.html',
  styleUrls: ['./resources-secondPage.component.scss'],
})
export class ResourcesSecondComponent implements OnInit {
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

    // Initial meta tags update in case the page is directly accessed
    this.updateMetaTags();
  }

  /**
   * Sets the title of the page dynamically based on the current route.
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
      '/ai-marketing-resources/how-to-integrate-google-tag-manager-with-your-shopify-store'
    ) {
      this.setPageTitle(
        'How to integrate Google Tag Manager with your Shopify store | Zyper AI'
      );
      this.setMetaTags(
        'Learn how to integrate Google Tag Manager with your Shopify store for seamless tracking and improved marketing insights.',
        'Google Tag Manager, Shopify integration, tracking setup, marketing insights, e-commerce tracking'
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
