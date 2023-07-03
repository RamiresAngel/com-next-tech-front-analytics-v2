import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasEmitidasComponent } from './pages/facturas/facturas-emitidas/facturas-emitidas.component';
import { PagosEmitidosComponent } from './pages/pagos-emitidos/pagos-emitidos.component';
import { FacturasPPDComponent } from './pages/facturas -ppd/facturas-ppd/facturas-ppd.component';

const routes: Routes = [
  { path: 'facturas_emitidas', component: FacturasEmitidasComponent },
  { path: 'pagos_emitidos', component: PagosEmitidosComponent },
  { path: 'facturas_ppd_emitidas', component: FacturasPPDComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaultRoutingModule { }
