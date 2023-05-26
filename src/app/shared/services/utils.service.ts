import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public collapsedSidebarPrincipal:EventEmitter<boolean> = new EventEmitter<boolean>();
  public collapsedSidebarPrincipalMobile:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }
}
