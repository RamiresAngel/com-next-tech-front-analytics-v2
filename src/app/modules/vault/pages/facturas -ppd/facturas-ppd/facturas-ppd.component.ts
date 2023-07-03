import { Component } from '@angular/core';
import { UserData } from 'src/app/shared/entities/userData.model';

@Component({
  selector: 'app-facturas-ppd',
  templateUrl: './facturas-ppd.component.html',
  styleUrls: ['./facturas-ppd.component.scss']
})
export class FacturasPPDComponent {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser!: UserData;

  constructor() {
    this.dataUser = JSON.parse(this.dataUserStorage)
  }

}
