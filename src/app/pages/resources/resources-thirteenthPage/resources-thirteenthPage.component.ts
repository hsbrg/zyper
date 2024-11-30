import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-thirteenthPage',
  templateUrl: './resources-thirteenthPage.component.html',
  styleUrls: ['./resources-thirteenthPage.component.scss'],
})
export class ResourcesThirteenthComponent implements OnInit {
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
      '/ai-marketing-resources/beyond-online-marketing-performance-key-metrics-to-ensure-maximum-profits'
    ) {
      this.setPageTitle(
        'Beyond Online Marketing Performance - Key Metrics to Ensure Maximum Profits from Customers and Leads | Zyper AI'
      );
      this.setMetaTags(
        'Discover essential key metrics to optimize your online marketing performance and ensure maximum profits from customers and leads with Zyper AI.',
        'online marketing, key metrics, customer profit optimization, lead generation, marketing strategies'
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
