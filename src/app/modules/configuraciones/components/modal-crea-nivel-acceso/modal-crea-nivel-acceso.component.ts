import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-crea-nivel-acceso',
  templateUrl: './modal-crea-nivel-acceso.component.html',
  styleUrls: ['./modal-crea-nivel-acceso.component.scss']
})
export class ModalCreaNivelAccesoComponent {
  public isVisible = false;

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('handleOk');
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }
}
