import { Component } from "@angular/core";
import { User } from "src/app/models";
import { AccountService } from "src/app/services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
  open = false;
  user: User;

  constructor(public accountService: AccountService) {
    this.user = this.accountService.userValue;
    this.accountService.user.subscribe((x) => (this.user = x));
  }

  logout() {
    this.accountService.logout();
  }
}
