import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasEmitidasComponent } from './pages/facturas-emitidas/facturas-emitidas.component';

const routes: Routes = [
  { path: 'facturas_emitidas', component: FacturasEmitidasComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaultRoutingModule { }
