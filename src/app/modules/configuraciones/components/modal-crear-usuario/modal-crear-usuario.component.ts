import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppsVerificadas, TablaUsuarios } from 'src/app/shared/entities/configuraciones.model';
import { CatalogoNiveles } from 'src/app/shared/entities/userData.model';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-crear-usuario',
  templateUrl: './modal-crear-usuario.component.html',
  styleUrls: ['./modal-crear-usuario.component.scss']
})
export class ModalCrearUsuarioComponent {
  public isVisibleMiddle = false;
  public formAddUser: FormGroup = new FormGroup({});
  public catalogoRFCS: Array<string> = [];
  public appsVerificadasStorage:any = localStorage.getItem("appsVerificadas");
  public appsVerificadasParse:any;
  public appsVerificadas!:Array<AppsVerificadas>;
  @Input() public nivelAccesoSelected: any;
  @Input() public corporativo!: string;
  @Input() public catalogoNiveles!:CatalogoNiveles[];
  @Input() public nombreNivelAcceso!:string;
  @Input() public emailUser!:string;
  @Output() public actualizarUsuarios: EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private configuracionesService: ConfiguracionesService,
    private notificationService: NzNotificationService,
    private autenticacionService:AutenticacionService
  ) { 
    this.appsVerificadasParse = JSON.parse(this.appsVerificadasStorage);
    this.appsVerificadas = this.appsVerificadasParse;
  }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;

    const hotelSelected:CatalogoNiveles[] = this.catalogoNiveles.filter(x => x.nombre === this.nivelAccesoSelected);

    this.configuracionesService.getListarRFCHotel({ corporativo: this.corporativo, nivel_acceso: this.nivelAccesoSelected }).subscribe(
      response => {
        this.catalogoRFCS = response;
      }
    );
    
    this.formAddUser = new FormGroup({
      corporativo: new FormControl(this.corporativo),
      nivel_acceso: new FormControl(this.nivelAccesoSelected),
      rol: new FormControl(''),
      telefono: new FormControl(),
      password: new FormControl('', [
        Validators.required
      ]),
      apps: new FormControl([]),
      rfcs: new FormControl(),
      nomina: new FormControl(false),
      carga_archivo: new FormControl(false),
      estatus: new FormControl("Activo"),
      hotel: new FormControl(hotelSelected[0].hotel, [
        Validators.required
      ]),
      nombre: new FormControl(),
      apellido: new FormControl(),
      email: new FormControl('', [
        Validators.email,
        Validators.required
      ])
    });
  }

  public listarRFCHotel() : void {
    this.configuracionesService.getListarRFCHotel({ corporativo: this.corporativo, nivel_acceso: this.formAddUser.value['nivel_acceso'] }).subscribe(
      response => {
        this.formAddUser.controls['rfcs'].setValue([]);
        this.catalogoRFCS = response;
      }
    );
  }

  public handleOkMiddle(): void {
    this.formAddUser.markAllAsTouched();
    
    if (this.formAddUser.valid === true) {
      this.configuracionesService.crearUsuario(this.formAddUser.value).subscribe(
        response => {
          this.notificationService.success("¡Enhorabuena!", `Usuario creado satisfactoriamente.`);
          this.isVisibleMiddle = false;
          this.autenticacionService.actualizarUserData({ corporativo: this.corporativo, email: this.emailUser }).subscribe(
            response => {
              localStorage.setItem("dataUser", JSON.stringify(response));
            }
          );
          this.actualizarUsuarios.emit();
        }
      )
    } else {
      if (this.formAddUser.controls['email'].errors && this.formAddUser.controls['password'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa los campos <strong>Email</strong> y <strong>Password</strong>.`);
      } else if (this.formAddUser.controls['email'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa el campo <strong>Email</strong>.`);
      } else if (this.formAddUser.controls['password'].errors) {
        this.notificationService.error("¡Error!", `Para continuar completa el campo <strong>Password</strong>.`);
      }
    }
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
