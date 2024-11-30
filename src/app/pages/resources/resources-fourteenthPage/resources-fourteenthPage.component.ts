import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-resources-fourteenthPage',
  templateUrl: './resources-fourteenthPage.component.html',
  styleUrls: ['./resources-fourteenthPage.component.scss'],
})
export class ResourcesFourteenthComponent implements OnInit {
  activeWhatsapp: boolean = false;
  showLoader: boolean = false;

  constructor(
    private meta: Meta,
    private title: Title,
    private router: Router
  ) {}

  sectors = [
    {
      name: 'Home & Kitchen',
      marketingHabits: 'SEO content, email marketing, influencer partnerships',
      adPlatforms: 'Google Ads, Facebook Ads',
      adTypes: 'Search ads, display ads',
      instagramUsage: 'Medium',
      avgPrice: '$20 - $200',
      primaryChannels: 'Amazon, Google',
      salesSources: 'Amazon > Google > Instagram',
      notes: 'Amazon dominates due to variety and trust.',
    },
    {
      name: 'Beauty & Personal Care',
      marketingHabits: 'Influencer marketing, video tutorials, user content',
      adPlatforms: 'Instagram Ads, TikTok Ads',
      adTypes: 'Sponsored posts, video ads',
      instagramUsage: 'High',
      avgPrice: '$10 - $100',
      primaryChannels: 'Instagram, Amazon',
      salesSources: 'Instagram > Amazon > Google',
      notes: 'Strong Instagram sales via influencers.',
    },
    {
      name: 'Electronics',
      marketingHabits: 'Tech reviews, comparison blogs, retargeting ads',
      adPlatforms: 'Google Ads, YouTube Ads',
      adTypes: 'Search ads, video ads',
      instagramUsage: 'Low to Medium',
      avgPrice: '$50 - $1,000+',
      primaryChannels: 'Amazon, Google',
      salesSources: 'Amazon > Google > Instagram',
      notes: 'Consumers prefer Amazon for electronics.',
    },
    {
      name: 'Fashion & Apparel',
      marketingHabits: 'Social media campaigns, influencer partnerships',
      adPlatforms: 'Instagram Ads, Facebook Ads',
      adTypes: 'Carousel ads, Stories ads',
      instagramUsage: 'High',
      avgPrice: '$30 - $300',
      primaryChannels: 'Instagram, Amazon',
      salesSources: 'Instagram > Amazon > Google',
      notes: 'Visual appeal boosts Instagram sales.',
    },
    {
      name: 'Sports & Outdoors',
      marketingHabits:
        'Content marketing, email, newsletters, affiliate marketing',
      adPlatforms: 'Facebook Ads, Google Ads',
      adTypes: 'Display ads, sponsored posts',
      instagramUsage: 'Medium',
      avgPrice: '$25 - $500',
      primaryChannels: 'Amazon, Google',
      salesSources: 'Amazon > Google > Instagram',
      notes: 'Amazon preferred for equipment; Google aids research.',
    },
    {
      name: 'Health & Wellness',
      marketingHabits:
        'Educational content, webinars, influencer collaborations',
      adPlatforms: 'Instagram Ads, Facebook Ads',
      adTypes: 'Video ads, sponsored content',
      instagramUsage: 'Medium to High',
      avgPrice: '$15 - $150',
      primaryChannels: 'Amazon, Instagram',
      salesSources: 'Amazon > Instagram > Google',
      notes: 'Amazon for supplements; Instagram for lifestyle products.',
    },
    {
      name: 'Toys & Games',
      marketingHabits: 'Social media contests, video demos, family content',
      adPlatforms: 'YouTube Ads, Facebook Ads',
      adTypes: 'Video ads, interactive ads',
      instagramUsage: 'Low to Medium',
      avgPrice: '$10 - $100',
      primaryChannels: 'Amazon, Google',
      salesSources: 'Amazon > Google > Instagram',
      notes: 'Parents trust Amazon; Google for reviews.',
    },
  ];

  keyInsights = [
    "Digital Marketing Habits: Sellers utilize strategies like SEO, content marketing, and influencer partnerships tailored to their sector's audience.",
    'Ad Platforms: Choice depends on the target demographics; visual platforms like Instagram are popular for fashion and beauty, while Google Ads are favored for home goods and electronics.',
    'Types of Ads: Include search and display ads, video ads, and interactive ads, depending on product type and engagement strategies.',
    'Instagram Store Usage: High in visually-driven sectors like fashion and beauty; lower in sectors where purchases are less influenced by social media.',
    ' Average Selling Price: Varies by sector, reflecting the typical price ranges of products sold.',
  ];

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

    // Initial meta tags setting based on the route
    this.updateMetaTags();
  }

  /**
   * Updates the meta tags dynamically based on the current route.
   * This method is triggered on page load and route change.
   */
  private updateMetaTags(): void {
    const currentRoute = this.router.url;

    if (
      currentRoute ===
      '/ai-marketing-resources/digital-marketing-behavior-retail-ecommerce-categories'
    ) {
      this.setPageTitle(
        'Digital marketing behavior of retail ecommerce categories | Zyper AI'
      );
      this.setMetaTags(
        'Understand the digital marketing behavior of retail e-commerce categories and how to tailor your campaigns for maximum impact.',
        'digital marketing, e-commerce categories, retail marketing, campaign optimization, marketing behavior'
      );
    }
    // You can add more conditions here for other routes if needed
  }

  /**
   * Sets the title of the page dynamically.
   * @param title - The title of the page to be set.
   */
  private setPageTitle(title: string): void {
    this.title.setTitle(title);
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
