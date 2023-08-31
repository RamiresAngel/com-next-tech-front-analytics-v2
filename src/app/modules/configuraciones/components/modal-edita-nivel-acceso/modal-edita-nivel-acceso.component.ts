import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-edita-nivel-acceso',
  templateUrl: './modal-edita-nivel-acceso.component.html',
  styleUrls: ['./modal-edita-nivel-acceso.component.scss']
})
export class ModalEditaNivelAccesoComponent {
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
