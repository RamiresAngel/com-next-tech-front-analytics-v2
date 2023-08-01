import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { AnalyticsPageComponent } from './analytics-page/analytics-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConciliacionComponent } from './pages/conciliacion/conciliacion.component';
import { DetalleFaltanteComponent } from './pages/detalle-faltante/detalle-faltante.component';
import { DetalleFacturacionComponent } from './pages/detalle-facturacion/detalle-facturacion.component';
import { DetallePagosComponent } from './pages/detalle-pagos/detalle-pagos.component';
import { ProcesoDescargaComponent } from './pages/proceso-descarga/proceso-descarga.component';


@NgModule({
  declarations: [
    AnalyticsPageComponent,
    ConciliacionComponent,
    DetalleFaltanteComponent,
    DetalleFacturacionComponent,
    DetallePagosComponent,
    ProcesoDescargaComponent
  ],
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    SharedModule
  ]
})
export class AnalyticsModule { }
