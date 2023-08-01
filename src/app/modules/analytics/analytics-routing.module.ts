import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConciliacionComponent } from './pages/conciliacion/conciliacion.component';
import { DetalleFaltanteComponent } from './pages/detalle-faltante/detalle-faltante.component';
import { DetalleFacturacionComponent } from './pages/detalle-facturacion/detalle-facturacion.component';
import { DetallePagosComponent } from './pages/detalle-pagos/detalle-pagos.component';
import { ProcesoDescargaComponent } from './pages/proceso-descarga/proceso-descarga.component';

const routes: Routes = [
  { path: 'conciliacion', component: ConciliacionComponent },
  { path: 'detalle-facturacion', component: DetalleFacturacionComponent },
  { path: 'detalle-faltante', component: DetalleFaltanteComponent },
  { path: 'detalle-pagos', component: DetallePagosComponent },
  { path: 'proceso-descarga', component: ProcesoDescargaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnalyticsRoutingModule { }
