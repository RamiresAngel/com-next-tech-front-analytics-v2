import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { globalApis } from 'src/environments/endpoints';
import {
  bodyAddSucursal,
  bodyCambiarRol,
  bodyCrearRFCCorporativo,
  bodyCrearRol,
  bodyCrearUsuario,
  bodyEditSucursal,
  bodyEditarRFCCorporativo,
  bodyEditarUsuario,
  bodyGetListUsers,
  bodyGetNivelAcceso,
  bodyListarRfcHotel,
  bodyRFCUser,
  bodyVerificaFuncionalidad
} from '../entities/bodys.model';
import { Observable } from 'rxjs';
import { AppsVerificadas, ListaContribuyentes, ListaRoles, TablaUsuarios } from '../entities/configuraciones.model';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionesService {
  private headerAuth!: HttpHeaders;
  private tokenUser: any = localStorage.getItem("token");
  private apiListUsers: string = globalApis.url_usuarios + '/list_users';
  private apiListarRFCHotel: string = globalApis.url_usuarios + '/listar_rfc_hotel';
  private apiEditarRolUser: string = globalApis.url_usuarios + '/edit_rol_user';
  private apiEditarUser: string = globalApis.url_usuarios + '/edit_user';
  private apiCreateUser: string = globalApis.url_usuarios + '/create_user';
  private apiCreateRol: string = globalApis.url_usuarios + '/create_rol';
  private apiRFCUser: string = globalApis.url_contribuyentes + '/rfc_user';
  private apiCrearRFCCorporativo: string = globalApis.url_contribuyentes + '/crear_rfc_corporativo';
  private apiEditarRFCCorporativo: string = globalApis.url_contribuyentes + '/editar_rfc_corporativo';
  private apiListNivelAcceso: string = globalApis.url_usuarios + '/listar_hoteles';
  private apiCrearSucursal: string = globalApis.url_usuarios + '/crear_hotel';
  private apiEditarSucursal: string = globalApis.url_usuarios + '/editar_hotel';

  constructor(
    private http: HttpClient
  ) {
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenUser}`
    });
  }


  public verificaFuncionalidad(body: bodyVerificaFuncionalidad): Observable<boolean> {
    return this.http.get<boolean>(`${globalApis.url_usuarios}/verifica_funcionalidad?funcionalidad=apps&nombre_rol=${body.nombre_rol}&corporativo=${body.corporativo}`, { headers: this.headerAuth })
  }

  public verificaApps(corporativo: string): Observable<Array<AppsVerificadas>> {
    return this.http.get<Array<AppsVerificadas>>(`${globalApis.url_usuarios}/verifica_apps?corporativo=${corporativo}`, { headers: this.headerAuth });
  }

  public getListUsers(body: bodyGetListUsers): Observable<Array<TablaUsuarios>> {
    return this.http.post<Array<TablaUsuarios>>(this.apiListUsers, JSON.stringify(body), { headers: this.headerAuth });
  }

  public getListarRFCHotel(body: bodyListarRfcHotel): Observable<Array<string>> {
    return this.http.post<Array<string>>(this.apiListarRFCHotel, JSON.stringify(body), { headers: this.headerAuth });
  }

  public editarRolUser(body: bodyCambiarRol): Observable<any> {
    return this.http.put<any>(this.apiEditarRolUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public listarRoles(corporativo: string): Observable<Array<ListaRoles>> {
    return this.http.get<Array<ListaRoles>>(`${globalApis.url_usuarios}/listar_roles?corporativo=${corporativo}`, { headers: this.headerAuth });
  }

  public listarFuncionalidades(corporativo: string): Observable<Array<string>> {
    return this.http.get<Array<string>>(`${globalApis.url_usuarios}/listar_funcionalidades?corporativo=${corporativo}`, { headers: this.headerAuth });
  }

  public editarUser(body: bodyEditarUsuario): Observable<any> {
    return this.http.put<any>(this.apiEditarUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public crearUsuario(body: bodyCrearUsuario): Observable<any> {
    return this.http.post<any>(this.apiCreateUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public crearRol(body: bodyCrearRol): Observable<any> {
    return this.http.put<any>(this.apiCreateRol, JSON.stringify(body), { headers: this.headerAuth });
  }

  public RFCUser(body: bodyRFCUser): Observable<Array<ListaContribuyentes>> {
    return this.http.post<Array<ListaContribuyentes>>(this.apiRFCUser, JSON.stringify(body), { headers: this.headerAuth });
  }

  public crearRFCCorporativo(body: bodyCrearRFCCorporativo): Observable<any> {
    return this.http.post<any>(this.apiCrearRFCCorporativo, JSON.stringify(body), { headers: this.headerAuth });
  }

  public editarRFCCorporativo(body: bodyEditarRFCCorporativo): Observable<any> {
    return this.http.post<any>(this.apiEditarRFCCorporativo, JSON.stringify(body), { headers: this.headerAuth });
  }

  public listarNivelAcceso(body: bodyGetNivelAcceso): Observable<Array<any>> {
    return this.http.post<Array<any>>(this.apiListNivelAcceso, JSON.stringify(body), { headers: this.headerAuth });
  }

  public listarRFCCorporativo(corporativo: any): Observable<string[]> {
    return this.http.get<string[]>(`${globalApis.url_usuarios}/listar_rfc_corporativo?corporativo=${corporativo}`, { headers: this.headerAuth });
  }

  public agregarSucursal(body: bodyAddSucursal): Observable<any> {
    return this.http.post<any>(this.apiCrearSucursal, JSON.stringify(body), { headers: this.headerAuth });
  }

  public editarSucursal(body: bodyEditSucursal): Observable<any> {
    return this.http.post<any>(this.apiEditarSucursal, JSON.stringify(body), { headers: this.headerAuth });
  }
}
