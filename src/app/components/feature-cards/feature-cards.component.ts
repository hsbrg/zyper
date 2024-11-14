import { Component, Input } from '@angular/core';

interface FeatureCard {
  title: string;
  subtitle?: string;
  description: string;
}

@Component({
  selector: 'app-feature-cards',
  templateUrl: './feature-cards.component.html',
  styleUrls: ['./feature-cards.component.scss'],
})
export class FeatureCardsComponent {
  @Input() heading: string = '';
  @Input() subheading: string = '';
  @Input() cards: FeatureCard[] = [];
}
