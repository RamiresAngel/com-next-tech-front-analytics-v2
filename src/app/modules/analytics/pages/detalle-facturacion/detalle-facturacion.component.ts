import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/entities';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-detalle-facturacion',
  templateUrl: './detalle-facturacion.component.html',
  styleUrls: ['./detalle-facturacion.component.scss']
})
export class DetalleFacturacionComponent implements OnInit {
  @ViewChild('containerTableau', { static: true }) containerTableau!: ElementRef<HTMLDivElement>;
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser: UserData;
  public token_tableau: string = '';

  constructor(
    private _analytics: AnalyticsService
  ) { this.dataUser = JSON.parse(this.dataUserStorage); }

  ngOnInit(): void {
    this._analytics.getTableauToken(this.dataUser.email, this.dataUser.corporativo).subscribe(
      response => {
        this.containerTableau.nativeElement.innerHTML = `
          <tableau-viz id='tableau-viz'
          src='https://10az.online.tableau.com/t/ntintelligence/views/DetalleFacturacin_16811697569240/DetalleFacturacinDashboard'
          style="width: 100%; height: 100%;" token="${response}"></tableau-viz>
        `;
      }
    )
  }
}
