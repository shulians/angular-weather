import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WeatherImageComponent } from './weather-image/weather-image.component';
import { MenuComponent } from './menu/menu.component';
import { AppComponent } from './app.component';
import { ContainerLayoutComponent } from './components/container-layout/container-layout.component';

import { HttpClientModule } from '@angular/common/http';
import { WheaterService } from './services/weather-service/wheater.service';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent, WeatherImageComponent, MenuComponent],
  imports: [FormsModule,BrowserModule,ContainerLayoutComponent,HttpClientModule, AppRoutingModule,RouterModule],
  providers: [WheaterService],
  bootstrap: [AppComponent]
})
export class AppModule {}