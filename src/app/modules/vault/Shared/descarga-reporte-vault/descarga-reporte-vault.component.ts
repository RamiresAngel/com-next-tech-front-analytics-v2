import { Component, Input } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ArchivoReporteDescarga, DescargaReporte } from 'src/app/shared/entities';
import { VaultService } from 'src/app/shared/services/vault.service';

@Component({
  selector: 'app-descarga-reporte-vault',
  templateUrl: './descarga-reporte-vault.component.html',
  styleUrls: ['./descarga-reporte-vault.component.scss']
})
export class DescargaReporteVaultComponent {

  public isVisibleMiddle = false;
  public reporteSelected!: DescargaReporte;
  public dataReporte!: Array<ArchivoReporteDescarga>;
  public isLoading: boolean = false;
  public csvIcon: string = '../../../../../assets/img/csv.png';
  @Input() public rowSelected: any;

  constructor(
    private _vault_service: VaultService,
    private notificationService: NzNotificationService
  ) { }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.isLoading = true;
    this.reporteSelected = this.rowSelected;
    this._vault_service.listarDescargasLink({ q: this.reporteSelected.identificador, t: this.reporteSelected.fecha_creacion_date }).subscribe(
      response => {
        this.dataReporte = response;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
        this.notificationService.error("¡Error!", "No se pudo cargar la información, por favor intente de nuevo más tarde.");
      }
    )
  }

  public handleOkMiddle(): void {
    this.isVisibleMiddle = false;
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }

}
