import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzNotificationService } from 'ng-zorro-antd/notification';

@Component({
  selector: 'app-genera-reporte',
  templateUrl: './genera-reporte.component.html',
  styleUrls: ['./genera-reporte.component.scss']
})
export class GeneraReporteComponent {
  @Output() nombre = new EventEmitter();
  public form_reporte: FormGroup = new FormGroup({});
  public isVisible = false;

  constructor(
    private notificacion: NzNotificationService
  ) {
    this.form_reporte = new FormGroup({
      Reporte_nombre: new FormControl('', [Validators.required])
    });
  }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    if (this.form_reporte.value.Reporte_nombre == '') {
      this.notificacion.error('Error', 'El nombre del reporte es obligatorio');
      return;
    }
    this.isVisible = false;
    this.nombre.emit(this.form_reporte.value.Reporte_nombre);
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

}
