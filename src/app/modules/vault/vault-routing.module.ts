import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacturasEmitidasComponent } from './pages/facturas/facturas-emitidas/facturas-emitidas.component';
import { PagosEmitidosComponent } from './pages/pagos/pagos-emitidos/pagos-emitidos.component';
import { FacturasPPDComponent } from './pages/factura-ppd/facturas-ppd/facturas-ppd.component';
import { ReportesComponent } from './pages/reportes/reportes.component';

const routes: Routes = [
  { path: 'facturas_emitidas', component: FacturasEmitidasComponent },
  { path: 'pagos_emitidos', component: PagosEmitidosComponent },
  { path: 'facturas_ppd_emitidas', component: FacturasPPDComponent },
  { path: 'reporte_generado', component: ReportesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VaultRoutingModule { }
