import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-performance',
  templateUrl: './performance.component.html',
  styleUrls: ['./performance.component.scss'],
})
export class PerformanceComponent implements OnInit {
  activeWhatsapp: boolean = false;

  constructor(private meta: Meta) {
    
  }

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'Ppc agency for google ads, meta ads, insta ads, google pay per click, paid google advertising. 100% better return on marketing spend from fully AI optimized Ads',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'Digital ads, ppc, paid marketing, google pay per , meta ads, inst a ads agency',
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
