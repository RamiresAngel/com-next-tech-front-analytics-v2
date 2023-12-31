import { Component, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/entities/userData.model';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';
import { ModalCreaNivelAccesoComponent } from '../../components/modal-crea-nivel-acceso/modal-crea-nivel-acceso.component';
import { ModalEditaNivelAccesoComponent } from '../../components/modal-edita-nivel-acceso/modal-edita-nivel-acceso.component';
import { ListaSucursales } from 'src/app/shared/entities';

@Component({
  selector: 'app-nivel-acceso',
  templateUrl: './nivel-acceso.component.html',
  styleUrls: ['./nivel-acceso.component.scss']
})
export class NivelAccesoComponent {
  @ViewChild('modal_crear') modal_crear?: ModalCreaNivelAccesoComponent;
  @ViewChild('modal_editar') modal_editar?: ModalEditaNivelAccesoComponent;
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser: UserData;
  public nivelAcceso: any;
  public isLoading: boolean = false;
  dtOptions: DataTables.Settings = {
    language: {
      url: '../../../../../assets/data/table-language.json',
    },
    scrollX: true
  };
  public rowsTable!: ListaSucursales;
  public sucursal: any;

  constructor(
    private _configuraciones: ConfiguracionesService,
  ) {
    this.dataUser = JSON.parse(this.dataUserStorage);
    this.getNivelesAcceso();
  }

  public getNivelesAcceso(): void {
    this.isLoading = true;
    if (this.nivelAcceso === undefined || this.nivelAcceso === null || this.nivelAcceso === '') {
      this.nivelAcceso = this.dataUser.nivel_acceso;
    } else {
      this.nivelAcceso = [this.nivelAcceso];
    }
    this._configuraciones.listarNivelAcceso({
      email: this.dataUser.email,
      corporativo: this.dataUser.corporativo,
      niveles_acceso: this.nivelAcceso,
      rol: this.dataUser.rol
    }).subscribe(
      response => {
        this.rowsTable = response;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
      }
    );
  }

  modalEditar(item: any): void {
    this.sucursal = item;
    setTimeout(() => {
      this.modal_editar?.showModal();
    }, 300);
  }

  showModal(): void {
    this.modal_crear?.showModal();
  }
}
