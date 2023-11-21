import { NgModule } from '@angular/core';
import { HistoryComponent } from './history.component';
import { WheaterService } from '../services/weather-service/wheater.service';

import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [HistoryComponent],
  imports: [CommonModule],
  providers: [WheaterService],
  exports: [HistoryComponent]
})
export class HistoryModule {}