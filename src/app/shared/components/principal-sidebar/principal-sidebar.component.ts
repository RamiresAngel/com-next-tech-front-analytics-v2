import { Component, HostListener, OnInit } from '@angular/core';
import { MenuEntity } from '../../entities/menu.model';
import { UtilsService } from '../../services/utils.service';
import { AUTO_STYLE, animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';

const DEFAULT_DURATION = 200;
const mediaqueryList = window.matchMedia("(max-width: 991px)");

@Component({
  selector: 'app-principal-sidebar',
  templateUrl: './principal-sidebar.component.html',
  styleUrls: ['./principal-sidebar.component.scss'],
  animations: [
    trigger('collapse', [
      state('true', style({ height: AUTO_STYLE, visibility: AUTO_STYLE, paddingTop: '0.25rem', paddingBottom: '0.25rem' })),
      state('false', style({ height: '0', visibility: 'hidden', padding: '0' })),
      transition('false => true', animate(DEFAULT_DURATION + 'ms ease-in')),
      transition('true => false', animate(DEFAULT_DURATION + 'ms ease-out'))
    ])
  ]
})
export class PrincipalSidebarComponent implements OnInit {
  public isCollapsed: boolean = false;
  public isCollapsedMobile: boolean = false;
  public menusStorage: any = localStorage.getItem("menus");
  public moduloActual: any = localStorage.getItem("modulo");
  public menusParse: any;
  public menuOptions!: MenuEntity;
  public optionsStatus: Array<any> = [{ status: false, id: 1 }];

  constructor(
    private utilsService: UtilsService,
    private router:Router
  ) {
    this.menusParse = JSON.parse(this.menusStorage);
    this.menusParse.forEach((element:any) => {
      if(element.componentes.length >= 1) {
        element.status = false;
      }
    });
    this.menuOptions = this.menusParse;

    this.utilsService.collapsedSidebarPrincipalMobile.subscribe(
      response => {
        this.isCollapsedMobile = response;
      }
    );
  }

  ngOnInit(): void {
    const sidebar = document.getElementById("sidebar-principal");
    if(mediaqueryList.matches) {
      sidebar?.classList.add("responsive-sidebar");
      this.isCollapsed = false;
      this.utilsService.collapsedSidebarPrincipal.emit(this.isCollapsed);     
    } else {
      sidebar?.classList.remove("responsive-sidebar");
    }
  }

  public overlapedSidebar(idOption: number) : void {
    if (this.isCollapsed === true) {
      const optionOver = this.optionsStatus.filter(x => x.id === idOption);
      optionOver[0].status = true;
    }
  }

  public leaveOverlapedSidebar(idOption: number) : void {
    if (this.isCollapsed === true) {
      const optionOver = this.optionsStatus.filter(x => x.id === idOption);
      optionOver[0].status = false;
    }
  }

  public toggleSidebar(): void {
    this.isCollapsed = !this.isCollapsed;
    this.utilsService.collapsedSidebarPrincipal.emit(this.isCollapsed);
  }

  public goToPage(href:string, typeOption:string, idOption:number): void {
    const overlaySidebar:any = document.getElementById("overlay-sidebar");
    // const allOptions = document.get
    if(mediaqueryList.matches) {
      this.utilsService.collapsedSidebarPrincipalMobile.emit(false);
      document.body.removeChild(overlaySidebar);  
    }
    const temp = href.replace('#!','');
    if (temp === '') {
      this.router.navigateByUrl(`/${this.moduloActual}`);
    } else {
      this.router.navigateByUrl(`/${this.moduloActual}/${temp}`);
    }
  }

  @HostListener('window:resize')
  public onResize() : void {
    const sidebar = document.getElementById("sidebar-principal");
    if(mediaqueryList.matches) {
      sidebar?.classList.add("responsive-sidebar");
      this.isCollapsed = false;
      this.utilsService.collapsedSidebarPrincipal.emit(this.isCollapsed);     
    } else {
      sidebar?.classList.remove("responsive-sidebar");
    }
  }
}
