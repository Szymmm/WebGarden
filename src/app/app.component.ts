import { Component } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { User } from "src/app/models/user";

@Component({
  selector: "app-root",
  template: `
    <!-- nav -->
    <nav class="navbar navbar-expand navbar-dark bg-dark" *ngIf="user">
      <div class="navbar-nav">
        <a
          class="nav-item nav-link"
          routerLink="/"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          >Home</a
        >
        <a
          class="nav-item nav-link"
          routerLink="/users"
          routerLinkActive="active"
          >Users</a
        >
        <a class="nav-item nav-link" (click)="logout()">Logout</a>
      </div>
    </nav>

    <!-- main app container -->
    <div class="app-container" [ngClass]="{ 'bg-light': user }">
      <alert></alert>
      <router-outlet></router-outlet>
    </div>

    <div class="text-center text-black pb-5" data-bg-color="#FFF">
      <small>© 2021 Zdalny Ogródek, All Rights Reserved</small>
    </div>
  `,
  styles: [
    `
      .pb-5 {
        margin: 50px 0 0 0;
      }
    `,
  ],
})
export class AppComponent {
  title = "WebGarden";
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
