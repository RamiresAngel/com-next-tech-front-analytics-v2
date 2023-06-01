import { formatDate } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { bodyRFCUser } from 'src/app/shared/entities/bodys.model';
import { ListaContribuyentes } from 'src/app/shared/entities/configuraciones.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-sociedades',
  templateUrl: './sociedades.component.html',
  styleUrls: ['./sociedades.component.scss']
})
export class SociedadesComponent implements OnInit {
  public dataUser!: UserData;
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public rowsTable: Array<ListaContribuyentes> = [];
  public dataTable: Array<any> = [];
  public isLoading: boolean = false;
  public nivelAcceso!:string;
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  constructor(
    private configuracionesService:ConfiguracionesService,
    private autenticacion:AutenticacionService
  ) {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }

  ngOnInit(): void {
    this.nivelAcceso = this.dataUser.catalogo_niveles[0].nombre;
    this.configuracionesService.verificaFuncionalidad({corporativo: this.dataUser.corporativo, nombre_rol: this.dataUser.rol}).subscribe(
      response => {
        console.log(response);
      }, (error:any) => {
        if (error.status === 401) {
          this.autenticacion.cerrarSesion();
        }
      }
    );
    this.getContribuyentes();
  }

  public getContribuyentes(): void {
    this.isLoading = true;

    while (this.dataTable.length) {
      this.dataTable.pop();
    }

    const bodyRfcUser:bodyRFCUser = {
      corporativo: this.dataUser.corporativo,
      email: this.dataUser.email,
      nivel_acceso: this.nivelAcceso,
      rol: this.dataUser.rol
    }

    this.configuracionesService.RFCUser(bodyRfcUser).subscribe(
      response => {
        response.forEach(element => {
          this.rowsTable.push(
            {
              estatus: element.estatus,
              fecha_creacion: formatDate(element.fecha_ultimo_movimiento, 'dd/MM/yyyy', 'es-ES'),
              fecha_ultimo_movimiento: formatDate(element.fecha_ultimo_movimiento, 'dd/MM/yyyy', 'es-ES'),
              identificador: element.identificador,
              razon_social: element.razon_social,
              rfc: element.rfc
            }
          );
        });
        this.dataTable = this.rowsTable;
        this.isLoading = false;
      }
    );
  }

  public updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rowsTable.filter(function (d) {
      return (d.rfc.toLowerCase().indexOf(val) !== -1 || !val) ||
      (d.razon_social.toLowerCase().indexOf(val) !== -1 || !val)
    });

    // update the rows
    this.dataTable = temp;
    
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  columns = [
    { prop: 'rfc' },
    { prop: 'razon_social' },
    { prop: 'estatus' },
    { prop: 'fecha_creacion' },
    { prop: 'fecha_ultimo_movimiento' }
  ];
}
