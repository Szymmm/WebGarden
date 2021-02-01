import { Component, OnInit } from "@angular/core";
import axios from "axios";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"],
})
export class ContactComponent implements OnInit {
  contactForm = {
    name: "Podaj imię",
    email: "Podaj e-mail na który odpowiemy",
    message: "Podaj treść wiadomości",
  };

  sendMessage() {
    axios.post(
      "https://b3f06hli2d.execute-api.eu-central-1.amazonaws.com/default/remoteGarden-lambda",
      {
        name: this.contactForm.name,
        email: this.contactForm.email,
        message: this.contactForm.message,
      }
    );
  }

  constructor() {}

  ngOnInit(): void {}
}
