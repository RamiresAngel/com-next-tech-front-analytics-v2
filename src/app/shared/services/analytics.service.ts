import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { globalApis } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private headerAuth!: HttpHeaders;
  private tokenUser: any = localStorage.getItem("token");
  private url_tableau: string = globalApis.url_vault_tableau + '/tableau_token';

  constructor(
    private http: HttpClient
  ) {
    this.headerAuth = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.tokenUser}`
    });
  }

  public getTableauToken(email: string): Observable<any> {
    return this.http.post(this.url_tableau, email, { headers: this.headerAuth });
  }

}
