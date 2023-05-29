import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportsPageComponent } from './modules/reports/reports-page/reports-page.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { LoginGuard } from './shared/guards/login.guard';
import { AnalyticsPageComponent } from './modules/analytics/analytics-page/analytics-page.component';
import { ProveedoresPageComponent } from './modules/proveedores/proveedores-page/proveedores-page.component';
import { VaultPageComponent } from './modules/vault/vault-page/vault-page.component';
import { ConfiguracionesPageComponent } from './modules/configuraciones/configuraciones-page/configuraciones-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', canActivate: [LoginGuard], loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },
  { path: 'suite', canActivate: [AuthGuard], loadChildren: () => import('./modules/suite/suite.module').then(m => m.SuiteModule) },
  { path: 'reports', canActivate: [AuthGuard], component: ReportsPageComponent, loadChildren: () => import('./modules/reports/reports.module').then(m => m.ReportsModule) },
  { path: 'analytics', canActivate: [AuthGuard], component: AnalyticsPageComponent, loadChildren: () => import('./modules/analytics/analytics.module').then(m => m.AnalyticsModule) },
  { path: 'proveedores', canActivate: [AuthGuard], component: ProveedoresPageComponent, loadChildren: () => import('./modules/proveedores/proveedores.module').then(m => m.ProveedoresModule) },
  { path: 'vault', canActivate: [AuthGuard], component: VaultPageComponent, loadChildren: () => import('./modules/vault/vault.module').then(m => m.VaultModule) },
  { path: 'configuraciones', canActivate: [AuthGuard], component: ConfiguracionesPageComponent, loadChildren: () => import('./modules/configuraciones/configuraciones.module').then(m => m.ConfiguracionesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
