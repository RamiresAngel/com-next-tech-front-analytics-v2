import { RfcHotelUser, UserData, RFCMap, BodyFiltro } from '../../../../../shared/entities';
import { VaultService } from '../../../../../shared/services/vault.service';
import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { GeneraReporteComponent } from '../../../Shared/genera-reporte/genera-reporte.component';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-filtro-emision',
  templateUrl: './filtro-emision.component.html',
  styleUrls: ['./filtro-emision.component.scss']
})
export class FiltroEmisionComponent {
  @ViewChild('modal') modal?: GeneraReporteComponent;
  @Output() filtro = new EventEmitter<BodyFiltro>();
  public isLoading: boolean = false;
  public visible = false;
  public nivelAccesoSelected: string = '';
  public dataUser!: UserData;
  public rfc_map: RFCMap[] = [];
  public serie_hotel: Array<string> = [];
  public option_serie_hotel: Array<string> = [];
  public tipo_factura: string = 'emision';
  public efecto_comprobante: string = '';
  public date_factura = null;
  public date_rango = null;
  public vista_Fecha: boolean = true;
  public vista_Rango: boolean = true;
  public bodyFiltro: BodyFiltro = new BodyFiltro();
  public formFilters: FormGroup = new FormGroup({});
  public nivel_acceso: string;

  constructor(
    private utils_service: UtilsService,
    private vault_service: VaultService,
    private _notification: NzNotificationService
  ) {
    this.dataUser = JSON.parse(localStorage.getItem("dataUser")!);
    this.nivel_acceso = this.dataUser.nombre_nivel_acceso ? this.dataUser.nombre_nivel_acceso : 'Sucursal';
    this.iniciaFormFiltro();
  }

  iniciaFormFiltro(): void {
    this.formFilters = new FormGroup({
      nivel_acceso: new FormControl(this.nivelAccesoSelected, [Validators.required]),
      rfc_emisor: new FormControl(''),
      rfc_receptor: new FormControl(''),
      tipo_factura: new FormControl(),
      serie_hotel: new FormControl([]),
      serie: new FormControl(''),
      folio: new FormControl(''),
      codigo_postal: new FormControl(''),
      rfc_pac: new FormControl(''),
      efecto_comprobante: new FormControl(''),
      uuid: new FormControl(''),
      rango_estatus_f: new FormControl(''),
      fecha_factura: new FormControl([Validators.required]),
      rango_cancelacion: new FormControl(''),
    });
  }

  filtrar(): void {
    this.bodyFiltro.filtro = this.utils_service.getBodyFiltro(this.formFilters.value);

    this.bodyFiltro.tipo = this.formFilters.value.tipo_factura;
    this.bodyFiltro.tipo_comprobante = 'factura';
    this.bodyFiltro.ppd_view = false;
    this.bodyFiltro.fidecomiso = false;
    this.bodyFiltro.corporativo = this.dataUser.corporativo;
    const valid = this.utils_service.validarFormulario(this.bodyFiltro);
    if (!valid) return;
    this.filtro.emit(this.bodyFiltro);
    this.close();
  }

  selectedCatalogoNivel(event: any): void {
    this.nivelAccesoSelected = event;
    this.getRFCEmisor(this.nivelAccesoSelected);
  }

  /* Función que consume api y obtiene un objeto para select RFC emisor */
  getRFCEmisor(acceso: string): void {
    this.isLoading = true;
    let body = {
      email: this.dataUser.email,
      corporativo: this.dataUser.corporativo,
      nivel_acceso: acceso,
      rol: this.dataUser.rol
    };
    this.vault_service.getRFCMap(body).subscribe(
      (data: RfcHotelUser) => {
        this.isLoading = false;
        this.rfc_map = data.rfc_map;
      }, (error: any) => {
        this.isLoading = false;
        console.log(error);
      });
  }

  selectedRfc(event: any, tipo: string): void {
    this.option_serie_hotel = this.rfc_map.filter((item: RFCMap) => item.rfc === event)[0].serie;
  }

  selectedVigencia(event: any): void {
    let vista = this.utils_service.setFechasVista(event);
    this.vista_Fecha = vista.fecha;
    this.vista_Rango = vista.rango;
  }

  onChange(event: any) {
    if (!event || event.length === 0) return;
    const fecha = this.utils_service.obtenerFormatoFechas(event);
    this.formFilters.patchValue({ fecha_factura: fecha });
  }

  rangoCancelacion(event: any) {
    if (!event || event.length === 0) return;
    const fecha = this.utils_service.obtenerFormatoFechas(event);
    this.formFilters.patchValue({ rango_cancelacion: fecha });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  generaReporte(event: any): void {
    this.isLoading = true;
    this.bodyFiltro.nombre_reporte = event;
    this.bodyFiltro.email = this.dataUser.email;
    this.bodyFiltro.nivel_acceso = this.nivelAccesoSelected;
    this.vault_service.reporteProgramado(this.bodyFiltro).subscribe(
      (data: any) => {
        this.isLoading = false;
        this._notification.success('Éxito', 'Se ha generado el reporte correctamente');
        this.close();
      }, (error: any) => {
        this.isLoading = false;
        console.log(error);
        this._notification.error('Error', 'No se pudo generar el reporte, intente más tarde');
      });
  }

  showModal() {
    this.modal?.showModal();
  }

}
