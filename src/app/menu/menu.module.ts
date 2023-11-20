import { NgModule } from '@angular/core';

import { WeatherImageComponent } from '../weather-image/weather-image.component';
import { MenuComponent } from './menu.component';


@NgModule({
  declarations: [MenuComponent,WeatherImageComponent],
  imports: [],
  providers: [],
  bootstrap: [MenuComponent]
})
export class MenuModule {}