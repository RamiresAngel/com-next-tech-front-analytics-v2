import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalApis } from 'src/environments/endpoints';
import { bodyCambiarRol, bodyCrearUsuario, bodyEditarUsuario, bodyGetListUsers, bodyListarRfcHotel, bodyVerificaFuncionalidad } from '../entities/bodys.model';
import { Observable } from 'rxjs';
import { AppsVerificadas, ListaRoles, TablaUsuarios } from '../entities/configuraciones.model';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesService {
  private headerAuth!:HttpHeaders;
  private tokenUser:any = localStorage.getItem("token");
  private apiListUsers:string = globalApis.url_usuarios + '/list_users';
  private apiListarRFCHotel:string = globalApis.url_usuarios + '/listar_rfc_hotel';
  private apiEditarRolUser:string = globalApis.url_usuarios + '/edit_rol_user';
  private apiEditarUser:string = globalApis.url_usuarios + '/edit_user';
  private apiCreateUser:string = globalApis.url_usuarios + '/create_user';

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

  public verificaApps(corporativo:string) : Observable<Array<AppsVerificadas>> {
    return this.http.get<Array<AppsVerificadas>>(`${globalApis.url_usuarios}/verifica_apps?corporativo=${corporativo}`, { headers: this.headerAuth });
  }

  public getListUsers(body:bodyGetListUsers) : Observable<Array<TablaUsuarios>> {
    return this.http.post<Array<TablaUsuarios>>(this.apiListUsers, JSON.stringify(body), { headers: this.headerAuth });
  }

  public getListarRFCHotel(body:bodyListarRfcHotel) : Observable<Array<string>> {
    return this.http.post<Array<string>>(this.apiListarRFCHotel, JSON.stringify(body), { headers: this.headerAuth });
  }

  public editarRolUser(body:bodyCambiarRol) : Observable<any> {
    return this.http.put<any>(this.apiEditarRolUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public listarRoles(corporativo:string) : Observable<Array<ListaRoles>> {
    return this.http.get<Array<ListaRoles>>(`${globalApis.url_usuarios}/listar_roles?corporativo=${corporativo}`, { headers: this.headerAuth });
  }

  public editarUser(body:bodyEditarUsuario) : Observable<any> {
    return this.http.put<any>(this.apiEditarUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public crearUsuario(body:bodyCrearUsuario) : Observable<any> {
    return this.http.post<any>(this.apiCreateUser, JSON.stringify(body), { headers: this.headerAuth });
  }
}
