import { AfterViewInit, Component } from '@angular/core';
import { UserData } from 'src/app/shared/entities';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-detalle-faltante',
  templateUrl: './detalle-faltante.component.html',
  styleUrls: ['./detalle-faltante.component.scss']
})
export class DetalleFaltanteComponent implements AfterViewInit {
  public dataUserStorage: any = localStorage.getItem("dataUser");
  public dataUser: UserData;
  public token_tableau: string = '';

  constructor(
    private _analytics: AnalyticsService
  ) { this.dataUser = JSON.parse(this.dataUserStorage); }

  ngAfterViewInit(): void {
    const containerTableau: any = document.getElementById("container-tableau");
    this._analytics.getTableauToken(this.dataUser.email, this.dataUser.corporativo).subscribe(
      response => {
        containerTableau.innerHTML = `
        <tableau-viz id='tableau-viz'
        src='https://10az.online.tableau.com/t/ntintelligence/views/Procesodedescargadelainformacin/INFORMACINDECFDISFALTANTES'
        style="width: 100%; height: 100%;" token="${response}"></tableau-viz>
      `;
      })
  }


}
