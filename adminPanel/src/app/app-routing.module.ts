import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SliderImagesComponent } from './slider-images/slider-images.component';
import { TourComponent } from './tour/tour.component';

const routes: Routes = [
  {path: "", component: SliderImagesComponent},
  {path: "tour", component: TourComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
