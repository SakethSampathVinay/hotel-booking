import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userBookingsDummyData } from '../../assets/assets';
import { roomsDummyData } from '../../assets/assets';

@Component({
  selector: 'app-hotel-bookings',
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './hotel-bookings.component.html',
  styleUrl: './hotel-bookings.component.css',
})
export class HotelBookingsComponent {
  userBookingsDummyData = userBookingsDummyData;
  roomsDummyData = roomsDummyData;
}
