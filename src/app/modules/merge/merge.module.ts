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


@NgModule({
  declarations: [
    MergePageComponent,
    TableConciliadasComponent,
    FormConciliadasComponent,
    TableDescuadreComponent,
    FormDescuadreComponent,
    TableFaltantesComponent,
    FormFaltantesComponent
  ],
  imports: [
    CommonModule,
    MergeRoutingModule,
    SharedModule
  ]
})
export class MergeModule { }
