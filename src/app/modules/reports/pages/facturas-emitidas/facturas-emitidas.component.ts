import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReportDescarga, TablaReportData, TablaReportsDescarga } from 'src/app/shared/entities/reports.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { VaultService } from 'src/app/shared/services/vault.service';

@Component({
  selector: 'app-facturas-emitidas',
  templateUrl: './facturas-emitidas.component.html',
  styleUrls: ['./facturas-emitidas.component.scss']
})
export class FacturasEmitidasComponent {
  public contentTable!: Array<ReportDescarga>;
  public rowsTable: Array<TablaReportsDescarga> = [];
  public dataTable: Array<any> = [];
  public isLoading: boolean = false;
  public dataUser!:UserData;
  public dataUserStorage:any = localStorage.getItem("dataUser");
  public dataUserParsed:any;

  constructor(
    private vaultService: VaultService,
    private notificationService:NzNotificationService
  ) {
    this.dataUserParsed = JSON.parse(this.dataUserStorage);
    this.dataUser = this.dataUserParsed;
    this.isLoading = true;
    this.getReports();
  }

  public refreshTable(): void {
    this.isLoading = true;
    while (this.dataTable.length) {
      this.dataTable.pop();
    }
    this.getReports();
  }

  public getReports(): void {
    this.vaultService.descargaReportes(
      { email: this.dataUser.email, corporativo: this.dataUser.corporativo }).subscribe(
      response => {
        response.forEach(element => {
          this.rowsTable.push(
            {
              nombre_reporte: element.nombre_reporte,
              tipo_reporte: element.tipo_reporte,
              fecha_creacion_date: element.fecha_creacion_date,
              status: element.status,
              identificador: element.identificador
            }
          );
        });
        this.dataTable = this.rowsTable;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
        this.notificationService.error("¡Error!", "No se pudo cargar la información, por favor intente de nuevo más tarde.");
      }
    );
  }

  columns = [
    { prop: 'nombre_reporte' },
    { prop: 'tipo_reporte' },
    { prop: 'fecha_creacion_date' },
    { prop: 'status' },
    { prop: 'identificador' }
  ];
}
