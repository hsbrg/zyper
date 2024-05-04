import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.scss'],
})
export class WebsiteComponent implements OnInit {
  activeWhatsapp: boolean = false;

  constructor(private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Free Website builder services for small businesses. Best website design company near me with responsive design, great UI UX , content and front end',
    });
    this.meta.updateTag({
      name: 'title',
      content: 'top rated website development builder for small businesses',
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
