import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'zyper2';
  constructor(private router: Router) {
    // This will log the current route
    router.events.subscribe((val) => {
      console.log(val);
    });
  }
  ngOnInit(){
    AOS.init();
  }
}
