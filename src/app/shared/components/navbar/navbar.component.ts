import { Component, Inject, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { AuthService, User } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public overlaySidebar = document.createElement("div");
  public isCollapsedMobile!: boolean;
  public userDataAuth0: User | null | undefined;

  constructor(
    private utilsService:UtilsService,
    public router:Router,
    public auth:AuthService,
    @Inject(DOCUMENT) public documento:Document
  ) {
    this.utilsService.collapsedSidebarPrincipalMobile.subscribe(
      response => {
        this.isCollapsedMobile = response;
      }
    )

    this.overlaySidebar.addEventListener("click", () => {
      this.toggleOverlaySidebar();
    });

    this.auth.user$.subscribe(
      response => {
        this.userDataAuth0 = response;        
      }
    )
  }

  ngOnInit(): void {
    this.overlaySidebar.setAttribute("id", "overlay-sidebar");
  }

  public toggleOverlaySidebar() : void {
    if (this.isCollapsedMobile) {
      document.body.removeChild(this.overlaySidebar);
      this.isCollapsedMobile = false;
      this.utilsService.collapsedSidebarPrincipalMobile.emit(this.isCollapsedMobile);
    } else {
      document.body.appendChild(this.overlaySidebar);
      this.isCollapsedMobile = true;
      this.utilsService.collapsedSidebarPrincipalMobile.emit(this.isCollapsedMobile);
    }
  }
}
