import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VaultRoutingModule } from './vault-routing.module';
import { VaultPageComponent } from './vault-page/vault-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FacturasEmitidasComponent } from './pages/facturas-emitidas/facturas-emitidas.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FiltroEmisionComponent } from './pages/filtro-emision/filtro-emision.component';
/* NG-Zorro */
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';


@NgModule({
  declarations: [
    VaultPageComponent,
    FacturasEmitidasComponent,
    FiltroEmisionComponent
  ],
  imports: [
    CommonModule,
    VaultRoutingModule,
    SharedModule,
    NzInputModule,
    NzSelectModule,
    NzDrawerModule,
    ReactiveFormsModule,
    NzDatePickerModule,
    FormsModule
  ]
})
export class VaultModule { }
