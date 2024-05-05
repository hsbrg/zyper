import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymentpolicy',
  templateUrl: './paymentpolicy.component.html',
  styleUrls: ['./paymentpolicy.component.scss']
})
export class PaymentpolicyComponent implements OnInit {

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
