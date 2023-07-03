import { Component } from '@angular/core';

@Component({
  selector: 'app-form-conciliadas',
  templateUrl: './form-conciliadas.component.html',
  styleUrls: ['./form-conciliadas.component.scss']
})
export class FormConciliadasComponent {
  public visible: boolean = false;

  public limpiarFiltros(): void {
    console.log('limpiar filtros');
  };

  public enviarDatosFiltro(): void {
    console.log('enviar datos filtro');
    this.visible = false;
  };

  public open(): void {
    this.visible = true;
  };

  public close(): void {
    this.visible = false;
  };
};
