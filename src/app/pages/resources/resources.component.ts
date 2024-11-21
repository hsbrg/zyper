import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

interface ResourceCard {
  title: string;
  slug: string;
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  activeWhatsapp: boolean = false;
  showLoader: boolean = false;

  resourceCards: ResourceCard[] = [
    {
      title: 'Revolutionize your google tag management with AI',
      slug: 'revolutionize-your-google-tag-management-with-ai',
    },
    {
      title: 'How to integrate google tag manager with your Shopify store',
      slug: 'how-to-integrate-google-tag-manager-with-your-shopify-store',
    },
    {
      title: 'Simplify your web tracking with Google Tag Manager',
      slug: 'simplify-your-web-tracking-with-google-tag-manager',
    },
    {
      title:
        'Boost your business with our AI-Driven Google My Business Management platform',
      slug: 'boost-your-business-with-our-ai-driven-google-my-business-management-platform',
    },
    {
      title: 'Unlock the power of accurate google ads conversion event setup',
      slug: 'unlock-the-power-of-accurate-google-ads-conversion-event-setup',
    },
    {
      title:
        'Unlock the full potential of amazon advertising with our advanced AI platform',
      slug: 'unlock-the-full-potential-of-amazon-advertising-with-our-advanced-ai-platform',
    },
    {
      title:
        'Mastering keyword selection for your ad campaigns: A comprehensive guide',
      slug: 'mastering-keyword-selection-for-your-ad-campaigns-a-comprehensive-guide',
    },
    {
      title: 'How to Calculate Your Break-Even Customer Acquisition Cost (CAC)',
      slug: 'how-to-calculate-your-break-even-customer-acquisition-cost-cac',
    },
    {
      title: 'Zyper.ai Case Study for Pet Store Small Business Owner',
      slug: 'zyper-ai-case-study-for-pet-store-small-business-owner',
    },
    {
      title:
        "Structuring Your Facebook Ads Funnel To Maximize Output - Zyper's Funnel AI Engine Recommendations",
      slug: 'structuring-your-facebook-ads-funnel-to-maximize-output-zypers-funnel-ai-engine-recommendations',
    },
    {
      title: 'Small Business Marketing Budget Guide',
      slug: 'small-business-marketing-budget-guide',
    },
    {
      title: 'Ultimate Guide to User-Generated Content (UGC) for Business Growth',
      slug: 'ultimate-guide-to-user-generated-content-ugc-for-business-growth',
    }
  ];

  // SOCIAL LINKS
  @Input() socialLinks: { icon: string; url: string }[] = [
    { icon: 'instagram', url: 'https://www.instagram.com/zyper_ai/' },
    {
      icon: 'linkedin',
      url: 'https://www.linkedin.com/company/zyper-ai/posts/?feedView=all',
    },
    {
      icon: 'facebook',
      url: 'https://www.facebook.com/people/Zyper-AI/pfbid02YqykNfVMEYU6Q9QaU2PvnJK5GPeeLywvwmTM5np6VYc7KTRMPmheuVUSCzjdC38tl/',
    },
    {
      icon: 'twitter',
      url: 'https://x.com/i/flow/login?redirect_after_login=%2Fzyper_ai',
    },
  ];

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.showLoader = true;

    if (typeof window !== 'undefined') {
      window.addEventListener('load', () => {
        this.showLoader = false;
      });
    }

    this.meta.updateTag({
      name: 'description',
      content:
        'Zyper.ai provides AI enabled digital marketing for small businesses - PPC, paid marketing, social media, SEO, website building, google listings services',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'Zyper.ai is a fully automated full stack AI-enabled marketing platform for small businesses',
    });
  }

  switchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
