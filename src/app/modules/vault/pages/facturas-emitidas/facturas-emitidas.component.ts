import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserData } from 'src/app/shared/entities/userData.model';

@Component({
  selector: 'app-facturas-emitidas',
  templateUrl: './facturas-emitidas.component.html',
  styleUrls: ['./facturas-emitidas.component.scss']
})
export class FacturasEmitidasComponent {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUserParsed: any;
  public dataUser!: UserData;
  public formFilters: FormGroup = new FormGroup({});

  constructor() {
    this.dataUserParsed = JSON.parse(this.dataUserStorage);
    this.dataUser = this.dataUserParsed;

    this.formFilters = new FormGroup({
      
    });
  }
}
