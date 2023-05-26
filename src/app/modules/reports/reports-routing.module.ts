import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FacturasEmitidasComponent } from './pages/facturas-emitidas/facturas-emitidas.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'facturas_emitidas', component: FacturasEmitidasComponent }
]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
