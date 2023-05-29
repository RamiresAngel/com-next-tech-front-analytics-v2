import { Component, OnInit } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { EMPTY } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { bodyRfcHotelUser } from 'src/app/shared/entities/bodys.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { ProveedoresLista69 } from 'src/app/shared/entities/vault.model';
import { ProveedoresService } from 'src/app/shared/services/proveedores.service';

@Component({
  selector: 'app-lista69-b',
  templateUrl: './lista69-b.component.html',
  styleUrls: ['./lista69-b.component.scss']
})
export class Lista69BComponent implements OnInit {
  /* * declaración de Variables para el componente  */
  public dataUser!: UserData;
  public nivelAcceso = '';
  public filtroHotel!: bodyRfcHotelUser;
  public filtroRfcHotelUser: string[] = [];
  public listRFC: string[] = [];
  public rowsTable: Array<ProveedoresLista69> = [];
  public temp: Array<ProveedoresLista69> = [];
  public dataTable: Array<any> = [];
  public isLoading: boolean = false;

  constructor(
    private proveedoresService: ProveedoresService,
    private notificationService: NzNotificationService
  ) {
    const dataUserStorage: any = localStorage.getItem("dataUser");
    this.dataUser = JSON.parse(dataUserStorage);
  }

  ngOnInit(): void {
    this.nivelAcceso = this.dataUser.catalogo_niveles[0].nombre || '';
    this.proveedoresService
      .verificaFuncionalidad({ corporativo: this.dataUser.corporativo, nombre_rol: this.dataUser.rol }).subscribe();
    this.getRfcHotelUser();
  }

  public getRfcHotelUser(): void {
    this.isLoading = true;
    this.filtroRfcHotelUser = [];
    this.listRFC = [];
    while (this.dataTable.length) {
      this.dataTable.pop();
    }
    this.filtroHotel = {
      corporativo: this.dataUser.corporativo,
      email: this.dataUser.email,
      nivel_acceso: this.nivelAcceso,
      rol: this.dataUser.rol
    }
    this.proveedoresService.getRfcHotelUser(this.filtroHotel).subscribe(
      response => {
        this.listRFC = response.rfc_map;
        this.filtroRfcHotelUser = this.listRFC;
        this.isLoading = false;
      }, (error) => {
        if (error.status >= 400) {
          let msg = this.createNotification(error.error.detail);
          this.notificationService.error('Error', msg);
        }
        this.isLoading = false;
      }
    );
  }

  getLista69_B(): void {
    this.isLoading = true;
    this.proveedoresService.getProveedoresLista69({ rfc: this.filtroRfcHotelUser })
      .pipe(
        catchError((error) => {
          console.error(error);
          this.rowsTable = [];
          this.dataTable = [];
          return EMPTY;
        }),
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe((response) => {
        this.rowsTable = response.map((element: any) => ({
          rfc_receptor: element.rfc_receptor,
          rfc_emisor: element.rfc_emisor,
          ultima_factura: element.ultima_factura,
          primer_factura: element.primer_factura,
          importe: element.importe,
          situacion_del_contribuyente: element.situacion_del_contribuyente,
          fecha_primera_publicacion: element.fecha_primera_publicacion,
          razon_social_receptor: element.razon_social_receptor,
        }));
        this.dataTable = [...this.rowsTable];
      });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();
    // filter our data
    const temp = [...this.rowsTable]
    this.temp = temp.filter(function (d) {
      return (d.razon_social_receptor.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.rfc_receptor.toLowerCase().indexOf(val) !== -1 || !val) ||
        (d.rfc_emisor.toLowerCase().indexOf(val) !== -1 || !val);
    });
    // update the rows
    this.dataTable = [...this.temp];
    // Whenever the filter changes, always go back to the first page
    if (val == '' || !val) {
      this.getLista69_B();
    }
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

  /* Función para mostrar mensaje error en traducido */
  createNotification(msg: string) {
    if (msg.includes("Expiration")) return msg = "Su sesión ha expirado, por favor vuelva a iniciar sesión";
    return msg = "No se pudo cargar la información, por favor intente de nuevo más tarde.";
  }

}
