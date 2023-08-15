import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeRoutingModule } from './merge-routing.module';
import { MergePageComponent } from './merge-page/merge-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/table-conciliadas/table-conciliadas.component';
import { FormConciliadasComponent } from './pages/facturas-emision/facturas-conciliadas/form-conciliadas/form-conciliadas.component';
import { TableDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/table-descuadre/table-descuadre.component';
import { FormDescuadreComponent } from './pages/facturas-emision/facturas-fecha-descuadre/form-descuadre/form-descuadre.component';
import { TableFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/table-faltantes/table-faltantes.component';
import { FormFaltantesComponent } from './pages/facturas-emision/facturas-faltantes-sat/form-faltantes/form-faltantes.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormConRecComponent } from './pages/facturas-recepcion/conciliadas-recepcion/form-con-rec/form-con-rec.component';
import { TableConRecComponent } from './pages/facturas-recepcion/conciliadas-recepcion/table-con-rec/table-con-rec.component';
import { FormDesRecComponent } from './pages/facturas-recepcion/descuadre-recepcion/form-des-rec/form-des-rec.component';
import { TableDesRecComponent } from './pages/facturas-recepcion/descuadre-recepcion/table-des-rec/table-des-rec.component';
import { FormFalRecComponent } from './pages/facturas-recepcion/faltantes-recepcion/form-fal-rec/form-fal-rec.component';
import { TableFalRecComponent } from './pages/facturas-recepcion/faltantes-recepcion/table-fal-rec/table-fal-rec.component';
/* ng-zorro */
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSwitchModule } from 'ng-zorro-antd/switch';

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
    TableFalRecComponent
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
    NzSwitchModule
  ]
})
export class MergeModule { }
