import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ApiClientComponent } from './api-client.component';
import { ApiClientDetailsComponent } from './api-client-details/api-client-details.component';

const routes: Routes = [
  { path: '', component: ApiClientComponent },
  { path: ':id', component: ApiClientDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApiClientRoutingModule {}
