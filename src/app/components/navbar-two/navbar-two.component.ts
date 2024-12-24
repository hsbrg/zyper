import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ssrWindow, getWindow, getDocument } from 'ssr-window';

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.scss'],
})
export class NavbarTwoComponent implements OnInit, OnDestroy {
  isCollapsed = false;
  isDropdownVisible = false;
  isDropdownVisibleV = false;
  isPricingDropdownVisible = false;
  isResourcesDropdownVisible = false;
  scrolled: boolean = false;
  private doc = getDocument();

  constructor() {
    // We'll add the event listener in ngOnInit instead
  }

  ngOnInit(): void {
    if (getWindow().innerWidth > 1050) {
      this.isCollapsed = true;
    }

    // Add click event listener for handling clicks outside dropdown
    if (typeof window !== 'undefined') {
      this.doc.addEventListener('click', this.handleClickOutside.bind(this));
    }

    getWindow().addEventListener('scroll', function () {
      var navbar = document.getElementById('bottombar-web');
      if (getWindow().scrollY > 50) {
        navbar!.classList.add('sticky');
      } else {
        navbar!.classList.remove('sticky');
      }
    });
  }

  ngOnDestroy(): void {
    // Remove event listener only if we're in the browser
    if (typeof window !== 'undefined') {
      this.doc.removeEventListener('click', this.handleClickOutside.bind(this));
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = getWindow().scrollY;
    this.scrolled = scrollY > 50;
  }

  // Handle clicks outside dropdown
  handleClickOutside(event: MouseEvent): void {
    if (typeof window === 'undefined') return; // Guard for SSR
    
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown')) {
      this.closeAllDropdowns();
    }
  }

  // Close all dropdowns
  closeAllDropdowns(): void {
    this.isDropdownVisible = false;
    this.isDropdownVisibleV = false;
    this.isPricingDropdownVisible = false;
    this.isResourcesDropdownVisible = false;
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation(); // Prevent event bubbling
    // Close other dropdowns
    this.isDropdownVisibleV = false;
    this.isPricingDropdownVisible = false;
    this.isResourcesDropdownVisible = false;
    // Toggle current dropdown
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  toggleDropdownVerticals(event: Event): void {
    event.stopPropagation(); // Prevent event bubbling
    // Close other dropdowns
    this.isDropdownVisible = false;
    this.isPricingDropdownVisible = false;
    this.isResourcesDropdownVisible = false;
    // Toggle current dropdown
    this.isDropdownVisibleV = !this.isDropdownVisibleV;
  }

  toggleResourcesDropdown(event: Event): void {
    event.stopPropagation(); // Prevent event bubbling
    // Close other dropdowns
    this.isDropdownVisible = false;
    this.isDropdownVisibleV = false;
    this.isPricingDropdownVisible = false;
    // Toggle current dropdown
    this.isResourcesDropdownVisible = !this.isResourcesDropdownVisible;
  }

  navigateToSub(): void {
    window.location.href = 'https://app.zyper.ai/subscription';
  }
}