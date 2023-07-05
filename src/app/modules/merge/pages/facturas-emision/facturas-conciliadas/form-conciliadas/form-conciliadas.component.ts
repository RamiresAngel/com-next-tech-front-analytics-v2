import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogoNiveles, RFCMap, UserData } from 'src/app/shared/entities';
import { MergeService } from 'src/app/shared/services/merge-service/merge.service';

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

  constructor(
    private _mergeService: MergeService
  ) {
    this.dataUser = JSON.parse(this.userDataStorage);
    this.hoteles = this.dataUser.catalogo_niveles;

    this.formularioConciliadas = new FormGroup({
      hotelControl: new FormControl(this.hoteles[0], Validators.required),
      rfcEmisorControl: new FormControl('', Validators.required),
      serieHotelControl: new FormControl([], Validators.required)
    });

  };

  public obtenerRfcEmisores(event: any): any {

    this._mergeService.getRFCMap({
      "email": this.dataUser.email,
      "corporativo": this.dataUser.corporativo,
      "nivel_acceso": event?.nombre,
      "rol": this.dataUser.rol
    }).subscribe((data:any) => {
      this.rfcEmisores = data.rfc_map;
      this.formularioConciliadas.controls['rfcEmisorControl'].patchValue(this.rfcEmisores[0].rfc);
    });
  };

  public selectedRfc(event: any, tipo: string): void {
    this.option_serie_hotel = this.rfcEmisores.filter((item: RFCMap) => item.rfc === event)[0].serie;
  };


  public limpiarFiltros(): void {
    console.log('limpiar filtros');
  };

  public enviarDatosFiltro(): void {
    console.log('enviar datos filtro');
    console.log('formulario', this.formularioConciliadas.value);
    // this.visible = false;
  };

  public open(): void {
    this.visible = true;
  };

  public close(): void {
    this.visible = false;
  };
};
