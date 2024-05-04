import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-whatsapp',
  templateUrl: './whatsapp.component.html',
  styleUrls: ['./whatsapp.component.scss'],
})
export class WhatsappComponent implements OnInit {
  activeWhatsapp: boolean = false;

  constructor(private meta:Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Provides whatsapp marketing tools, campaigns, bulk whatsapp sending via APIs, whatsapp fo retention marketing, whatsapp promotional messages',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'whatsapp marketing agency for bulk whatsapp, whatsapp api, campaigns, whatsapp business growth',
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
}
