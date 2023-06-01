import { Component } from '@angular/core';
import { UserData } from 'src/app/shared/entities/userData.model';

@Component({
  selector: 'app-nivel-acceso',
  templateUrl: './nivel-acceso.component.html',
  styleUrls: ['./nivel-acceso.component.scss']
})
export class NivelAccesoComponent {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser:UserData;
  public nivelAcceso:any;

  constructor() {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }

  public getNivelesAcceso() : void {
    
  }
}
