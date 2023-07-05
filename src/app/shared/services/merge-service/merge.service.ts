import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalApis } from 'src/environments/endpoints';
import { RfcHotelUser, bodyRfcHotelUser } from '../../entities';

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

  public getRFCMap(body:bodyRfcHotelUser) : Observable<RfcHotelUser> {
    return this._httpClient.post<RfcHotelUser>(this.apiRFCMapHotelUser, JSON.stringify(body), { headers: this._headerAuth });
  }
};
