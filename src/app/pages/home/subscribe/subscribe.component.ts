import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.scss"],
})
export class SubscribeComponent implements OnInit {
  contactEmail = "";

  sendMessage() {
    axios.post(
      "https://b3f06hli2d.execute-api.eu-central-1.amazonaws.com/default/remoteGarden-lambda",
      {
        name: "EmptyName",
        email: this.contactEmail,
        message: "Użytkownik zostawił do siebie adres e-mail!",
      }
    );
  }
  constructor() {}

  ngOnInit(): void {}
}
