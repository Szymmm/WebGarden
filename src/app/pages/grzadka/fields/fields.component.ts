import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
})
export class FieldsComponent implements OnInit {
  constructor() {}

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
}
