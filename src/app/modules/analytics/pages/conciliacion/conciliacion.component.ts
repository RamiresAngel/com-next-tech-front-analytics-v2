import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserData } from 'src/app/shared/entities';
import { AnalyticsService } from 'src/app/shared/services/analytics.service';

@Component({
  selector: 'app-conciliacion',
  templateUrl: './conciliacion.component.html',
  styleUrls: ['./conciliacion.component.scss']
})
export class ConciliacionComponent implements OnInit {
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
          src='https://10az.online.tableau.com/t/ntintelligence/views/Conciliacion_16812313715920/ConciliacinDashboard'
          style="width: 100%; height: 100%;" token="${response}"></tableau-viz>
        `;
      }
    )
  }

}
