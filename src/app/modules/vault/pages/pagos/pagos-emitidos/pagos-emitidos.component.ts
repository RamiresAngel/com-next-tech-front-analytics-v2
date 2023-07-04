import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { BodyFiltro, ColumnsHeader, UserData } from 'src/app/shared/entities';
import { globalApis } from 'src/environments/endpoints';

@Component({
  selector: 'app-pagos-emitidos',
  templateUrl: './pagos-emitidos.component.html',
  styleUrls: ['./pagos-emitidos.component.scss']
})
export class PagosEmitidosComponent {
  @ViewChild('facturas') facturas!: HTMLElement;
  public dtOptions: DataTables.Settings = {};
  public dataTablesParameters: any;
  public filtro = new BodyFiltro();
  public columns_header = new ColumnsHeader();
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser!: UserData;
  public is_loading: boolean = false;
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
          dataTablesParameters = aux_filtro;
          console.log(dataTablesParameters);
          this._http.post<any>(
            `${globalApis.url_vault}/factura`,
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
      columns: [...this.columns_header.columns_header]
    }
  }

  meterFiltro(obj: any = null) {
    const body_filtro = this.filtro;
    if (body_filtro) {
      obj = {};
      obj = body_filtro;
      this.filtro = body_filtro;
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

  public refrescaTabla(filtro: BodyFiltro) {
    if (filtro.filtro.rfc_emisor == '' || filtro.filtro.rfc_emisor == null || filtro.filtro.rfc_emisor == undefined
      || filtro.filtro.fecha_factura_i == '' || filtro.filtro.fecha_factura_i == null || filtro.filtro.fecha_factura_i == undefined) {
      alert('El campo RFC Emisor es requerido');
    } else {
      if (filtro) {
        this.filtro = filtro;
      }
      try {
        $('#analytics-table').DataTable().ajax.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

}
