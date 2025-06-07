import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { roomsDummyData } from '../../assets/assets';
import { FiltersComponent } from './filters/filters.component';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-hotels',
  imports: [NgFor, CommonModule, FiltersComponent, RouterModule],
  templateUrl: './hotels.component.html',
  styleUrl: './hotels.component.css',
  standalone: true,
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
