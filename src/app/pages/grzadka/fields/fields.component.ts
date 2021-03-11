import { Component, OnInit } from "@angular/core";
import { FieldPlantsService } from "../../../services/fieldPlants.service";

@Component({
  selector: "app-fields",
  templateUrl: "./fields.component.html",
  styleUrls: ["./fields.component.scss"],
})
export class FieldsComponent implements OnInit {
  fieldPlants: any;
  currentIndex = -1;
  currentFieldPlant = null;

  ngOnInit(): void {
    this.retrieveFieldPlants();
  }

  constructor(private fieldPlantsService: FieldPlantsService) {}

  retrieveFieldPlants(): void {
    this.fieldPlantsService.getAll().subscribe(
      (data) => {
        this.fieldPlants = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  refreshList(): void {
    this.retrieveFieldPlants();
    this.currentFieldPlant = null;
    this.currentIndex = -1;
  }

  setActiveFieldPlant(tutorial, index): void {
    this.currentFieldPlant = tutorial;
    this.currentIndex = index;
  }

  selected = null;

  fields = [
    {
      name: "Pusta nazwa",
      plant: "pusta",
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
