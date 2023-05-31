import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-crear-rol',
  templateUrl: './modal-crear-rol.component.html',
  styleUrls: ['./modal-crear-rol.component.scss']
})
export class ModalCrearRolComponent {
  public isVisibleMiddle: boolean = false;
  public formCrearRol: FormGroup = new FormGroup({});
  public listaFuncionalidades!: string[];
  @Output() public getRolesAlCrear: EventEmitter<void> = new EventEmitter<void>();
  @Input() public corporativo!: string;

  constructor(
    private configuracionesService: ConfiguracionesService,
    private notificationService: NzNotificationService
  ) { }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
    this.configuracionesService.listarFuncionalidades(this.corporativo).subscribe(
      response => {
        this.listaFuncionalidades = response;
      }
    )

    this.formCrearRol = new FormGroup({
      corporativo: new FormControl(this.corporativo),
      funcionalidades: new FormControl([], [
        Validators.required
      ]),
      nombre_rol: new FormControl('', [
        Validators.required
      ])
    });
  }

  public handleOkMiddle(): void {
    this.formCrearRol.markAllAsTouched();
    if (this.formCrearRol.valid) {
      this.configuracionesService.crearRol(this.formCrearRol.value).subscribe(
        response => {
          this.notificationService.success("¡Enhorabuena!", `El rol ${this.formCrearRol.value['nombre_rol']} ha sido creado satisfactoriamente.`);
          this.isVisibleMiddle = false;
          this.getRolesAlCrear.emit();
        }, (error: any) => {
          this.notificationService.error("¡Error!", `Ocurrió un error al momento de procesar la solicitud, vuelva a intentarlo más tarde.`);
        }
      )
    } else {
      if (this.formCrearRol.controls['nombre_rol'].errors && this.formCrearRol.controls['funcionalidades'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa los campos <strong>Nombre del rol</strong> y <strong>Lista de funcionalidades</strong>.`);
      } else if (this.formCrearRol.controls['nombre_rol'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa el campo <strong>Nombre del rol</strong>.`);
      } else if (this.formCrearRol.controls['funcionalidades'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa el campo <strong>Lista de funcionalidades</strong>.`);
      }
    }
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
