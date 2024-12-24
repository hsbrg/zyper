import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

interface NavigationItem {
  label: string;
  href: string;
}

interface GMBMetrics {
  actionType: string;
  averageMonthlyPerformance: string;
  impactOnConversion: string;
}

interface BudgetProjection {
  dealershipType: string;
  monthlyBudget: string;
  avgRevenuePerSale: number;
  expectedResults: {
    impressions: string;
    clicks: string;
    leads: string;
    roi: string;
  };
}

interface AdBudgetDistribution {
  channel: string;
  percentageOfBudget: string;
  bestFor: string;
}

@Component({
  selector: 'app-auto-dealership',
  templateUrl: './AutoDealerships.component.html',
  styleUrls: ['./AutoDealerships.component.scss']
})
export class AutoDealershipsComponent implements OnInit {
  currentYear = new Date().getFullYear();
  isMenuOpen = false;

  navigationItems: NavigationItem[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Verticals', href: '/verticals' },
    { label: 'AI Products', href: '/ai-products' },
    { label: 'Resources', href: '/resources' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact Us', href: '/contact' }
  ];

  gmbMetrics: GMBMetrics[] = [
    { actionType: 'Profile Views', averageMonthlyPerformance: '2,000-6,000', impactOnConversion: '10-20% inquiry conversion' },
    { actionType: 'Direction Requests', averageMonthlyPerformance: '150-400', impactOnConversion: '30-50% showroom visits' },
    { actionType: 'Phone Calls', averageMonthlyPerformance: '100-300', impactOnConversion: '40-60% sales inquiries' },
    { actionType: 'Website Clicks', averageMonthlyPerformance: '300-800', impactOnConversion: '10-15% lead generation' },
    { actionType: 'Photo Views', averageMonthlyPerformance: '3,000-7,000', impactOnConversion: '20% trust-building boost' }
  ];

  constructor(
    private meta: Meta,
    private title: Title
  ) {}

  ngOnInit() {
    this.title.setTitle('Auto Dealership Digital Marketing Guide 2024');
    this.meta.updateTag({
      name: 'description',
      content: 'Comprehensive AI-powered digital marketing solution for auto dealerships. Maximize your dealership\'s online presence while maintaining compliance and ethical standards.'
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}