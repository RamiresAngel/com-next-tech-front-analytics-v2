import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsPageComponent } from './reports-page/reports-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './pages/home/home.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FacturasEmitidasComponent } from './pages/facturas-emitidas/facturas-emitidas.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { ModalDownloadReportComponent } from './components/modal-download-report/modal-download-report.component';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzInputModule } from 'ng-zorro-antd/input';

@NgModule({
  declarations: [
    ReportsPageComponent,
    HomeComponent,
    FacturasEmitidasComponent,
    ModalDownloadReportComponent
  ],
  imports: [
    CommonModule,
    ReportsRoutingModule,
    SharedModule,
    NzMenuModule,
    NzIconModule,
    NgxDatatableModule,
    NzNotificationModule,
    NzModalModule,
    NzInputModule
  ]
})
export class ReportsModule { }
