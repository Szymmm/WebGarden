import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { GrzadkaComponent } from "./pages/grzadka/grzadka.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CameraComponent } from "./pages/camera/camera.component";
import { ArticlesComponent } from "./pages/articles/articles.component";
import { PricesComponent } from "./pages/prices/prices.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "grzadka",
    component: GrzadkaComponent,
  },
  {
    path: "camera",
    component: CameraComponent,
  },
  {
    path: "prices",
    component: PricesComponent,
  },
  {
    path: "articles",
    component: ArticlesComponent,
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "page-not-found",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
