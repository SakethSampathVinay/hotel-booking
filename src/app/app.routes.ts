import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rooms', component: HotelsComponent },
  { path: 'rooms/:id', component: HotelDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
