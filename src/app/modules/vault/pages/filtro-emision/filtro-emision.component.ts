import { RfcHotelUser, UserData, RFCMap, BodyFiltro } from './../../../../shared/entities';
import { VaultService } from './../../../../shared/services/vault.service';
import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { GeneraReporteComponent } from '../../Shared/genera-reporte/genera-reporte.component';

@Component({
  selector: 'app-filtro-emision',
  templateUrl: './filtro-emision.component.html',
  styleUrls: ['./filtro-emision.component.scss']
})
export class FiltroEmisionComponent {
  @ViewChild('modal') modal?: GeneraReporteComponent;
  public visible = false;
  public nivelAccesoSelected: string = '';
  public dataUser!: UserData;
  public rfc_map: RFCMap[] = [];
  public serie_hotel: Array<string> = [];
  public option_serie_hotel: string[] = [];
  public tipo_factura: string = 'Emision';
  public efecto_comprobante: string = '';
  public date_factura = null;
  public date_rango = null;
  public vista_Fecha: boolean = true;
  public vista_Rango: boolean = true;
  public bodyFiltro: BodyFiltro = new BodyFiltro();
  public formFilters: FormGroup = new FormGroup({});

  constructor(
    private utils_service: UtilsService,
    private vault_service: VaultService
  ) {
    this.dataUser = JSON.parse(localStorage.getItem("dataUser")!);
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
    this.bodyFiltro.filtro.rfc_emisor = this.formFilters.value.rfc_emisor;
    this.bodyFiltro.filtro.rfc_receptor = this.formFilters.value.rfc_receptor;
    this.bodyFiltro.filtro.fecha_factura_i = this.formFilters.value.fecha_factura.inicio;
    this.bodyFiltro.filtro.fecha_factura_f = this.formFilters.value.fecha_factura.fin;
    this.bodyFiltro.filtro.serie_hotel = this.formFilters.value.serie_hotel;
    this.bodyFiltro.filtro.serie = this.formFilters.value.serie;
    this.bodyFiltro.filtro.folio = this.formFilters.value.folio;
    this.bodyFiltro.filtro.cp = this.formFilters.value.codigo_postal;
    this.bodyFiltro.filtro.rfc_pac = this.formFilters.value.rfc_pac;
    this.bodyFiltro.filtro.efecto_comprobante = this.formFilters.value.efecto_comprobante;
    this.bodyFiltro.filtro.folio_fiscal = this.formFilters.value.uuid;
    this.bodyFiltro.filtro.estatus_factura = this.formFilters.value.rango_estatus_f;
    this.bodyFiltro.filtro.fecha_cancelacion_i = this.formFilters.value.rango_cancelacion.inicio ? this.formFilters.value.rango_cancelacion.inicio : '';
    this.bodyFiltro.filtro.fecha_cancelacion_f = this.formFilters.value.rango_cancelacion.fin ? this.formFilters.value.rango_cancelacion.fin : '';

    this.bodyFiltro.tipo = this.formFilters.value.tipo_factura;
    this.bodyFiltro.tipo_comprobante = 'factura';
    this.bodyFiltro.ppd_view = false;
    this.bodyFiltro.fidecomiso = false;
    this.bodyFiltro.corporativo = this.dataUser.corporativo;
    console.log(this.bodyFiltro);
  }

  selectedCatalogoNivel(event: any): void {
    this.nivelAccesoSelected = event;
    this.getRFCEmisor(this.nivelAccesoSelected);
  }

  /* Función que consume api y obtiene un objeto para select RFC emisor */
  getRFCEmisor(acceso: string): void {
    let body = {
      email: this.dataUser.email,
      corporativo: this.dataUser.corporativo,
      nivel_acceso: acceso,
      rol: this.dataUser.rol
    };
    this.vault_service.getRFCMap(body).subscribe(
      (data: RfcHotelUser) => {
        this.rfc_map = data.rfc_map;
      }, (error: any) => {
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

  getTipoFactura(event: any): void {
    this.tipo_factura = event;
  }

  getEfectoComprobante(event: any): void {
    console.log(event);
    this.efecto_comprobante = event;
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
    console.log(event);
  }

  showModal() {
    this.modal?.showModal();
  }

}
