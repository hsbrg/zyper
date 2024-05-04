import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-agency',
  templateUrl: './agency.component.html',
  styleUrls: ['./agency.component.scss'],
})
export class AgencyComponent implements OnInit {
  activeWhatsapp: boolean = false;

  constructor() {}
  ngOnInit(): void {}

  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = 0; // Adjust as needed
      const y =
        section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  products = [
    {
      title: 'Website Build & Launch',
      content:
        'Zyper crafts personalized content using your profile and leading design platforms. With advanced AI, enjoy custom pre-launch content. Get 30 days of free domain hosting and always-free website building services.',
      icon: 'assets/images/icons/website.png',
      link: 'services/website-build',
    },
    {
      title: 'Business and Maps Listings',
      content:
        'once you fill your business profile, Zyper creates and updates all your business profiles in minutes. Ensures your business is discoverable across Google Business, Google maps, Apple maps, Bing maps and everywhere else',
      icon: 'assets/images/icons/bussiness.png',
      link: 'services/bussiness',
    },
    {
      title: 'Performance Marketing and PPC Ads',
      content:
        'Zyper optimizes marketing budgets, selects ad types and platforms, and sets up campaigns using ML. Get over 100% improvement in Return on Ad Spend with real-time results on Zyper.ai dashboard',
      icon: 'assets/images/icons/performance.png',
      link: 'services/performance',
    },
    {
      title: 'Social Media Management',
      content:
        'Zyper sets up and manages Instagram, Facebook, and TikTok accounts. We plan, schedule, and execute tailored social media posts using Generative AI-driven designs, maximizing engagement for your business.',
      icon: 'assets/images/icons/social-media.png',
      link: 'services/social-media',
    },
    {
      title: 'Search Engine Optimization (SEO)',
      content:
        'Zyper uses your profile inputs to select the best keywords for you, and automatically generates content for SEO optimization, using Keyword APIs. Content is posted onto webpages and social media.',
      icon: 'assets/images/icons/seo.png',
      link: 'services/seo',
    },
    {
      title: 'Whatsapp Marketing',
      content:
        'If you are using Zyper CRM, then Zyper runs regular Whatsapp and email campaigns to your entire customer base , ensuring engagement , retention and repeat revenue from customers you have worked so hard to acquire.',
      icon: 'assets/images/icons/whatsapp.png',
      link: 'services/whatsapp-marketing',
    },
    {
      title: 'Email Marketing',
      content:
        'If you are using Zyper CRM, then Zyper runs regular Whatsapp and email campaigns to your entire customer base , ensuring engagement , retention and repeat revenue from customers you have worked so hard to acquire.',
      icon: 'assets/images/icons/email-marketing.png',
      link: 'services/email-marketing',
    },
  ];
}
