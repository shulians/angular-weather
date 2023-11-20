import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})

export class MenuComponent {
  public response: any;

  ngOnInit() {
    this.getData();
  }

  getData() {
    // Json de prueba 
    this.response = {
      localizedName: 'Luis Guillon',
      city: 'Buenos Aires',
      country: 'Argentina',
      weatherInMetric: '25°C',
      isDayTime: true,
      weatherText: 'Partly sunny'
    };
  }
}
