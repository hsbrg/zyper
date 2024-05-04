import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  activeWhatsapp: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
