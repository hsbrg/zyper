import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent {
  @Input() trialText?: string = '';
  @Input() buttonText: string = 'GET STARTED';
  @Input() buttonLink: string = 'https://zyper-ai.vercel.app/subscription';

  navigateToLink() {
    window.location.href = this.buttonLink;
  }
}
