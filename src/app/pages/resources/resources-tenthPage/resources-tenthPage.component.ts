import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-tenthPage',
  templateUrl: './resources-tenthPage.component.html',
  styleUrls: ['./resources-tenthPage.component.scss'],
})
export class ResourcesTenthComponent implements OnInit {
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
      '/ai-marketing-resources/structuring-your-facebook-ads-funnel-to-maximize-output-zypers-funnel-ai-engine-recommendations'
    ) {
      this.setPageTitle(
        "Structuring Your Facebook Ads Funnel To Maximize Output - Zyper's Funnel AI Engine Recommendations | Zyper AI"
      );
      this.setMetaTags(
        "Learn how to structure your Facebook Ads funnel for maximum output with Zyper's Funnel AI Engine recommendations for better ad performance.",
        'Facebook ads funnel, AI engine, ad performance, marketing optimization, Zyper AI'
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
