import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  showLoader: boolean = false;
  activeWhatsapp: boolean = false;
  formdata = new FormData();
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.showLoader = true;
    window.addEventListener('load', () => {
      this.showLoader = false;
    });
  }

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    subject: new FormControl('', [Validators.required]),
    message: new FormControl('', [Validators.required])
  });


  get firstName(){
    return this.contactForm.get('firstName');
  }

  get lastName(){
    return this.contactForm.get('lastName');
  }

  get email(){
    return this.contactForm.get('email');
  }

  get phone(){
    return this.contactForm.get('phone');
  }

  get subject(){
    return this.contactForm.get('subject');
  }

  get message(){
    return this.contactForm.get('message');
  }

  submit(){
    this.formdata.append('firstName', this.contactForm.get('firstName')!.value ?? '')
    this.formdata.append('lastName', this.contactForm.get('lastName')!.value ?? '')
    this.formdata.append('email', this.contactForm.get('email')!.value ?? '')
    this.formdata.append('contact', this.contactForm.get('phone')!.value ?? '')
    this.formdata.append('subject', this.contactForm.get('subject')!.value ?? '')
    this.formdata.append('message', this.contactForm.get('message')!.value ?? '')
    // this.formdata.append('lastName', this.contactForm.get('lastName')!.value ?? '')
    this.http.post<any>('https://api.zyper.ai/crm/addcontact/', this.formdata).subscribe((res) => {
      const data: any = res;
      console.log(res)
      Swal.fire(data.status)
    });
  }

  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
