import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { UserData, bodyAddSucursal } from 'src/app/shared/entities';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-crea-nivel-acceso',
  templateUrl: './modal-crea-nivel-acceso.component.html',
  styleUrls: ['./modal-crea-nivel-acceso.component.scss']
})
export class ModalCreaNivelAccesoComponent {
  @Input() public usuarioSeleccionado!: string;
  @Output() public refreshSucursales: EventEmitter<void> = new EventEmitter<void>();
  public isVisible: boolean = false;
  public isLoading: boolean = false;
  public isSubmiting: boolean = false;
  public formAddSucursal!: FormGroup;
  public rfcMap: Array<any> = [];
  public serienew: any;
  public listaRFCCorporativo: string[] = [];
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser: UserData;

  constructor(
    private notificationService: NzNotificationService,
    private configuracionService: ConfiguracionesService
  ) {
    this.dataUser = JSON.parse(this.dataUserStorage);
  }

  public showModal(): void {
    this.isVisible = true;
    this.isLoading = true;

    this.listarRFCsCorporativos();

    this.formAddSucursal = new FormGroup({
      corporativo: new FormControl(this.dataUser.corporativo),
      hotel: new FormControl("", [
        Validators.required
      ]),
      direccion: new FormControl(""),
      telefono: new FormControl(""),
      centralizado: new FormControl(false),
      rfc: new FormControl([]),
      cp: new FormControl(""),
      rfc_map: new FormControl(),
      fidecomiso: new FormControl(),
      usuario: new FormControl([this.usuarioSeleccionado])
    });
  }

  public listarRFCsCorporativos(): void {
    while (this.listaRFCCorporativo.length) {
      this.listaRFCCorporativo.pop();
    }

    this.configuracionService.listarRFCCorporativo(this.dataUser.corporativo).subscribe(
      response => {
        response.forEach(element => {
          this.listaRFCCorporativo.push(element);
        });
        this.isLoading = false;
      }
    );
  }

  public rfcSelected(): void {
    let aux: string[] = this.formAddSucursal.value['rfc'];
    var rfc_list: Array<any> = [];
    this.rfcMap.forEach(x => {
      rfc_list.unshift(x.rfc)
    });
    if (aux.length > rfc_list.length) {
      // Compara los valores de ambos arrays
      const arr3 = aux.filter(value => !rfc_list.includes(value));
      // arr3 Muestra los valores diferentes
      let obj: any = {
        cp: "",
        fidecomiso: false,
        rfc: arr3[0],
        serie: [],
      };
      this.rfcMap.push(obj);
      this.formAddSucursal.controls['rfc_map'].setValue(this.rfcMap);
    } else {
      const arr3 = rfc_list.filter(value => !aux.includes(value));
      const x = this.rfcMap.findIndex(x => x.rfc === arr3[0]);
      this.rfcMap.splice(x, 1);
    }
  }

  public setFideicomiso = (i: number) => {
    this.rfcMap[i].fidecomiso = this.formAddSucursal.value['fidecomiso'];
  }

  public Addserie(idInput: any): void {
    let inputSerie: any = document.getElementById(`serie-input-${idInput}`);
    let querySearch = this.rfcMap[idInput].serie.find((elem: any) => elem === inputSerie.value);
    if (querySearch) {
      this.notificationService.warning("¡Atención!", "El valor de la serie ingresada ya existe en esta sucursal");
    } else {
      this.rfcMap[idInput].serie.push(inputSerie.value);
      inputSerie.value = '';
    }
  }

  public deleteSerie(idInput: any, idSerie: any): void {
    this.rfcMap[idInput].serie.splice(idSerie, 1);
  }

  public handleOk(): void {
    this.formAddSucursal.markAllAsTouched();
    let sucursal: bodyAddSucursal = {
      centralizado: this.formAddSucursal.value['centralizado'],
      corporativo: this.formAddSucursal.value['corporativo'],
      cp: this.formAddSucursal.value['cp'],
      direccion: this.formAddSucursal.value['direccion'],
      hotel: this.formAddSucursal.value['hotel'],
      rfc: this.formAddSucursal.value['rfc'],
      rfc_map: this.formAddSucursal.value['rfc_map'],
      telefono: this.formAddSucursal.value['telefono'],
      usuario: this.formAddSucursal.value['usuario']
    };

    if (this.formAddSucursal.valid) {
      this.isSubmiting = true;
      this.configuracionService.agregarSucursal(sucursal).subscribe(
        response => {
          this.isSubmiting = false;
          this.notificationService.success("¡Éxito!", `Se ha añadido la sucursal <strong>${this.formAddSucursal.value['hotel']}</strong> correctamente.`);
          this.handleCancel();
          this.refreshSucursales.emit();
        }, (error: any) => {
          this.isSubmiting = false;
          this.notificationService.error("¡Error!", "Ocurrió un error inesperado, por favor intente de nuevo más tarde.");
        }
      )
    } else {
      this.notificationService.error("¡Error!", "Por favor, complete los campos correctamente para continuar");
    }


  }

  public handleCancel(): void {
    while (this.rfcMap.length) {
      this.rfcMap.pop();
    }
    this.isVisible = false;
  }


}
