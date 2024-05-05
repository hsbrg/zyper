import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-getzyper',
  templateUrl: './getzyper.component.html',
  styleUrls: ['./getzyper.component.scss']
})
export class GetzyperComponent implements OnInit {
  showLoader: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.showLoader = true;
    window.addEventListener('load', () => {
      this.showLoader = false;
    });
  }

}
