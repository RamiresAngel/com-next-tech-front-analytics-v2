import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-editar-contribuyente',
  templateUrl: './modal-editar-contribuyente.component.html',
  styleUrls: ['./modal-editar-contribuyente.component.scss']
})
export class ModalEditarContribuyenteComponent {
  public isVisibleMiddle:boolean = false;

  public showModalMiddle(): void {
    this.isVisibleMiddle = true;
  }

  public handleOkMiddle(): void {
    console.log('click ok');
    this.isVisibleMiddle = false;
  }

  public handleCancelMiddle(): void {
    this.isVisibleMiddle = false;
  }
}
