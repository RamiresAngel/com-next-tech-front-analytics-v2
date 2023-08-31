import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { bodyEditSucursal } from 'src/app/shared/entities';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-modal-edita-nivel-acceso',
  templateUrl: './modal-edita-nivel-acceso.component.html',
  styleUrls: ['./modal-edita-nivel-acceso.component.scss']
})
export class ModalEditaNivelAccesoComponent {
  @Input() public sucursalSeleccionada!: bodyEditSucursal;
  @Output() public refreshSucursales: EventEmitter<void> = new EventEmitter<void>();
  public isVisible: boolean = false;
  public isLoading: boolean = false;
  public isSubmiting: boolean = false;
  public formEditarSucursal!: FormGroup;
  public rfcMap: Array<any> = [];
  public serienew: any;
  public listaRFCCorporativo: string[] = [];

  constructor(
    private configuracionService: ConfiguracionesService,
    private notificationService: NzNotificationService
  ) { }

  public showModal(): void {
    this.isVisible = true;
    this.isLoading = true;

    this.listarRFCsCorporativos();

    this.rfcMap = this.sucursalSeleccionada.rfc_map

    this.formEditarSucursal = new FormGroup({
      corporativo: new FormControl(localStorage.getItem("corporativo")),
      nombre: new FormControl(this.sucursalSeleccionada.nombre),
      hotel: new FormControl(this.sucursalSeleccionada.hotel),
      direccion: new FormControl(this.sucursalSeleccionada.direccion),
      cp: new FormControl(this.sucursalSeleccionada.cp),
      telefono: new FormControl(this.sucursalSeleccionada.telefono),
      centralizado: new FormControl(this.sucursalSeleccionada.centralizado),
      rfc: new FormControl(this.sucursalSeleccionada.rfc),
      rfc_map: new FormControl(this.rfcMap)
    });
  }

  public listarRFCsCorporativos(): void {
    while (this.listaRFCCorporativo.length) {
      this.listaRFCCorporativo.pop();
    }

    this.configuracionService.listarRFCCorporativo(localStorage.getItem("corporativo")).subscribe(
      response => {
        response.forEach(element => {
          this.listaRFCCorporativo.push(element);
        });
        this.isLoading = false;
      }
    );
  }

  public rfcSelected(): void {
    let aux: string[] = this.formEditarSucursal.value['rfc'];
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
      this.formEditarSucursal.controls['rfc_map'].setValue(this.rfcMap);
    } else {
      const arr3 = rfc_list.filter(value => !aux.includes(value));
      const x = this.rfcMap.findIndex(x => x.rfc === arr3[0]);
      this.rfcMap.splice(x, 1);
    }
  }

  public setFideicomiso = (event: any, i: number) => {
    this.rfcMap[i].fidecomiso = event;
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
    this.formEditarSucursal.markAllAsTouched();
    let sucursal: bodyEditSucursal = {
      centralizado: this.formEditarSucursal.value['centralizado'],
      corporativo: this.formEditarSucursal.value['corporativo'],
      cp: this.formEditarSucursal.value['cp'],
      direccion: this.formEditarSucursal.value['direccion'],
      hotel: this.formEditarSucursal.value['hotel'],
      rfc: this.formEditarSucursal.value['rfc'],
      rfc_map: this.formEditarSucursal.value['rfc_map'],
      telefono: this.formEditarSucursal.value['telefono'],
      nombre: this.formEditarSucursal.value['nombre']
    };

    if (this.formEditarSucursal.valid) {
      this.isSubmiting = true;
      this.configuracionService.editarSucursal(sucursal).subscribe(
        response => {
          this.isSubmiting = false;
          this.notificationService.success("¡Éxito!", `Se ha añadido la sucursal <strong>${this.formEditarSucursal.value['hotel']}</strong> correctamente.`);
          this.handleCancel();
          this.refreshSucursales.emit();
        }, (error: any) => {
          this.notificationService.error("¡Error!", "Ocurrió un error inesperado, por favor intente de nuevo más tarde.");
        }
      )
    } else {
      this.notificationService.error("¡Error!", "Por favor, complete los campos correctamente para continuar");
    }


  }

  public handleCancel(): void {
    this.isVisible = false;
  }
}
