import { Component } from '@angular/core';
import { LocationService } from './services/location-service/location.service';
import { WheaterService } from './services/weather-service/wheater.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Wheater App';
  climate: number = 0;
  weather: string = '';
  latAndLong: string = '';

  climates= [18, 24, 30];
  weathers = ['soleado', 'lluvioso', 'nublado'];

  public latitude: any;
  public longitude: any;

  public response: any;

  constructor(public locationService: LocationService, public wheaterService: WheaterService) {}

  ngOnInit() {
    this.getLocation();
  }

  getData() {
    this.wheaterService.getData(this.latitude, this.longitude).subscribe(
      (response: any) => {
        this.response = response;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getLocation() {
    this.locationService.getPosition().then(pos => {
      this.latitude = pos.lat;
      this.longitude = pos.lng;
      this.getData();
    });
  }
}