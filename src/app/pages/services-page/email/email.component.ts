import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent implements OnInit {
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'effective email marketing services for small businesses - email templates, campaign management, formats, email advertising packages at best prices',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'email marketing company, agency firm providing templates, campaigns, tools, content and designs',
    });
  }
  activeWhatsapp: boolean = false;

  show_more: boolean = false;
  ShowMore() {
    // console.log('show more button clicked');
    if (this.show_more == false) {
      this.show_more = true;
      return;
    } else if (this.show_more == true) {
      this.show_more = false;
      return;
    }
  }
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
