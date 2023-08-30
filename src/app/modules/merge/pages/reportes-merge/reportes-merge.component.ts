import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReportDescarga, UserData } from 'src/app/shared/entities';
import { MergeService } from 'src/app/shared/services/merge-service/merge.service';
import { VaultService } from 'src/app/shared/services/vault.service';

@Component({
  selector: 'app-reportes-merge',
  templateUrl: './reportes-merge.component.html',
  styleUrls: ['./reportes-merge.component.scss']
})
export class ReportesMergeComponent {
  public disclaimerShow: boolean = true;
  public isLoading: boolean = false;
  dtOptions: DataTables.Settings = {
    language: {
      url: '../../../../../assets/data/table-language.json',
    },
    scrollX: true
  };
  public rowsTable: Array<ReportDescarga> = [];
  public isVisibleMiddle = false;
  public reporteDeleted!: string;
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser: UserData;

  constructor(
    private _mergeService: MergeService,
    private notificationService: NzNotificationService
  ) { this.dataUser = JSON.parse(this.dataUserStorage); }

  ngOnInit(): void {
    this.getReportes();
  }

  public refreshTabla(): void {
    while (this.rowsTable.length) {
      this.rowsTable.pop();
    }
    this.getReportes();
  }

  public getReportes(): void {
    this.isLoading = true;
    this._mergeService.listarDescargas({ email: this.dataUser.email, corporativo: this.dataUser.corporativo }).subscribe(
      response => {
        this.rowsTable = response;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
      }
    );
  }

  public checkStatus(estatus: string): string {
    if (estatus === 'descargado') {
      return 'bg-success'
    } else if (estatus === 'solicitud') {
      return 'bg-secondary'
    } else if (estatus === 'trabajando') {
      return 'bg-info'
    } else {
      return 'bg-danger'
    }
  }

  public showModalMiddle(q: any): void {
    this.isVisibleMiddle = true;
    this.reporteDeleted = q;
  }

  public handleOkMiddle(): void {
    this._mergeService.eliminarReporte(this.reporteDeleted).subscribe(
      response => {
        this.notificationService.success('¡Enhorabuena!', 'El reporte se ha eliminado correctamente.');
      }
    )
    this.isVisibleMiddle = false;
    this.reporteDeleted = '';
    setTimeout(() => {
      this.refreshTabla();
    }, 800);
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
