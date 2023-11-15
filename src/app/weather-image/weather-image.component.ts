import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.css'],
})
export class WeatherImageComponent {
  @Input() selectedWeather!: any;

  getImagePath(): string {
    let dayNightCycle: string = Boolean(this.selectedWeather['isDayTime']) ? 'day' : 'night';
    let wheater: string = String(this.selectedWeather['weatherText']);
    return `assets/images/weather/${dayNightCycle}/${wheater}.png`;
  }
}