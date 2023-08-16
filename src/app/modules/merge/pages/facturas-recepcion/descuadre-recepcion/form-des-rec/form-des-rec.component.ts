import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BodyFiltroMerge, CatalogoNiveles, UserData, RFCMap } from 'src/app/shared/entities';
import { MergeService } from 'src/app/shared/services/merge-service/merge.service';
import { UtilsMergeService } from 'src/app/shared/services/utils-merge.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-form-des-rec',
  templateUrl: './form-des-rec.component.html',
  styleUrls: ['./form-des-rec.component.scss']
})
export class FormDesRecComponent {
  @Output() filtro = new EventEmitter<BodyFiltroMerge>();
  public visible: boolean = false;
  public formularioConciliadas!: FormGroup;
  public hoteles!: CatalogoNiveles[];
  public dataUser!: UserData;
  public option_serie_hotel: string[] = [];
  public userDataStorage: any = localStorage.getItem('dataUser');
  public rfcEmisores: any[] = [];
  public date_factura = null;
  public body_merge: BodyFiltroMerge = new BodyFiltroMerge();
  public fidecomiso: boolean = false;
  public nivel_acceso: string = '';

  constructor(
    private _mergeService: MergeService,
    private _utilsService: UtilsService,
    private _mergeUtils: UtilsMergeService
  ) {
    this.dataUser = JSON.parse(this.userDataStorage);
    this.hoteles = this.dataUser.catalogo_niveles;
    this.iniciaFormFiltro();
  };

  iniciaFormFiltro(): void {
    this.formularioConciliadas = new FormGroup({
      hotelControl: new FormControl(Validators.required),
      rfcEmisorControl: new FormControl(''),
      serieHotelControl: new FormControl([]),
      rfcReceptorControl: new FormControl(''),
      rfcPacControl: new FormControl(''),
      cpControl: new FormControl(''),
      cpFactoraControl: new FormControl(''),
      serieControl: new FormControl(''),
      folioControl: new FormControl(''),
      uuidControl: new FormControl(''),
      fechaFacturaControl: new FormControl(Validators.required),
      estatusControl: new FormControl(''),
      efectoComprobanteControl: new FormControl('')
    });
  };

  public obtenerRfcEmisores(event: any): any {
    this.nivel_acceso = event?.nombre;
    this._mergeService.getRFCMap({
      "email": this.dataUser.email,
      "corporativo": this.dataUser.corporativo,
      "nivel_acceso": event?.nombre,
      "rol": this.dataUser.rol
    }).subscribe((data: any) => {
      this.rfcEmisores = data.rfc_map;
      this.formularioConciliadas.controls['rfcEmisorControl'].patchValue(this.rfcEmisores[0].rfc);
    });
  };

  public limpiarFiltros(): void {
    console.log('limpiar filtros');
  };

  public enviarDatosFiltro(): void {
    this.body_merge.filtro = this._mergeUtils.getBodyFiltroMerge(this.formularioConciliadas.value);

    this.body_merge.tipo = 'recepcion';
    this.body_merge.tipo_comprobante = 'factura';
    this.body_merge.fidecomiso = this.fidecomiso;
    this.body_merge.nivel_acceso = this.nivel_acceso;
    this.body_merge.corporativo = this.dataUser.corporativo;
    this.body_merge.descuadre = false;
    const valid = this._mergeUtils.validarBodyFiltroMerge(this.body_merge);
    if (!valid) return;
    this.filtro.emit(this.body_merge);
  };

  onChange(event: any) {
    if (!event || event.length === 0) return;
    const fecha = this._utilsService.obtenerFormatoFechas(event);
    this.formularioConciliadas.patchValue({ fechaFacturaControl: fecha });
  }

  public selectedRfc(event: any, tipo: string): void {
    this.option_serie_hotel = this.rfcEmisores.filter((item: RFCMap) => item.rfc === event)[0].serie;
    let fideicomiso = this.rfcEmisores.filter((item: RFCMap) => item.rfc === event)[0].fidecomiso;
    console.log('fideicomiso', fideicomiso);
    this.fidecomiso = fideicomiso;
  };

  generaReporte(event: any): void {
    this.body_merge.nombre_reporte = event;
    this.body_merge.email = this.dataUser.email;
    this.body_merge.nivel_acceso = this.nivel_acceso;
    this._mergeService.programaReporte(this.body_merge).subscribe((data: any) => {
      console.log('data', data);
    }, (error: any) => {
      console.log('error', error);
    });
  }

  public open(): void {
    this.visible = true;
  };

  public close(): void {
    this.visible = false;
  };
}
