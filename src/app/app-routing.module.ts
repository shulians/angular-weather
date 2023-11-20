import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { History } from './history/history.component';

const routes: Routes = [
  { path: 'history', component: History }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }