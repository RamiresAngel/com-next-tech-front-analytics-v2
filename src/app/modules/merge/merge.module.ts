import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeRoutingModule } from './merge-routing.module';
import { MergePageComponent } from './merge-page/merge-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/table-conciliadas/table-conciliadas.component';
import { FormConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/form-conciliadas/form-conciliadas.component';
import { TableDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/table-descuadre/table-descuadre.component';
import { FormDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/form-descuadre/form-descuadre.component';
import { TableFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/table-faltantes/table-faltantes.component';
import { FormFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/form-faltantes/form-faltantes.component';
import { FormConRecComponent } from './pages/facturas-recepcion/conciliadas-recepcion/form-con-rec/form-con-rec.component';
import { TableConRecComponent } from './pages/facturas-recepcion/conciliadas-recepcion/table-con-rec/table-con-rec.component';
import { FormDesRecComponent } from './pages/facturas-recepcion/descuadre-recepcion/form-des-rec/form-des-rec.component';
import { TableDesRecComponent } from './pages/facturas-recepcion/descuadre-recepcion/table-des-rec/table-des-rec.component';
import { FormFalRecComponent } from './pages/facturas-recepcion/faltantes-recepcion/form-fal-rec/form-fal-rec.component';
import { TableFalRecComponent } from './pages/facturas-recepcion/faltantes-recepcion/table-fal-rec/table-fal-rec.component';
import { FormConciliadasValidComponent } from './pages/facturas-recepcion-valid/facturas-conciliadas-valid/form-conciliadas-valid/form-conciliadas-valid.component';
import { TableConciliadasValidComponent } from './pages/facturas-recepcion-valid/facturas-conciliadas-valid/table-conciliadas-valid/table-conciliadas-valid.component';
import { FormDescuadreValidComponent } from './pages/facturas-recepcion-valid/facturas-descuadre-valid/form-descuadre-valid/form-descuadre-valid.component';
import { TableDescuadreValidComponent } from './pages/facturas-recepcion-valid/facturas-descuadre-valid/table-descuadre-valid/table-descuadre-valid.component';
import { FormFaltantesValidComponent } from './pages/facturas-recepcion-valid/facturas-faltantes-valid/form-faltantes-valid/form-faltantes-valid.component';
import { TableFaltantesValidComponent } from './pages/facturas-recepcion-valid/facturas-faltantes-valid/table-faltantes-valid/table-faltantes-valid.component';
import { FormPagosConciliadosComponent } from './pages/pagos-emision/pagos-conciliados/form-pagos-conciliados/form-pagos-conciliados.component';
import { TablePagosConciliadosComponent } from './pages/pagos-emision/pagos-conciliados/table-pagos-conciliados/table-pagos-conciliados.component';
import { FormPagosDescuadreComponent } from './pages/pagos-emision/pagos-descuadre/form-pagos-descuadre/form-pagos-descuadre.component';
import { TablePagosDescuadreComponent } from './pages/pagos-emision/pagos-descuadre/table-pagos-descuadre/table-pagos-descuadre.component';
import { FormPagosFaltantesSatComponent } from './pages/pagos-emision/pagos-faltantes-sat/form-pagos-faltantes-sat/form-pagos-faltantes-sat.component';
import { TablePagosFaltantesSatComponent } from './pages/pagos-emision/pagos-faltantes-sat/table-pagos-faltantes-sat/table-pagos-faltantes-sat.component';
import { FormPagosRecConciliadosComponent } from './pages/pagos-recepcion/pagos-rec-conciliados/form-pagos-rec-conciliados/form-pagos-rec-conciliados.component';
import { TablesPagosRecConciliadosComponent } from './pages/pagos-recepcion/pagos-rec-conciliados/tables-pagos-rec-conciliados/tables-pagos-rec-conciliados.component';
import { FormPagosRecDescuadreComponent } from './pages/pagos-recepcion/pagos-rec-descuadre/form-pagos-rec-descuadre/form-pagos-rec-descuadre.component';
import { TablePagosRecDescuadreComponent } from './pages/pagos-recepcion/pagos-rec-descuadre/table-pagos-rec-descuadre/table-pagos-rec-descuadre.component';
import { FormPagosRecFaltantesComponent } from './pages/pagos-recepcion/pagos-rec-faltantes/form-pagos-rec-faltantes/form-pagos-rec-faltantes.component';
import { TablePagosRecFaltantesComponent } from './pages/pagos-recepcion/pagos-rec-faltantes/table-pagos-rec-faltantes/table-pagos-rec-faltantes.component';
import { FormPagosConciliadosValidComponent } from './pages/pagos-recepcion-valid/pagos-conciliados-valid/form-pagos-conciliados-valid/form-pagos-conciliados-valid.component';
import { TablePagosConciliadosValidComponent } from './pages/pagos-recepcion-valid/pagos-conciliados-valid/table-pagos-conciliados-valid/table-pagos-conciliados-valid.component';
import { FormPagosFaltantesValidComponent } from './pages/pagos-recepcion-valid/pagos-faltantes-valid/form-pagos-faltantes-valid/form-pagos-faltantes-valid.component';
import { TablePagosFaltantesValidComponent } from './pages/pagos-recepcion-valid/pagos-faltantes-valid/table-pagos-faltantes-valid/table-pagos-faltantes-valid.component';
import { ReportesMergeComponent } from './pages/reportes-merge/reportes-merge.component';
/* ng-zorro */
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
/* Bootstrap */
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    MergePageComponent,
    TableConciliadasComponent,
    FormConciliadasComponent,
    TableDescuadreComponent,
    FormDescuadreComponent,
    TableFaltantesComponent,
    FormFaltantesComponent,
    FormConRecComponent,
    TableConRecComponent,
    FormDesRecComponent,
    TableDesRecComponent,
    FormFalRecComponent,
    TableFalRecComponent,
    FormConciliadasValidComponent,
    TableConciliadasValidComponent,
    FormDescuadreValidComponent,
    TableDescuadreValidComponent,
    FormFaltantesValidComponent,
    TableFaltantesValidComponent,
    FormPagosConciliadosComponent,
    TablePagosConciliadosComponent,
    FormPagosDescuadreComponent,
    TablePagosDescuadreComponent,
    FormPagosFaltantesSatComponent,
    TablePagosFaltantesSatComponent,
    FormPagosRecConciliadosComponent,
    TablesPagosRecConciliadosComponent,
    FormPagosRecDescuadreComponent,
    TablePagosRecDescuadreComponent,
    FormPagosRecFaltantesComponent,
    TablePagosRecFaltantesComponent,
    FormPagosConciliadosValidComponent,
    TablePagosConciliadosValidComponent,
    FormPagosFaltantesValidComponent,
    TablePagosFaltantesValidComponent,
    ReportesMergeComponent
  ],
  imports: [
    CommonModule,
    MergeRoutingModule,
    SharedModule,
    NzDrawerModule,
    NzSelectModule,
    NzInputModule,
    NzDatePickerModule,
    ReactiveFormsModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NzSwitchModule,
    NzModalModule,
    NzNotificationModule,
    NgbAlertModule
  ]
})
export class MergeModule { }
