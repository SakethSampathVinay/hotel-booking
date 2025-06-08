import { Component } from '@angular/core';
import { assets } from '../../../assets/assets';
import { RouterLink, RouterModule } from '@angular/router';
import { roomsDummyData } from '../../../assets/assets';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-featured-destination',
  imports: [NgFor, FormsModule, CommonModule, RouterModule, RouterLink],
  templateUrl: './featured-destination.component.html',
  styleUrls: ['./featured-destination.component.css'],
})
export class FeaturedDestinationComponent {
  assets = assets;
  roomsDummyData = roomsDummyData;
}
