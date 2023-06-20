import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { bodyRfcHotelUser } from 'src/app/shared/entities/bodys.model';
import { ProveedoresLista69 } from 'src/app/shared/entities/proveedores.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { ProveedoresService } from 'src/app/shared/services/proveedores.service';

@Component({
  selector: 'app-lista69',
  templateUrl: './lista69.component.html',
  styleUrls: ['./lista69.component.scss']
})
export class Lista69Component implements OnInit {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUserParsed: any;
  public dataUser!: UserData;
  public nivelAcceso: any;
  public filtroHotel!: bodyRfcHotelUser;
  public filtroRfcHotelUser!: string[];
  public listRFC: string[] = [];
  public rowsTable: Array<ProveedoresLista69> = [];
  public dataTable: Array<any> = [];
  public isLoading: boolean = false;

  constructor(
    private proveedoresService: ProveedoresService,
    private notificationService: NzNotificationService
  ) {
    this.dataUserParsed = JSON.parse(this.dataUserStorage);
    this.dataUser = this.dataUserParsed;
  }

  ngOnInit(): void {
    this.nivelAcceso = this.dataUser.catalogo_niveles[0].nombre;
    this.proveedoresService.verificaFuncionalidad({ corporativo: this.dataUser.corporativo, nombre_rol: this.dataUser.rol }).subscribe(
      response => {
        console.log(response);
      }
    );
    this.getRfcHotelUser();
  }

  public getRfcHotelUser(): void {
    this.isLoading = true;
    while (this.dataTable.length) {
      this.dataTable.pop();
    }
    this.filtroRfcHotelUser = [];
    this.listRFC = [];

    this.filtroHotel = {
      corporativo: this.dataUser.corporativo,
      email: this.dataUser.email,
      nivel_acceso: this.nivelAcceso || '',
      rol: this.dataUser.rol
    }

    this.proveedoresService.getRfcHotelUser(this.filtroHotel).subscribe(
      (response: any) => {
        this.listRFC = response.rfc_map;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
        this.notificationService.error("¡Error!", "No se pudo cargar la información, por favor intente de nuevo más tarde.");
      }
    )
  }

  public getProveedores69(): void {
    this.isLoading = true;
    this.proveedoresService.getProveedoresLista69({ rfc: this.filtroRfcHotelUser }).subscribe(
      response => {
        response.forEach(element => {
          this.rowsTable.push(
            {
              rfc_receptor: element.rfc_receptor,
              rfc_emisor: element.rfc_emisor,
              ultima_factura: element.ultima_factura,
              primer_factura: element.primer_factura,
              importe: element.importe,
              situacion_del_contribuyente: element.situacion_del_contribuyente,
              fecha_primera_publicacion: element.fecha_primera_publicacion,
              razon_social_receptor: element.razon_social_receptor
            }
          );
        });
        this.dataTable = this.rowsTable;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
        while (this.dataTable.length) {
          this.dataTable.pop();
        }
        this.notificationService.error("¡Error!", error.error);
      }
    )
  }

  columns = [
    { prop: 'rfc_receptor' },
    { prop: 'rfc_emisor' },
    { prop: 'ultima_factura' },
    { prop: 'primer_factura' },
    { prop: 'importe' },
    { prop: 'situacion_del_contribuyente' },
    { prop: 'fecha_primera_publicacion' },
    { prop: 'razon_social_receptor' }
  ];
}
