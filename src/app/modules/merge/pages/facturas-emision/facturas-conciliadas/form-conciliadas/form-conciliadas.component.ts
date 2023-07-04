import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CatalogoNiveles, UserData } from 'src/app/shared/entities';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

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
  public userDataStorage: any = localStorage.getItem('dataUser');

  constructor(
    private configuracionesService : ConfiguracionesService
  ) {
    this.dataUser = JSON.parse(this.userDataStorage);
    this.hoteles = this.dataUser.catalogo_niveles;

    this.formularioConciliadas = new FormGroup({
      hotelControl: new FormControl(this.hoteles[0], Validators.required),
    });

  };

  public obtenerRfcEmisores(event: any): any {
    console.log('GENERAR RFC EMISORES');

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
