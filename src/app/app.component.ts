import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!-- nav -->
    <app-navbar></app-navbar>
    <div style="text-align:center" class="content">
      <img width="300" alt="Zdalny Ogrodek Logo" src="/assets/logo.png" />
    </div>

    <div class="flex-grow-1">
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
}
