import { Component } from '@angular/core';
import { UserData } from 'src/app/shared/entities/userData.model';

@Component({
  selector: 'app-facturas-emitidas',
  templateUrl: './facturas-emitidas.component.html',
  styleUrls: ['./facturas-emitidas.component.scss']
})
export class FacturasEmitidasComponent {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser!: UserData;

  constructor() {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }
}
