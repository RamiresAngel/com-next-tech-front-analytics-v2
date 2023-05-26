import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loaderVisibilitySubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public showLoader() : void {
    this.loaderVisibilitySubject.next(true);
  }

  public hideLoader() : void {
    this.loaderVisibilitySubject.next(false);
  }

  public getLoaderVisibility() : BehaviorSubject<boolean> {
    return this.loaderVisibilitySubject;
  }
}
