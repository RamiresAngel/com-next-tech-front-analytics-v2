import { Component, Input, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ReporteLink } from 'src/app/shared/entities/reports.model';
import { VaultService } from 'src/app/shared/services/vault.service';

@Component({
  selector: 'app-modal-download-report',
  templateUrl: './modal-download-report.component.html',
  styleUrls: ['./modal-download-report.component.scss']
})
export class ModalDownloadReportComponent implements OnInit {
  public isVisibleMiddle = false;
  public csvIcon:string = '../../../../../assets/img/csv.png';
  @Input() public identificador!:string;
  @Input() public fechaCreacion!:string;
  @Input() public nombreReporte!:string;
  @Input() public estatus!:string;
  public dataReporte!:Array<ReporteLink>;
  public isLoading: boolean = false;

  constructor(
    private descargaLinkService:VaultService,
    private notificationService:NzNotificationService
  ) { }

  ngOnInit(): void {
    
  }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.isLoading = true;
    this.descargaLinkService.descargaLinkReportes({q: this.identificador, t: this.fechaCreacion}).subscribe(
      response => {
        this.dataReporte = response;
        this.isLoading = false;
      }, (error:any) => {
        this.isLoading = false;
        this.notificationService.error("¡Error!", "No se pudo cargar la información, por favor intente de nuevo más tarde.");
      }
    )
  }

  public handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
