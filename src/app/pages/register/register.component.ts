import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { parsePhoneNumber } from 'libphonenumber-js';

@Component({
  selector: 'app-contact',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class RegisterComponent implements OnInit {
  activeWhatsapp: boolean = false;
  countryList: any = [];
  stateList: any = [];
  countryDialCodes: any = [];
  // specific country code
  countryDialCode: any = '';
  selectedDialCode: any = '';

  formdata = new FormData();
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.getCountries();
    this.getCountryCode();
  }

  contactForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    company: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    state: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phone() {
    return this.contactForm.get('phone');
  }

  get company() {
    return this.contactForm.get('company');
  }

  get country() {
    return this.contactForm.get('country');
  }

  get state() {
    return this.contactForm.get('state');
  }

  get address() {
    return this.contactForm.get('address');
  }

  get password() {
    return this.contactForm.get('password');
  }

  getCountries() {
    const headers = new HttpHeaders({
      'X-CSCAPI-KEY': 'YOUR_API_KEY',
    });
    this.http
      .get('https://countriesnow.space/api/v0.1/countries/states')
      .subscribe((res: any) => {
        this.countryList = res.data;
        // console.log(this.countryList);
      });
  }

  selectCountry(e: any) {
    this.stateList = this.countryList.find(
      (x: any) => x.name === e.target.value
    ).states;
    // console.log(this.stateList);
  }

  getCountryCode() {
    this.http
      .get('https://countriesnow.space/api/v0.1/countries/codes')
      .subscribe((res: any) => {
        const data: any = res;
        data.data.sort((a: any, b: any) => a.name.localeCompare(b.name));
        this.countryDialCodes = data.data;
        // console.log(this.countryDialCodes);
      });
  }

  selectCountryCode(e: any) {
    this.countryDialCode = e.value.dial_code;
    // console.log(this.countryDialCode);
    // console.log(e.value.dial_code);
  }

  onPhoneChange(e: any) {
    const phone = this.countryDialCode + e.target.value;
    const phoneNumber = parsePhoneNumber(phone);
    if (phoneNumber) {
      if (phoneNumber.isValid()) {
        this.contactForm.controls['phone'].setErrors(null);
        // console.log(phoneNumber.isValid());
      } else {
        this.contactForm.controls['phone'].markAllAsTouched();
        this.contactForm.controls['phone'].setErrors({ invalid: true });
        // console.log(phoneNumber.isValid());
      }
    }
  }

  submit(e: any) {
    e.preventDefault();
    if (this.contactForm.invalid) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all the required fields',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
      return;
    } else {
      this.formdata.append(
        'firstname',
        this.contactForm.get('firstName')!.value ?? ''
      );
      this.formdata.append(
        'lastname',
        this.contactForm.get('lastName')!.value ?? ''
      );
      this.formdata.append('email', this.contactForm.get('email')!.value ?? '');
      this.formdata.append(
        'contact',
        this.contactForm.get('phone')!.value ?? ''
      );
      this.formdata.append(
        'company',
        this.contactForm.get('company')!.value ?? ''
      );
      this.formdata.append(
        'country',
        this.contactForm.get('country')!.value ?? ''
      );
      this.formdata.append('state', this.contactForm.get('state')!.value ?? '');
      this.formdata.append(
        'address',
        this.contactForm.get('address')!.value ?? ''
      );
      this.formdata.append(
        'password',
        this.contactForm.get('password')!.value ?? ''
      );

      this.http
        .post<any>('https://api.zyper.ai/crm/buildprofile/', this.formdata)
        .subscribe(
          (res) => {
            const data: any = res;
            // Swal.fire(data.status);
            // this.router.navigate(['/pricing']);
            Swal.fire({
              title: 'Success!',
              text: 'Your profile has been created successfully',
              icon: 'success',
              confirmButtonText: 'Ok',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['/pricing']);
              }
            });
          },
          (error) => {
            Swal.fire({
              title: 'Error!',
              text: 'An error occured while creating your profile. Please try again later.',
              icon: 'error',
              confirmButtonText: 'Ok',
            });
          }
        );
    }
  }

  SwitchWhatsappState() {
    this.activeWhatsapp = !this.activeWhatsapp;
  }
}
