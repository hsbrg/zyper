import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
  isSidebarOpen = false;
  isVerticalsDropdownOpen = false;
  isAIProductsDropdownOpen = false;
  closeDropdownTimer: any;

  @Input() trialText = '';
  @Input() buttonText = 'GET STARTED';
  @Input() buttonLink = 'https://app.zyper.ai/subscription';

  constructor(private router: Router) { }

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;

    // Prevent body scrolling when sidebar is open
    if (this.isSidebarOpen) {
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      this.resetBodyStyles();
      // Reset dropdowns when sidebar closes
      this.closeDropdowns();
    }
  }

  openVerticalsDropdown(): void {
    clearTimeout(this.closeDropdownTimer);
    this.isVerticalsDropdownOpen = !this.isVerticalsDropdownOpen;
  }

  closeVerticalsDropdown(): void {
    this.closeDropdownTimer = setTimeout(() => {
      this.isVerticalsDropdownOpen = false;
    }, 0); // Small delay to allow moving to the dropdown content
  }

  closeAIProductsDropdown(): void {
    this.closeDropdownTimer = setTimeout(() => {
      this.isAIProductsDropdownOpen = false;
    }, 0); // Small delay to allow moving to the dropdown content
  }

  openAIProductsDropdown(): void {
    this.isAIProductsDropdownOpen = !this.isAIProductsDropdownOpen;
  }

  navigateToLink(): void {
    window.open(this.buttonLink, '_blank');
  }

  navigateTo(route: string): void {
    // Check if the route is an external link
    if (route.startsWith('http://') || route.startsWith('https://')) {
      window.open(route, '_blank');
    } else {
      this.router.navigate([route]);
    }
    this.closeSidebar();
  }

  closeSidebar(): void {
    this.isSidebarOpen = false;
    this.closeDropdowns();
    this.resetBodyStyles();
  }

  private closeDropdowns(): void {
    this.isVerticalsDropdownOpen = false;
    this.isAIProductsDropdownOpen = false;
  }

  private resetBodyStyles(): void {
    document.body.style.position = '';
    document.body.style.width = '';
    document.body.style.overflow = '';
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    // Close sidebar on desktop/tablet view
    if (window.innerWidth >= 768) {
      this.closeSidebar();
    }
  }

  @HostListener('document:keydown.escape')
  onEscKeydown(): void {
    this.closeSidebar();
  }

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent): void {
    const target = event.target as HTMLElement;
    // Only close dropdowns if the touch is outside the dropdown or button
    if (!target.closest('.dropdown-content') && !target.closest('.dropbtn')) {
      this.closeDropdowns();
    }
  }
}
