import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {

  activeWhatsapp: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
