import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalApis } from 'src/environments/endpoints';
import { RfcHotelUser, ReportDescarga, ReporteLink, bodyDescargaReportes, bodyDescargarReporte, bodyRfcHotelUser } from '../entities';

@Injectable({
  providedIn: 'root'
})
export class VaultService {
  private headerAuth!: HttpHeaders;
  private tokenUser: any = localStorage.getItem("token");
  private apiRFCMapHotelUser: string = globalApis.url_usuarios + '/rfc_map_hotel_user';

  constructor(
    private http: HttpClient
  ) {
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenUser}`
    });
  }

  public descargaReportes(body: bodyDescargaReportes): Observable<Array<ReportDescarga>> {
    return this.http.get<Array<ReportDescarga>>(`${globalApis.url_vault}/descarga_reports?email=${body.email}&corporativo=${body.corporativo}`, { headers: this.headerAuth });
  }

  public descargaLinkReportes(body: bodyDescargarReporte): Observable<Array<ReporteLink>> {
    return this.http.get<Array<ReporteLink>>(`${globalApis.url_vault}/descarga/link?q=${body.q}&t=${body.t}`, { headers: this.headerAuth })
  }

  public getRFCMap(body:bodyRfcHotelUser) : Observable<RfcHotelUser> {
    return this.http.post<RfcHotelUser>(this.apiRFCMapHotelUser, JSON.stringify(body), { headers: this.headerAuth });
  }
}
