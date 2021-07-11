import { Component, OnInit } from '@angular/core';

import { ForcastService } from './forcast.service';

@Component({
  selector: 'forcast',
  templateUrl: './forcast.component.html',
  providers: [ForcastService],
  styleUrls: ['./forcast.component.css']
})
export class ForcastComponent {
  forcastDetails: any = [];
  constructor(private forcastService: ForcastService) {}

  getWeatherByCity(city: string) {
    if (city) {
      this.forcastService.getWeatherByCity(city).subscribe(details => {
        this.forcastDetails.push(details);
      });
    }
  }

  clear() {
    this.forcastDetails.length = 0;
  }
}
