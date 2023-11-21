import { Component, OnInit } from '@angular/core';
import { WheaterService } from '../services/weather-service/wheater.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  public items: any = [];

  constructor(public wheaterService: WheaterService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    // Json de prueba 
    /*this.items = {
      wheaters: [
        {
          dateTime: "2023-11-21T11:35:00-03:00",
          localizedName: 'Luis Guillon',
          city: 'Buenos Aires',
          country: 'Argentina',
          weatherInMetric: '25°C',
          isDayTime: true,
          weatherText: 'Partly sunny'
        }
      ]
    };*/
    this.wheaterService.getHistory().subscribe(
      (response: any) => {
        this.items = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getImagePath(isDayTime:boolean,wheater:string): string {
    let dayNightCycle: string = Boolean(isDayTime) ? 'day' : 'night';
    return `assets/images/weather/${dayNightCycle}/${wheater}.png`;
  }
}
