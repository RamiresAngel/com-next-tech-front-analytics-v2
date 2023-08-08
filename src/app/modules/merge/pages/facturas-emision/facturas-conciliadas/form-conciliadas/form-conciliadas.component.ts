import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogoNiveles, RFCMap, UserData } from 'src/app/shared/entities';
import { BodyFiltroMerge } from 'src/app/shared/entities/merge.model';
import { MergeService } from 'src/app/shared/services/merge-service/merge.service';
import { UtilsMergeService } from 'src/app/shared/services/utils-merge.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-form-conciliadas',
  templateUrl: './form-conciliadas.component.html',
  styleUrls: ['./form-conciliadas.component.scss']
})
export class FormConciliadasComponent {
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
      efectoComprobanteControl: new FormControl(''),
      faltantesControl: new FormControl(false)
    });
  };

  public obtenerRfcEmisores(event: any): any {
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

    this.body_merge.faltantes_erp = this.formularioConciliadas.value.faltantesControl;
    this.body_merge.tipo = 'emision';
    this.body_merge.tipo_comprobante = 'factura';
    this.body_merge.fidecomiso = this.fidecomiso;
    this.body_merge.nivel_acceso = this.formularioConciliadas.value.hotelControl;
    this.body_merge.corporativo = this.dataUser.corporativo;
    this.body_merge.descuadre = false;
    console.log('body merge', this.body_merge);
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

  public open(): void {
    this.visible = true;
  };

  public close(): void {
    this.visible = false;
  };
};
