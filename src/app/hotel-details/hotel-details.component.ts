import { Component, OnInit, Output } from '@angular/core';
import { roomsDummyData } from '../../assets/assets';
import { roomCommonData } from '../../assets/assets';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hotel-details',
  imports: [NgIf, FormsModule, CommonModule, RouterLink, RouterModule],
  templateUrl: './hotel-details.component.html',
  styleUrl: './hotel-details.component.css',
})
export class HotelDetailsComponent implements OnInit {
  roomsDummyData = roomsDummyData;
  roomCommonData = roomCommonData;
  hotel: any;
  selectedImage: string = '';

  checkIn: string = '';
  checkOut: string = '';
  guest: number = 1;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hotel = this.roomsDummyData.find((room) => room._id === id);

    this.selectedImage = this.hotel.images[0];
  }

  bookNow(): void {
    if (this.checkIn !== '' && this.checkOut !== '' && this.guest >= 1) {
      console.log('Booked Successfully');
    } else {
      console.log('Please fill all the details');
    }
  }
}
