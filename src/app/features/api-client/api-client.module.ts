import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiClientComponent } from './api-client.component';
import { ApiClientRoutingModule } from './api-client-routing.module';

@NgModule({
  declarations: [ApiClientComponent],
  imports: [CommonModule, ApiClientRoutingModule],
})
export class ApiClientModule {}
