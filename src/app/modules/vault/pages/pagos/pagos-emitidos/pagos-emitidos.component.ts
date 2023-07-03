import { Component } from '@angular/core';
import { UserData } from 'src/app/shared/entities/userData.model';

@Component({
  selector: 'app-pagos-emitidos',
  templateUrl: './pagos-emitidos.component.html',
  styleUrls: ['./pagos-emitidos.component.scss']
})
export class PagosEmitidosComponent {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser!: UserData;

  constructor() {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }

}
