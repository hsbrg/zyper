import {
  Component,
  OnInit,
  Renderer2,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-seo',
  templateUrl: './seo.component.html',
  styleUrls: ['./seo.component.scss'],
})
export class SeoComponent implements OnInit {
  activeWhatsapp: boolean = false;
  constructor(private router: Router, private meta: Meta) {}

  ngOnInit(): void {
    this.meta.updateTag({
      name: 'description',
      content:
        'company for seo near me provides website search engine optimization, positioning marketing services - local seo, web search, google search at attractive prices and packages',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'seo company , seo firm. Seo agency for search engine optimization, local seo for small businesses',
    });

    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
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
