import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { bodyCambiarRol } from 'src/app/shared/entities/bodys.model';
import { ListaRoles, TablaUsuarios } from 'src/app/shared/entities/configuraciones.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-editar-rol',
  templateUrl: './modal-editar-rol.component.html',
  styleUrls: ['./modal-editar-rol.component.scss']
})
export class ModalEditarRolComponent {
  public isVisibleMiddle = false;
  public isLoading: boolean = false;
  public ListaRoles!: Array<ListaRoles>;
  public formEditRol: FormGroup = new FormGroup({});
  @Input() public dataUser!: UserData;
  @Input() public userSelected!: TablaUsuarios;
  public bodyEditarRol!: bodyCambiarRol;
  @Output() public actualizarUsuarios: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private configuracionesService: ConfiguracionesService,
    private notificationService: NzNotificationService,
    private autenticacionService: AutenticacionService
  ) { }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.isLoading = true;

    this.configuracionesService.listarRoles(this.dataUser.corporativo).subscribe(
      response => {
        this.ListaRoles = response;
        this.isLoading = false;
      }, (error: any) => {
        this.isLoading = false;
      }
    )

    this.formEditRol = new FormGroup({
      rol: new FormControl(this.userSelected.rol, [
        Validators.required
      ])
    });
  }

  public handleOkMiddle(): void {
    if (this.formEditRol.valid) {
      this.bodyEditarRol = {
        corporativo: this.userSelected.corporativo,
        email: this.userSelected.email,
        identificador: this.userSelected.identificador,
        rol: this.formEditRol.value['rol']
      }

      this.configuracionesService.editarRolUser(this.bodyEditarRol).subscribe(
        response => {
          this.notificationService.success("¡Enhorabuena!", `¡El rol del usuario <strong>${this.userSelected.nombre_completo}</strong> ha sido cambiado a <strong>${this.formEditRol.value['rol']}</strong> satisfactoriamente!`)
          this.isVisibleMiddle = false;
          this.autenticacionService.actualizarUserData({ corporativo: this.dataUser.corporativo, email: this.dataUser.email }).subscribe(
            response => {
              localStorage.setItem("dataUser", JSON.stringify(response));
            }
          );
          this.actualizarUsuarios.emit();
        }
      )
    }
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
