import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  @Input() title: string = '';
  @Input() highlightedText: string = '';
  @Input() description: string = '';
  @Input() trialText: string = '';
  @Input() buttonText: string = 'GET STARTED';
  @Input() buttonLink: string = 'https://zyper-ai.vercel.app/subscription';
  @Input() socialLinks: { icon: string; url: string }[] = [
    { icon: 'instagram', url: 'https://www.instagram.com/zyper_ai/' },
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/zyper-ai/' },
    {
      icon: 'facebook',
      url: 'https://www.facebook.com/people/Zyper-AI/pfbid02YqykNfVMEYU6Q9QaU2PvnJK5GPeeLywvwmTM5np6VYc7KTRMPmheuVUSCzjdC38tl/',
    },
    {
      icon: 'twitter',
      url: 'https://x.com/i/flow/login?redirect_after_login=%2Fzyper_ai',
    },
  ];

  isMainTitle: boolean = false;

  ngOnInit() {
    this.isMainTitle = this.title.includes('Boost');
    console.log('Current title:', this.title);
    console.log('isMainTitle:', this.isMainTitle);
  }

  // redirect to the subscription page
  navigateToLink() {
    window.location.href = this.buttonLink;
  }

  getIconPath(iconName: string): string {
    return `assets/images/svg/${iconName}.svg`;
  }
}
