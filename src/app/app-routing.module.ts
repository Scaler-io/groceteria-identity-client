import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { AutoLoginAllRoutesGuard } from 'angular-auth-oidc-client';

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { breadcrumb: { label: 'Dashboard' } },
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./features/api-client/api-client.module').then(
        (m) => m.ApiClientModule
      ),
    canActivate: [AutoLoginAllRoutesGuard],
    data: { breadcrumb: { label: 'Clients' } },
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
