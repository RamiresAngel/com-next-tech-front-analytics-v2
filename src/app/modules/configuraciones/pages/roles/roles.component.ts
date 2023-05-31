import { Component, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ListaRoles } from 'src/app/shared/entities/configuraciones.model';
import { UserData } from 'src/app/shared/entities/userData.model';
import { ConfiguracionesService } from 'src/app/shared/services/configuraciones.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.scss']
})
export class RolesComponent implements OnInit {
  public userDataStorage: any = localStorage.getItem("dataUser");
  public userData!: UserData;
  public rowsTable: Array<ListaRoles> = [];
  public dataTable: Array<any> = [];
  public isLoading: boolean = false;
  @ViewChild(DatatableComponent) table!: DatatableComponent;

  constructor(
    private configuracionesService: ConfiguracionesService
  ) {
    this.userData = JSON.parse(this.userDataStorage);
  }

  ngOnInit(): void {
    this.getRoles();
  }

  public getRoles(): void {
    this.isLoading = true;
    
    while (this.dataTable.length) {
      this.dataTable.pop();
    }

    this.configuracionesService.listarRoles(this.userData.corporativo).subscribe(
      response => {
        response.forEach(element => {
          this.rowsTable.push(
            {
              corporativo: element.corporativo,
              funcionalidades: element.funcionalidades,
              mostrar: element.mostrar,
              nombre_rol: element.nombre_rol
            }
          );
        });
        
        this.dataTable = this.rowsTable;
        this.isLoading = false;
      }
    )
  }

  public updateFilter(event:any) {
    const val = event.target.value.toLowerCase();

    // filter our data
    const temp = this.rowsTable.filter(function (d) {
      return d.nombre_rol.toLowerCase().indexOf(val) !== -1 || !val;
    });

    // update the rows
    this.dataTable = temp;
    
    // Whenever the filter changes, always go back to the first page
    this.table.offset = 0;
  }

  columns = [
    { prop: 'nombre_rol' },
    { prop: 'funcionalidades' }
  ];
}

