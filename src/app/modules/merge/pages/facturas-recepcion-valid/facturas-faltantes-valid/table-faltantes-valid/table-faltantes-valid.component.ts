import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { BodyFiltroMerge, UserData, ColumnsFaltantesValid } from 'src/app/shared/entities';
import { globalApis } from 'src/environments/endpoints';

@Component({
  selector: 'app-table-faltantes-valid',
  templateUrl: './table-faltantes-valid.component.html',
  styleUrls: ['./table-faltantes-valid.component.scss']
})
export class TableFaltantesValidComponent {
  @ViewChild('facturas_conciliadas_merge') facturas!: HTMLElement;
  public dtOptions: DataTables.Settings = {};
  public dataTablesParameters: any;
  public filtro = new BodyFiltroMerge();
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser!: UserData;
  public is_loading: boolean = false;
  public columns = new ColumnsFaltantesValid();
  public bodyGlobalFiltro: any = {
    filtro: {}
  };

  constructor(
    private _http: HttpClient
  ) {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }

  ngOnInit(): void {
    this.inicializaTabla();
  }

  inicializaTabla() {
    this.dtOptions = {
      serverSide: true,
      processing: true,
      scrollX: true,
      searching: false,
      columnDefs: [
        {
          targets: '_all',
          className: 'text-center'
        }
      ],
      ajax: (dataTablesParameters: any, callback) => {
        const aux_filtro = this.meterFiltro(dataTablesParameters);
        if (aux_filtro.filtro.rfc_emisor != '') {
          dataTablesParameters.filtro = aux_filtro.filtro;
          dataTablesParameters.corporativo = aux_filtro.corporativo;
          dataTablesParameters.fidecomiso = aux_filtro.fidecomiso;
          dataTablesParameters.tipo = aux_filtro.tipo;
          dataTablesParameters.tipo_comprobante = aux_filtro.tipo_comprobante;
          dataTablesParameters.faltantes_erp = aux_filtro.faltantes_erp;
          dataTablesParameters.descuadre = aux_filtro.descuadre;
          dataTablesParameters.nivel_acceso = aux_filtro.nivel_acceso;
          this._http.post<any>(
            `${globalApis.url_merge}/faltantes_sat`,
            dataTablesParameters, {
            headers: new HttpHeaders({
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            })
          },
          ).subscribe((resp: any) => {
            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: resp.data
            });
          }, (error: any) => {
            console.log(error);
            callback({
              recordsTotal: 0,
              recordsFiltered: 0,
              data: []
            });
          });
        } else {
          callback({
            recordsTotal: 0,
            recordsFiltered: 0,
            data: []
          });
        }
      },
      columns: [...this.columns.columns_header]
    }
  }

  meterFiltro(obj: any = null) {
    const body_filtro = this.filtro;
    if (body_filtro) {
      obj = {};
      obj = body_filtro;
      this.bodyGlobalFiltro = body_filtro;
    }
    if (obj) {
      this.dataTablesParameters = obj;
    } else {
      obj = this.dataTablesParameters;
    }
    obj = this.filtro;
    obj.columns = [{
      dir: 'asc'
    }];
    return obj;
  }

  public refrescaTabla(filtro: BodyFiltroMerge) {
    this.filtro = filtro;
    if (this.filtro) {
      this.bodyGlobalFiltro = this.filtro;
    }
    try {
      $('#analytics-table').DataTable().ajax.reload();
    } catch (error) {
      console.log(error);
    }
  }
}
