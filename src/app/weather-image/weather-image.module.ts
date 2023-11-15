import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherImageComponent } from './weather-image.component';

@NgModule({
  declarations: [WeatherImageComponent],
  imports: [FormsModule,CommonModule],
  providers: [],
  bootstrap: [WeatherImageComponent]
})
export class weatherImageModule {}