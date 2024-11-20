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
    { name: 'AI products', route: '/ai-products' },
    { name: 'resources', route: '/ai-marketing-resources' },
    { name: 'pricing', route: '/pricing' },
    { name: 'contact us', route: '/contact' }
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
    this.router.navigate([route]);
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