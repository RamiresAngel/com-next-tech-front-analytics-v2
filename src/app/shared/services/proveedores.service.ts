import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalApis } from 'src/environments/endpoints';
import { ProveedoresLista69, RfcHotelUser, bodyProveedoresLIsta69, bodyRfcHotelUser, bodyVerificaFuncionalidad } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresService {
  private headerAuth!:HttpHeaders;
  private tokenUser:any = localStorage.getItem("token");
  private apiRfcHotelUser:string = globalApis.url_usuarios + '/rfc_hotel_user';
  private apiProveedoresLista69:string = globalApis.url_proveedores + '/proveedores_lista_69';

  constructor(
    private http:HttpClient
  ) { 
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenUser}`
    });
  }

  public verificaFuncionalidad(body:bodyVerificaFuncionalidad) : Observable<boolean> {  
    return this.http.get<boolean>(`${globalApis.url_usuarios}/verifica_funcionalidad?funcionalidad=apps&nombre_rol=${body.nombre_rol}&corporativo=${body.corporativo}`, { headers: this.headerAuth})
  }

  public getRfcHotelUser(body:bodyRfcHotelUser) : Observable<RfcHotelUser> {
    return this.http.post<RfcHotelUser>(this.apiRfcHotelUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public getProveedoresLista69(rfc:bodyProveedoresLIsta69) : Observable<Array<ProveedoresLista69>> {
    return this.http.post<Array<ProveedoresLista69>>(this.apiProveedoresLista69, JSON.stringify(rfc), { headers: this.headerAuth });
  }
}
