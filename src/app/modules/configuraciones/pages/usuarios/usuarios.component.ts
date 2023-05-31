import { Component, ErrorHandler, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { bodyGetListUsers, bodyRfcHotelUser } from 'src/app/shared/entities/bodys.model';
import { TablaUsuarios } from 'src/app/shared/entities/configuraciones.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUserParsed: any;
  public dataUser!: UserData;
  public nivelAcceso: any;
  public isLoading: boolean = false;
  public filtroNivelAcceso!: bodyGetListUsers;
  public verificaFuncionalidad!:boolean;
  public rowsTable:Array<TablaUsuarios> = [];
  public dataTable: Array<any> = [];
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  constructor(
    private configuracionesService:ConfiguracionesService,
    private notificationService:NzNotificationService,
    private autenticacionService:AutenticacionService
  ) {
    this.dataUserParsed = JSON.parse(this.dataUserStorage);
    this.dataUser = this.dataUserParsed;    
  }

  ngOnInit(): void {
    this.nivelAcceso = this.dataUser.catalogo_niveles[0].nombre;
    this.configuracionesService.verificaFuncionalidad({ corporativo: this.dataUser.corporativo, nombre_rol: this.dataUser.rol }).subscribe(
      response => {
        this.verificaFuncionalidad = response;
      }, (error:any) => {
        if (error.status === 401) {
          this.notificationService.error("¡Error!", "Su token ha expirado, por favor, inicie sesión nuevamente.")
          this.autenticacionService.cerrarSesion();
        }
      }
    );
    this.configuracionesService.verificaApps(this.dataUser.corporativo).subscribe(
      response => {
        localStorage.setItem("appsVerificadas", JSON.stringify(response));
      }
    )
    this.getListUsers();
  }

  public getListUsers(): void {
    this.isLoading = true;
    const arrayHotels:any = [];
    let nivelAccesoSelected = this.nivelAcceso;

    while (this.dataTable.length) {
      this.dataTable.pop();
    }

    this.dataUser.catalogo_niveles.forEach(element => {
      arrayHotels.push(element.nombre);
    });    

    if (nivelAccesoSelected === '') {
      nivelAccesoSelected = arrayHotels;
    } else {
      nivelAccesoSelected = [nivelAccesoSelected];
    }

    this.filtroNivelAcceso = {
      corporativo: this.dataUser.corporativo,
      email: this.dataUser.email,
      niveles_acceso: nivelAccesoSelected,
      rol: this.dataUser.rol
    }

    this.configuracionesService.getListUsers(this.filtroNivelAcceso).subscribe(
      response => {
        response.forEach(element => {
          this.rowsTable.push(
            {
              apellido: element.apellido,
              apps: element.apps,
              corporativo: element.corporativo,
              email: element.email,
              estatus: element.estatus,
              hotel: element.hotel,
              identificador: element.identificador,
              nivel_acceso: element.nivel_acceso,
              nombre: element.nombre,
              nomina: element.nomina,
              rfcs: element.rfcs,
              rol: element.rol,
              telefono: element.telefono,
              nombre_completo: element.nombre + ' ' + element.apellido
            }
          );
        });
        this.dataTable = this.rowsTable;        
        this.isLoading = false;
      }, (error:any) => {
        this.isLoading = false;
        while (this.dataTable.length) {
          this.dataTable.pop();
        }
        this.notificationService.error("¡Error!", error.error);
      }
    )
  }

  public updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rowsTable.filter(function (d) {
      return d.nombre_completo?.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.dataTable = temp;
    
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  columns = [
    { prop: 'hotel' },
    { prop: 'nombre_completo' },
    { prop: 'email' },
    { prop: 'telefono' },
    { prop: 'estatus' },
    { prop: 'situacion_del_contribuyente' },
    { prop: 'fecha_primera_publicacion' },
    { prop: 'razon_social_receptor' }
  ];
}
