import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentpolicy',
  templateUrl: './paymentpolicy.component.html',
  styleUrls: ['./paymentpolicy.component.scss']
})
export class PaymentpolicyComponent implements OnInit {

  activeWhatsapp: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }

}
