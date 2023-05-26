import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppsVerificadas, TablaUsuarios } from 'src/app/shared/entities/configuraciones.model';
import { CatalogoNiveles } from 'src/app/shared/entities/userData.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-editar-usuario',
  templateUrl: './modal-editar-usuario.component.html',
  styleUrls: ['./modal-editar-usuario.component.scss']
})
export class ModalEditarUsuarioComponent {
  public isVisibleMiddle: boolean = false;
  public isLoading: boolean = false;
  public formEditUser: FormGroup = new FormGroup({});
  public catalogoRFCS: Array<string> = [];
  public appsVerificadasStorage: any = localStorage.getItem("appsVerificadas");
  public appsVerificadasParse: any;
  public appsVerificadas!: Array<AppsVerificadas>;
  @Input() userSelected!: TablaUsuarios;
  @Input() dataUser!: UserData;
  @Output() public actualizarUsuarios: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private notificationService: NzNotificationService,
    private configuracionesService: ConfiguracionesService,
    private autenticacionService: AutenticacionService
  ) {
    this.appsVerificadasParse = JSON.parse(this.appsVerificadasStorage);
    this.appsVerificadas = this.appsVerificadasParse;
  }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.isLoading = true;

    this.configuracionesService.getListarRFCHotel({ corporativo: this.userSelected.corporativo, nivel_acceso: this.userSelected.nivel_acceso }).subscribe(
      response => {
        this.catalogoRFCS = response;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
        this.isVisibleMiddle = false;
      }
    );

    this.formEditUser = new FormGroup({
      corporativo: new FormControl(this.userSelected.corporativo),
      nivel_acceso: new FormControl(this.userSelected.nivel_acceso),
      rol: new FormControl(this.userSelected.rol),
      telefono: new FormControl(this.userSelected.telefono),
      apps: new FormControl(this.userSelected.apps),
      rfcs: new FormControl(this.userSelected.rfcs),
      nomina: new FormControl(this.userSelected.nomina),
      identificador: new FormControl(this.userSelected.identificador),
      carga_archivo: new FormControl(false),
      estatus: new FormControl(this.userSelected.estatus === 'Activo' ? true : false),
      hotel: new FormControl(this.userSelected.hotel, [
        Validators.required
      ]),
      nombre: new FormControl(this.userSelected.nombre),
      apellido: new FormControl(this.userSelected.apellido),
      email: new FormControl(this.userSelected.email, [
        Validators.email,
        Validators.required
      ])
    });
  }

  public handleOkMiddle(): void {
    this.formEditUser.markAllAsTouched();

    if (this.formEditUser.valid === true) {
      if (this.formEditUser.value['estatus'] === true) {
        this.formEditUser.value['estatus'] = "Activo";
      } else {
        this.formEditUser.value['estatus'] = "Inactivo";
      }

      const newHotel:CatalogoNiveles[] = this.dataUser.catalogo_niveles.filter(x => x.nombre === this.formEditUser.value['nivel_acceso']);
      this.formEditUser.value['hotel'] = newHotel[0].hotel;
      
      this.configuracionesService.editarUser(this.formEditUser.value).subscribe(
        response => {
          this.notificationService.success("¡Enhorabuena!", `¡El usuario <strong>${this.userSelected.nombre_completo}</strong> ha sido modificado satisfactoriamente!`)
          this.isVisibleMiddle = false;
          this.autenticacionService.actualizarUserData({ corporativo: this.dataUser.corporativo, email: this.dataUser.email }).subscribe(
            response => {
              localStorage.setItem("dataUser", JSON.stringify(response));
            }
          );
          this.actualizarUsuarios.emit();
        }
      )
    } else {
      if (this.formEditUser.controls['email'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa el campo <strong>Email</strong>.`);
      }
    }
  }

  public listarRFCHotel(): void {
    this.configuracionesService.getListarRFCHotel({ corporativo: this.userSelected.corporativo, nivel_acceso: this.formEditUser.value['nivel_acceso'] }).subscribe(
      response => {
        this.formEditUser.controls['rfcs'].setValue([]);
        this.catalogoRFCS = response;
      }
    );
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
