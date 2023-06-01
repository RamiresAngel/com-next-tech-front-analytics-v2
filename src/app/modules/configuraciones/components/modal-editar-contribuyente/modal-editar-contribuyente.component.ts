import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { ListaContribuyentes } from 'src/app/shared/entities/configuraciones.model';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-editar-contribuyente',
  templateUrl: './modal-editar-contribuyente.component.html',
  styleUrls: ['./modal-editar-contribuyente.component.scss']
})
export class ModalEditarContribuyenteComponent {
  public isVisibleMiddle:boolean = false;
  public formEditContribuyente: FormGroup = new FormGroup({});
  public cerFileUploaded!: string;
  public cerDataFile: Array<any> = [];
  public keyFileUploaded!: string;
  public keyDataFile: Array<any> = [];
  public patternRFCValue: RegExp = /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;
  @ViewChild('inputCERFile') inputCERFile: any;
  @ViewChild('inputKEYFile') inputKEYFile: any;
  @Input() public corporativo?: string;
  @Input() public RFCSelected?: ListaContribuyentes;
  @Output() public refreshAfterUpdate:EventEmitter<void> = new EventEmitter<void>();

  constructor(
    private configuracionesService:ConfiguracionesService,
    private notificationService:NzNotificationService
  ) {

  }

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
    
    this.formEditContribuyente = new FormGroup({
      rfc: new FormControl(this.RFCSelected?.rfc, [
        Validators.required,
        Validators.pattern(this.patternRFCValue)
      ]),
      identificador: new FormControl(this.RFCSelected?.identificador),
      file_cer: new FormControl('', [
        Validators.required
      ]),
      file_key: new FormControl('', [
        Validators.required
      ]),
      corporativo: new FormControl(this.corporativo),
      password: new FormControl('', [
        Validators.required
      ])
    })
  }

  public handleOkMiddle(): void {
    this.formEditContribuyente.markAllAsTouched();
    if (this.formEditContribuyente.valid === true) {      
      this.configuracionesService.crearRFCCorporativo(this.formEditContribuyente.value).subscribe(
        response => {
          this.removeCerFile();
          this.removeKeyFile();
          this.isVisibleMiddle = false;
          this.refreshAfterUpdate.emit();
        }, (error:any) => {
          this.notificationService.error("¡Error!", "Ha sucedido un error, intente de nuevo más tarde.");
        }
      )
    } else {
      let rfcWithName: any = this.formEditContribuyente.controls['rfc'];
      let file_cerWithName: any = this.formEditContribuyente.controls['file_cer'];
      let file_keyWithName: any = this.formEditContribuyente.controls['file_key'];
      let passwordWithName: any = this.formEditContribuyente.controls['password'];
      rfcWithName.nombre = "RFC";
      file_cerWithName.nombre = "Archivo .CER";
      file_keyWithName.nombre = "Archivo .KEY";
      passwordWithName.nombre = "Password";
      const arrayObjetosConNombre: Array<FormControl> = [rfcWithName, file_cerWithName, file_keyWithName, passwordWithName];
      const arrayErrors: Array<any> = [];

      arrayObjetosConNombre.forEach(element => {
        if (element.errors) {
          arrayErrors.push(element);
        }
      });

      arrayErrors.forEach(element => {
        if (element.nombre === 'Archivo .CER' || element.nombre === 'Archivo .KEY') {
          this.notificationService.error("¡Error!", `Para continuar, por favor sube tu <strong>${element.nombre}</strong>`);
        } else {
          if (element.nombre === "RFC") {
            if (element.value != "") {
              this.notificationService.error("¡Error!", `Para continuar, por favor ingresa un <strong>${element.nombre}</strong> válido.`);
            } else {
              this.notificationService.error("¡Error!", `Para continuar, por favor completa el campo <strong>${element.nombre}</strong>.`);
            }
          } else {
            this.notificationService.error("¡Error!", `Para continuar, por favor completa el campo <strong>${element.nombre}</strong>.`);
          }
        }
      });
    }
  }

  public handleCancelMiddle(): void {
    this.removeCerFile();
    this.removeKeyFile();
    this.isVisibleMiddle = false;
  }

  public uploadCerFile(event: any): void {
    const cerFile: any = new FileReader();
    const fileUploaded = event.target.files[0];
    const fileData: FileList = event.target.files;

    Array.from(fileData).forEach(element => {
      this.cerDataFile.push(element);
    });

    cerFile.readAsDataURL(fileUploaded);
    cerFile.onload = () => {
      this.cerFileUploaded = cerFile.result.split(',')[1];
      this.formEditContribuyente.controls['file_cer'].setValue(this.cerFileUploaded);
    }
    this.inputCERFile.nativeElement.disabled = true;
  }

  public removeCerFile(): void {
    while (this.cerDataFile.length) {
      this.cerDataFile.pop();
    }
    this.cerFileUploaded = '';
    this.formEditContribuyente.controls['file_cer'].setValue(this.cerFileUploaded);
    this.inputCERFile.nativeElement.value = '';
    this.inputCERFile.nativeElement.disabled = false;
  }

  public uploadKeyFile(event: any): void {
    const keyFile: any = new FileReader();
    const fileUploaded = event.target.files[0];
    const fileData: FileList = event.target.files;

    Array.from(fileData).forEach(element => {
      this.keyDataFile.push(element);
    });

    keyFile.readAsDataURL(fileUploaded);
    keyFile.onload = () => {
      this.keyFileUploaded = keyFile.result.split(',')[1];
      this.formEditContribuyente.controls['file_key'].setValue(this.keyFileUploaded);
    }
    this.inputKEYFile.nativeElement.disabled = true;
  }

  public removeKeyFile(): void {
    while (this.keyDataFile.length) {
      this.keyDataFile.pop();
    }
    this.keyFileUploaded = '';
    this.formEditContribuyente.controls['file_key'].setValue(this.keyFileUploaded);
    this.inputKEYFile.nativeElement.value = '';
    this.inputKEYFile.nativeElement.disabled = false;
  }
}
