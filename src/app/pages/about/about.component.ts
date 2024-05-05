import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  activeWhatsapp: boolean = false;
  showLoader: boolean = false;

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.showLoader = true;
    window.addEventListener('load', () => {
      this.showLoader = false;
    });
    this.meta.updateTag({
      name: 'description',
      content:
        'Zyper.ai provides AI enabled digital  marketing for small businesses - PPC, paid marketing, social media , SEO, website building, google listings services',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'Zyper.ai is a fully automated full stack Ai enabled marketing platform for small businesses',
    });
  }

  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
