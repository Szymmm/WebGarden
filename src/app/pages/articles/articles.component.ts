import { Component, OnInit } from "@angular/core";
import { OwlModule } from "ngx-owl-carousel";

@Component({
  selector: "app-articles",
  templateUrl: "./articles.component.html",
  styleUrls: ["./articles.component.scss"],
})
export class ArticlesComponent implements OnInit {
  mySlideOptions = {
    items: 1,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 10000,
    rewind: true,
  };

  constructor() {}

  ngOnInit(): void {}
}
