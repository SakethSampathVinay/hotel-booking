import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { roomsDummyData } from '../../assets/assets';

@Component({
  selector: 'app-hotels',
  imports: [NgFor, CommonModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css',
})
export class HotelsComponent {
  roomsDummyData = roomsDummyData;

  trackByRoom(index: number, room: any): any {
    return room._id;
  }
}
