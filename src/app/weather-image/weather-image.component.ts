import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-image',
  templateUrl: './weather-image.component.html',
  styleUrls: ['./weather-image.component.css'],
})
export class WeatherImageComponent {
  @Input() selectedClimate!: number;
  @Input() selectedWeather!: string;

  getImagePath(): string {
    return `assets/images/${this.selectedWeather}-${this.selectedClimate}.png`;
  }
}