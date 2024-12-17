import { Component, OnInit, HostListener } from '@angular/core';
import { ssrWindow, getWindow } from 'ssr-window';

@Component({
  selector: 'app-navbar-two',
  templateUrl: './navbar-two.component.html',
  styleUrls: ['./navbar-two.component.scss'],
})
export class NavbarTwoComponent implements OnInit {
  isCollapsed = false;
  isDropdownVisible = false;
  isDropdownVisibleV = false;
  isPricingDropdownVisible = false;
  isResourcesDropdownVisible = false;
  constructor() {}

  ngOnInit(): void {
    if (getWindow().innerWidth > 1050) {
      this.isCollapsed = true;
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

  scrolled: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollY = getWindow().scrollY;
    if (scrollY > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }

  toggleDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
    this.isPricingDropdownVisible = false;
    // console.log(this.isDropdownVisible);
  }
  toggleDropdownVerticals() {
    this.isDropdownVisibleV = !this.isDropdownVisibleV;
    this.isPricingDropdownVisible = false;
    // console.log(this.isDropdownVisible);
  }

  toggleResourcesDropdown() {
    this.isResourcesDropdownVisible = !this.isResourcesDropdownVisible;
  }

  //   priceingtoggleDropdown() {
  //     this.isPricingDropdownVisible = !this.isPricingDropdownVisible;
  //     this.isDropdownVisible =false
  //   // console.log(this.isDropdownVisible);
  // }
  navigateToSub() {
    window.location.href = 'https://app.zyper.ai/subscription';
  }
}
