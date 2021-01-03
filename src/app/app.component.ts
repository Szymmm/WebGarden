import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-navbar></app-navbar>
    <div style="text-align:center" class="content">
      <img width="300" alt="Zdalny Ogrodek Logo" src="/assets/logo.png" />
    </div>

    <div class="flex-grow-1">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [],
})
export class AppComponent {
  title = "WebGarden";
}
