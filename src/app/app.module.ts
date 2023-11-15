import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { AppComponent } from './app.component';
import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { WheaterService } from './services/weather-service/wheater.service';

@NgModule({
  declarations: [AppComponent, WeatherImageComponent],
  imports: [FormsModule,BrowserModule,ContainerLayoutComponent,HttpClientModule],
  providers: [WheaterService],
  bootstrap: [AppComponent]
})
export class AppModule {}