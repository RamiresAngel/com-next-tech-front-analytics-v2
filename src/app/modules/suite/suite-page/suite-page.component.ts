import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService, User } from '@auth0/auth0-angular';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { AppsData, UserData } from 'src/app/shared/entities/userData.model';
import { AutenticacionService } from 'src/app/shared/services/autenticacion.service';
import { LoaderService } from 'src/app/shared/services/loader.service';
import { ObtenerMenusService } from 'src/app/shared/services/obtener-menus.service';
import SwiperCore, { Navigation, Scrollbar, A11y, SwiperOptions, Swiper } from 'swiper';
Swiper.use([Navigation, Scrollbar, A11y]);

@Component({
  selector: 'app-suite-page',
  templateUrl: './suite-page.component.html',
  styleUrls: ['./suite-page.component.scss'],
})
export class SuitePageComponent implements AfterViewInit {
  public userData!: UserData;
  public appsData!: Array<AppsData>;
  public isLoading!: boolean;
  public userDataAuth0: User | null | undefined;
  public config: SwiperOptions = {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: { draggable: false },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 15,
      },
    },
  };

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) public document: Document,
    private autenticacion: AutenticacionService,
    private router: Router,
    private loaderService: LoaderService,
    private notificationService: NzNotificationService,
    private menuService: ObtenerMenusService
  ) {
    this.loaderService.getLoaderVisibility().subscribe(response => { this.isLoading = response });
  }

  ngAfterViewInit(): void {
    this.auth.idTokenClaims$.subscribe(
      response => {
        const token:any = response?.__raw;
        
        this.autenticacion.getUserData({ corporativo: 'marriott', email: response?.email }, response?.__raw).subscribe(
          response => {
            localStorage.setItem("dataUser", JSON.stringify(response));
            localStorage.setItem("token", token);
            this.userData = response;
            const arrayObjetos: Array<AppsData> = Object.values(response.apps).map(objeto => objeto);
            this.appsData = arrayObjetos;
            this.notificationService.success('', `<h6 class="mb-0 fw-normal">¡Bienvenido/a ${this.userData.nombre} ${this.userData.apellido}!</h6>`, { nzPlacement: "topLeft" })
          }
        );
      }
    );

    this.auth.user$.subscribe(
      response => {
        this.userDataAuth0 = response;        
      }
    );
  }

  public goToView(modulo: string, permiso:boolean, contratado:boolean, mensaje:string): void {
    if (permiso === false || contratado === false) {
      this.notificationService.error("¡Error!", mensaje);
    } else {
      localStorage.setItem("modulo", modulo);
      const token:any = localStorage.getItem("token");
      
      this.menuService.getMenu({ corporativo: 'marriott', modulo: modulo }, token).subscribe(
        response => {
          localStorage.setItem("menus", JSON.stringify(response));
          this.router.navigate(['/', modulo]);
        }, (error: any) => {
          if (error.status === 401) {
            localStorage.clear();
            this.autenticacion.cerrarSesion();
          }
        }
      )
    }

  }
}
