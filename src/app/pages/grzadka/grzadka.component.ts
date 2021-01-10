import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-grzadka",
  templateUrl: "./grzadka.component.html",
  styleUrls: ["./grzadka.component.scss"],
})
export class GrzadkaComponent implements OnInit {
  ngOnInit(): void {}

  selected = null;

  fields = [
    {
      name: "Pusta nazwa",
      plant: "empty",
    },
    {
      name: "Moje ogórki",
      plant: "truskawki",
    },
    {
      name: "Rukolla",
      plant: "rukola",
    },
    {
      name: "Coś jeszcze",
      plant: "jarmuż",
    },
  ];

  save(event) {
    console.log("Saved", event);
  }
  constructor() {}
}
