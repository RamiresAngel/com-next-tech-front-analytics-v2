import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Injectable } from '@angular/core';
import { globalApis } from 'src/environments/endpoints';
import { MenuEntity, BodyMenu } from '../entities';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerMenusService {
  private apiUsuarios = globalApis.url_usuarios;
  private headerAuth!: HttpHeaders;

  constructor(
    private http: HttpClient
  ) { }

  public getMenu(body: BodyMenu, token:any): Observable<MenuEntity> {
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.get<MenuEntity>(this.apiUsuarios + `/menu_modulo?corporativo=${body.corporativo}&modulo=${body.modulo}`, { headers: this.headerAuth });
  }
}
