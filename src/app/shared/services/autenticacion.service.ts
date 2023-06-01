import { Inject, Injectable } from '@angular/core';
import { globalApis } from '../../../environments/endpoints';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BodyLogin, UserData } from '../entities';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {
  private tokenUser:any = localStorage.getItem("token");
  private apiLogin:string = globalApis.url_usuarios + "/login";
  private headerAuth!:HttpHeaders;

  constructor(
    private http:HttpClient,
    private auth:AuthService,
    @Inject(DOCUMENT) private documento:Document
  ) { 
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenUser}`
    });
  }

  public getUserData(body:BodyLogin, token:any) : Observable<UserData> {
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<UserData>(this.apiLogin, JSON.stringify(body), { headers: this.headerAuth });
  }

  public cerrarSesion() : void {
    localStorage.clear();
    this.auth.logout({ logoutParams: { returnTo: this.documento.location.origin }});
  }

  public actualizarUserData(body:BodyLogin) : Observable<UserData> {
    return this.http.post<UserData>(this.apiLogin, JSON.stringify(body), { headers: this.headerAuth });
  }
}
