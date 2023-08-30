import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalApis } from 'src/environments/endpoints';
import { ReportDescarga, RfcHotelUser, bodyDescargaReportes, bodyRfcHotelUser } from '../../entities';
import { BodyFiltroMerge } from '../../entities/merge.model';

@Injectable({
  providedIn: 'root'
})
export class MergeService {
  private _headerAuth!: HttpHeaders;
  private _tokenUser: any = localStorage.getItem('token');
  private apiRFCMapHotelUser: string = globalApis.url_usuarios + '/rfc_map_hotel_user';

  constructor(
    private _httpClient: HttpClient
  ) {
    this._headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this._tokenUser}`
    });
  };

  public getRFCMap(body: bodyRfcHotelUser): Observable<RfcHotelUser> {
    return this._httpClient.post<RfcHotelUser>(this.apiRFCMapHotelUser, JSON.stringify(body), { headers: this._headerAuth });
  }

  public programaReporte(body: BodyFiltroMerge): Observable<any> {
    return this._httpClient.post(`${globalApis.url_merge}/reportes`, body, { headers: this._headerAuth });
  }

  public listarDescargas(body: bodyDescargaReportes): Observable<Array<ReportDescarga>> {
    return this._httpClient.get<Array<ReportDescarga>>(`${globalApis.url_merge}/descarga?email=${body.email}&corporativo=${body.corporativo}`
      , { headers: this._headerAuth }
    );
  }

  public eliminarReporte(q: any): Observable<any> {
    return this._httpClient.delete(`${globalApis.url_merge}/borrar_reporte?q=${q.identificador}&t=${q.fecha_creacion_date}`
      , { headers: this._headerAuth });
  }

};
