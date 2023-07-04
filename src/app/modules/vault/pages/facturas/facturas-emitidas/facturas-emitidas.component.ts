import { Component, OnInit, ViewChild } from '@angular/core';
import { BodyFiltro, ColumnsHeader, UserData } from 'src/app/shared/entities';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { globalApis } from 'src/environments/endpoints';
declare var $: any;

@Component({
  selector: 'app-facturas-emitidas',
  templateUrl: './facturas-emitidas.component.html',
  styleUrls: ['./facturas-emitidas.component.scss']
})
export class FacturasEmitidasComponent implements OnInit {
  @ViewChild('facturas_emision') facturas!: HTMLElement;
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
          dataTablesParameters.filtro = aux_filtro.filtro;
          dataTablesParameters.corporativo = 'marriott';
          dataTablesParameters.fidecomiso = true;
          dataTablesParameters.ppd_view = false;
          dataTablesParameters.tipo = 'emision';
          dataTablesParameters.tipo_comprobante = 'factura';
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
      columns: [
        ...this.columns_header.columns_header,
        this.createDownloadColumn()
      ]
    }
  }

  meterFiltro(obj: any = null) {
    const body_filtro = this.filtro;
    if (body_filtro) {
      obj = {};
      obj.filtro = body_filtro.filtro;
      this.bodyGlobalFiltro.filtro = body_filtro.filtro;
    }
    if (obj) {
      this.dataTablesParameters = obj;
    } else {
      obj = this.dataTablesParameters;
    }
    obj.filtro = this.filtro.filtro;
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
      this.filtro = filtro;
      if (this.filtro) {
        this.bodyGlobalFiltro.filtro = this.filtro.filtro;
      }
      try {
        $('#analytics-table').DataTable().ajax.reload();
      } catch (error) {
        console.log(error);
      }
    }
  }

  private createDownloadColumn() {
    return {
      title: 'Descargar PDF/XML',
      orderable: false,
      render: (data: any, type: any, row: any) => {
        const pdfLink = row[45];
        const xmlLink = row[44];
        const pdfBtnClass = 'btn-danger';
        const xmlBtnClass = 'btn-success';
        const pdfBtn = pdfLink ? `
          <a href="${pdfLink}" target="_blank" class="m-1 btn ${pdfBtnClass}">
            <i class="fa-regular fa-file-pdf"></i>
          </a>
        ` : '';
        const xmlBtn = xmlLink ? `
          <a href="${xmlLink}" target="_blank" class="m-1 btn ${xmlBtnClass}">
            <i class="fa-regular fa-file-code"></i>
          </a>
        ` : '';
        return `
        <div class="d-inline-flex align-items-center">
          ${pdfBtn}
          ${xmlBtn}
        </div>
      `;
      }
    };
  };

}

