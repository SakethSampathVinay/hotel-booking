import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { FeaturedDestinationComponent } from './featured-destination/featured-destination.component';
import { ExclusiveOffersComponent } from "./exclusive-offers/exclusive-offers.component";
import { TestimonialsComponent } from "./testimonials/testimonials.component";

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroComponent, FeaturedDestinationComponent, ExclusiveOffersComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
}
