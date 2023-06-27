import { Component } from '@angular/core';
import { BodyFiltro, UserData } from 'src/app/shared/entities';

@Component({
  selector: 'app-facturas-emitidas',
  templateUrl: './facturas-emitidas.component.html',
  styleUrls: ['./facturas-emitidas.component.scss']
})
export class FacturasEmitidasComponent {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser!: UserData;
  public filtro = new BodyFiltro();

  constructor() {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }

  inicializaTabla(filtro: any): void {
    console.log(filtro);
  }
}
