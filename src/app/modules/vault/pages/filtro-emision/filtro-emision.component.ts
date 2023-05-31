import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserData } from 'src/app/shared/entities/userData.model';
import { UtilsService } from 'src/app/shared/services/utils.service';

@Component({
  selector: 'app-filtro-emision',
  templateUrl: './filtro-emision.component.html',
  styleUrls: ['./filtro-emision.component.scss']
})
export class FiltroEmisionComponent {
  datesArray: Date[] = [];
  public visible = false;
  public nivelAccesoSelected: string = '';
  public dataUser!: UserData;
  public formFilters: FormGroup = new FormGroup({});
  public tipo_factura: string = 'Emision';
  public efecto_comprobante: string = '';
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
      rango_estatus_f: new FormControl('Vigentes/Canceladas'),
      fecha_factura: new FormControl([Validators.required]),
      rango_cancelacion: new FormControl(''),
    });
  }

  filtrar(): void {
    console.log(this.formFilters);
    console.log(this.formFilters.value);
  }

  selectedVigencia(event: any): void {
    let vista = this.utils_service.setFechasVista(event);
    this.vista_Fecha = vista.fecha;
    this.vista_Rango = vista.rango;
  }

  selectedCatalogoNivel(event: any): void {
    this.nivelAccesoSelected = event;
  }

  getTipoFactura(event: any): void {
    this.tipo_factura = event;
  }

  getEfectoComprobante(event: any): void {
    console.log(event);
    this.efecto_comprobante = event;
  }

  onChange(result: Date[]): void {
    let fechas = this.utils_service.obtenerFormatoFechas(result);
    if (fechas.inicio === '' || fechas.fin === '') return;
    this.formFilters.patchValue({ fecha_factura: fechas });
  }

  rangoCancelacion(result: Date[]): void {
    let fechas = this.utils_service.obtenerFormatoFechas(result);
    this.formFilters.patchValue({ rango_cancelacion: fechas });
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

}
