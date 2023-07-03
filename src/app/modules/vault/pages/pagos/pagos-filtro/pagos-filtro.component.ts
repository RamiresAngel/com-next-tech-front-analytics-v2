import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserData } from 'src/app/shared/entities/userData.model';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { GeneraReporteComponent } from '../../../Shared/genera-reporte/genera-reporte.component';

@Component({
  selector: 'app-pagos-filtro',
  templateUrl: './pagos-filtro.component.html',
  styleUrls: ['./pagos-filtro.component.scss']
})
export class PagosFiltroComponent {
  @ViewChild('modal') modal?: GeneraReporteComponent;
  public visible = false;
  public nivelAccesoSelected: any;
  public dataUser!: UserData;
  public formFilters: FormGroup = new FormGroup({});
  public tipo_factura: string = 'Emision';
  public efecto_comprobante: string = '';
  public rango_estatus: string = 'Vigentes/Canceladas';
  public date_factura = null;
  public date_rango = null;
  public dateFormat = 'dd/MM/yyyy';
  public vista_Fecha: boolean = true;
  public vista_Rango: boolean = true;

  constructor(
    private utils_service: UtilsService,
  ) {
    this.dataUser = JSON.parse(localStorage.getItem("dataUser")!);
    this.iniciaFormFiltro();
  }

  iniciaFormFiltro(): void {
    this.formFilters = new FormGroup({
      nivel_acceso: new FormControl(this.nivelAccesoSelected),
      rfc_emisor: new FormControl(''),
      rfc_receptor: new FormControl(''),
      tipo_factura: new FormControl('Emision'),
      serie_hotel: new FormControl([]),
      serie: new FormControl(''),
      folio: new FormControl(''),
      codigo_postal: new FormControl(''),
      rfc_pac: new FormControl(''),
      efecto_comprobante: new FormControl(''),
      uuid: new FormControl(''),
      rango_estatus: new FormControl('Vigentes/Canceladas'),
      fecha_factura: new FormControl(),
      rango_cancelacion: new FormControl(''),
    });
  }

  filtrar(): void {
    console.log(this.formFilters.value);
  }

  selectedVigencia(event: any): void {
    let vista = this.utils_service.setFechasVista(event);
    this.vista_Fecha = vista.fecha;
    this.vista_Rango = vista.rango;
    this.rango_estatus = event;
  }

  getTipoFactura(event: any): void {
    this.tipo_factura = event;
  }

  getEfectoComprobante(event: any): void {
    console.log(event);
    this.efecto_comprobante = event;
  }

  onChange(result: Date[]): void {
    /* let fechas = this.utils_service.obtenerFormatoFechas(result);
    this.formFilters.patchValue({ fecha_factura: fechas }); */
  }

  rangoCancelacion(result: Date[]): void {
    /* let fechas = this.utils_service.obtenerFormatoFechas(result);
    this.formFilters.patchValue({ rango_cancelacion: fechas }); */
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

  showModal(): void {
    this.modal?.showModal();
  }

}
