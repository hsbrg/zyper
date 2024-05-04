import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { jwtDecode } from 'jwt-decode';
import { Route, Router } from '@angular/router';
import { LoginserviceService } from '../loginservice.service';
import { ssrWindow } from 'ssr-window';

@Component({
  selector: 'app-contact',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  activeWhatsapp: boolean = false;
  formdata = new FormData();
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {}

  contactForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  get email() {
    return this.contactForm.get('email');
  }

  get password() {
    return this.contactForm.get('password');
  }

  submit() {
    this.formdata.append('email', this.contactForm.get('email')!.value ?? '');
    this.formdata.append(
      'password',
      this.contactForm.get('password')!.value ?? ''
    );
    this.http
      .post<any>('https://api.zyper.ai/crm/login/', this.formdata)
      .subscribe((res) => {
        const data: any = res;
        if (data.success) {
          Swal.fire(data.status);
          this.router.navigateByUrl('/comingsoon');
        } else {
          Swal.fire(data.status);
          this.router.navigateByUrl('/reg');
        }
      });
  }

  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}

(ssrWindow as any).handleCredentialResponse = (
  response: any,
  myService: LoginserviceService
) => {
  const responsePayload: any = jwtDecode(response.credential);

  localStorage.setItem('responseCred', response.credential);

  // console.log("ID: " + responsePayload.sub);
  // console.log('Full Name: ' + responsePayload.name);
  // console.log('Given Name: ' + responsePayload.given_name);
  // console.log('Family Name: ' + responsePayload.family_name);
  // console.log("Image URL: " + responsePayload.picture);
  // console.log("Email: " + responsePayload.email);

  const logindata = { email: responsePayload.email };

  fetchdata(logindata);
};

async function fetchdata(logindata: any) {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  const response = await fetch('https://api.zyper.ai/crm/logingoogle/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(logindata),
  });

  const responsebody = await response.json();

  if (responsebody.success) {
    Swal.fire(responsebody.status);
    window.location.replace('/comingsoon');
  } else {
    Swal.fire(responsebody.status);
    window.location.replace('/reg');
  }

  return response;
}
