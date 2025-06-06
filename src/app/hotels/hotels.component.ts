import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { roomsDummyData } from '../../assets/assets';
import { FiltersComponent } from './filters/filters.component';

@Component({
  selector: 'app-hotels',
  imports: [NgFor, CommonModule, FiltersComponent],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css',
})
export class HotelsComponent {
  roomsDummyData = roomsDummyData;

  trackByRoom(index: number, room: any): any {
    return room._id;
  }

  filteredRooms: any[] = [];

  ngOnInit() {
    this.filteredRooms = roomsDummyData;
  }

  updateRooms(filteredList: any[]) {
    this.filteredRooms = filteredList;
  }
}
