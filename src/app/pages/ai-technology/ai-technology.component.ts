import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-ai-technology',
  templateUrl: './ai-technology.component.html',
  styleUrls: ['./ai-technology.component.scss'],
})
export class AiTechnologyComponent implements OnInit {
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
        'Zyper.ai provides ai for digital marketing, ai generated advertising and ai management tools for small businesses to fully run their markeitng',
    });
    this.meta.updateTag({
      name: 'title',
      content:
        'ai digital marketing platform for artificial intelligence based advertising, digital marketing',
    });
  }
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
