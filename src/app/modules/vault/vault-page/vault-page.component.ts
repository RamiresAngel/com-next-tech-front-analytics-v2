import { Component, HostListener } from '@angular/core';
import { UtilsService } from 'src/app/shared/services/utils.service';

const mediaqueryList = window.matchMedia("(max-width: 991px)");

@Component({
  selector: 'app-vault-page',
  templateUrl: './vault-page.component.html',
  styleUrls: ['./vault-page.component.scss']
})
export class VaultPageComponent {
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