import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grzadka",
  templateUrl: "./grzadka.component.html",
  styleUrls: ["./grzadka.component.scss"],
})
export class GrzadkaComponent implements OnInit {
  ngOnInit(): void {}

  selected = null;

  field = {
    name: "Pusta nazwa",
    plant: "empty",
  };

  save(event) {
    console.log("Saved", event);
  }
  constructor() {}
}
