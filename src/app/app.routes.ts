import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HotelBookingsComponent } from './hotel-bookings/hotel-bookings.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: HotelsComponent },
  { path: 'rooms/:id', component: HotelDetailsComponent },
  { path: 'bookings', component: HotelBookingsComponent },
  { path: '**', component: PageNotFoundComponent },
];
