import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  isSidebarOpen: boolean = false;

  @Input() trialText?: string = '';
  @Input() buttonText: string = 'GET STARTED';
  @Input() buttonLink: string = 'https://zyper-ai.vercel.app/subscription';

  navItems = [
    { name: 'home', route: '/' },
    { name: 'about', route: '/about' },
    {
      name: 'Verticals',
      route: '/Verticals',

      subItems: [
        { name: 'Law Firms', route: '/services/law-firms' },
        { name: 'Amazon', route: '/services/amazon' },
        { name: 'ETSY', route: '/services/etsy' },
        { name: 'EBay', route: '/services/eBay' },
        { name: 'Shopify', route: '/services/shopify' },
        { name: 'Walmart', route: '/services/walmart' },
      ],

    },
    {
      name: 'AI Products',
      route: '/AI Products',
      subItems2: [
        { name: 'Performance marketing and PPC', route: '/services/performance' },
        { name: 'Business & Maps Listings', route: '/services/bussiness' },
        { name: 'Whatsapp Marketing', route: '/services/whatsapp-marketing' },
        { name: 'Email Marketing', route: '/services/email-marketing' },
        { name: 'Search Engine Optimization', route: '/services/seo' },
      ],
    },
    { name: 'resources', route: '/ai-marketing-resources' },
    { name: 'pricing', route: 'https://zyper-ai.vercel.app/subscription' },
    { name: 'contact us', route: '/contact' },
  ];


  constructor(private router: Router) { }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
    if (this.isSidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  navigateToLink(): void {
    window.open(this.buttonLink, '_blank');
  }

  navigateTo(route: string): void {
    if (route.startsWith('https')) {
      // Handle external URL
      window.open(route, '_blank'); // Opens the URL in a new tab (_blank)
    } else {
      // Handle internal route
      this.router.navigate([route]);
    }
    this.closeSidebar();
  }


  closeSidebar(): void {
    this.isSidebarOpen = false;
    document.body.style.overflow = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (window.innerWidth >= 768) {
      this.closeSidebar();
    }
  }

  @HostListener('document:keydown.escape', ['$event'])
  onEscKeydown(event: KeyboardEvent) {
    this.closeSidebar();
  }
}