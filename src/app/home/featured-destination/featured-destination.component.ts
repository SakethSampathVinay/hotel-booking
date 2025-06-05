import { Component } from '@angular/core';
import { assets } from '../../../assets/assets';

@Component({
  selector: 'app-featured-destination',
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css'],
})
export class FeaturedDestinationComponent {
  assets = assets
}
