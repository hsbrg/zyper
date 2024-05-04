import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comingsoon',
  templateUrl: './comingsoon.component.html',
  styleUrls: ['./comingsoon.component.scss'],
})
export class ComingsoonComponent implements OnInit {
  activeWhatsapp: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
