import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {
  activeWhatsapp: boolean = false;
  showLoader: boolean = false;
  constructor() {}

  ngOnInit(): void {
    this.showLoader = true;
    window.addEventListener('load', () => {
      this.showLoader = false;
    });
  }
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
