import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresPageComponent } from './proveedores-page/proveedores-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { Lista69Component } from './pages/lista69/lista69.component';
import { HomeComponent } from './pages/home/home.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

@NgModule({
  declarations: [
    ProveedoresPageComponent,
    Lista69Component,
    HomeComponent
  ],
  imports: [
    CommonModule,
    ProveedoresRoutingModule,
    SharedModule,
    NzInputModule,
    NgxDatatableModule,
    NzSelectModule,
    ReactiveFormsModule,
    FormsModule,
    NzNotificationModule
  ]
})
export class ProveedoresModule { }
