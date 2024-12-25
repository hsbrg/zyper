import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent implements OnInit {
  activeWhatsapp: boolean = false;
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Social media marketing agency with facebook marketing, instagram marketing services. Social media posts, calendar and scheduling. Great packages & pricing',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'social media marketing smm agency - instagram marketer, facebook marketer, tiktok marketer for small businesses',
    });
  }

  show_more: boolean = false;
  show_button_text: any = 'Show More ⬇️';

  ShowMore() {
    // console.log('show more button clicked');
    if (this.show_more == false) {
      this.show_button_text = 'Show Less ⬆️';
      this.show_more = true;
      console.log(this.show_button_text);
      return;
    } else if (this.show_more == true) {
      this.show_button_text = 'Show More ⬇️';
      this.show_more = false;
      console.log(this.show_button_text);
      return;
    }
  }
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }

  navigateToApp() {
    window.location.href = 'https://app.zyper.ai';
  }
}
