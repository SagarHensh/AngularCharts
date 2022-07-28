import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgChartsModule } from 'ng2-charts';

const routes: Routes = [
  {
    path : "",
    component : DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    NgChartsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
