import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login-page',
  template: ``,
  styles: []
})
export class LoginPageComponent implements OnInit {
  constructor(public auth:AuthService, @Inject(DOCUMENT) public document:Document) { }

  ngOnInit(): void {
    this.auth.loginWithRedirect();
  }
}
