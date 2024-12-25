import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-bussiness',
  templateUrl: './bussiness.component.html',
  styleUrls: ['./bussiness.component.scss'],
})
export class BussinessComponent implements OnInit {
  activeWhatsapp: boolean = false;

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Register, verify, claim and manage your Google My business GMB listings, google maps ads, Local business marketing , Bing places, apple maps, online business directories listings',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'Manage and grow your business on  google my business listing, google maps, Bing places',
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
