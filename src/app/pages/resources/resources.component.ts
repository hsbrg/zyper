import { Component, Input, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
})
export class ResourcesComponent implements OnInit {
  activeWhatsapp: boolean = false;
  showLoader: boolean = false;

  // SOCIAL LINKS
  @Input() socialLinks: { icon: string; url: string }[] = [
    { icon: 'instagram', url: 'https://www.instagram.com/zyper_ai/' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/company/zyper-ai/posts/?feedView=all' },
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
