import { Component, HostListener } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

const mediaqueryList = window.matchMedia("(max-width: 991px)");

@Component({
  selector: 'app-configuraciones-page',
  templateUrl: './configuraciones-page.component.html',
  styleUrls: ['./configuraciones-page.component.scss']
})
export class ConfiguracionesPageComponent {
  public isCollapsed: boolean = false;

  constructor(private utilsService: UtilsService) {
    this.utilsService.collapsedSidebarPrincipal.subscribe(
      response => {
        this.isCollapsed = response;
      }
    )
  }

  @HostListener('window:resize')
  onResize() {
    const sidebar = document.getElementById("wrapper-principal");
    if (mediaqueryList.matches) {
      sidebar?.classList.add("responsive-wrapper");
    } else {
      sidebar?.classList.remove("responsive-wrapper");
    }
  }
}
