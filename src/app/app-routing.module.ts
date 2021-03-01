import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { GrzadkaComponent } from "./pages/grzadka/grzadka.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CameraComponent } from "./pages/camera/camera.component";
import { ArticlesComponent } from "./pages/articles/articles.component";
import { PricesComponent } from "./pages/prices/prices.component";
import { FarmsComponent } from "./pages/farms/farms.component";
import { AuthGuard } from "src/app/helpers";
import { LoginComponent } from "./account/login.component";

const accountModule = () =>
  import("./account/account.module").then((x) => x.AccountModule);
const usersModule = () =>
  import("./users/users.module").then((x) => x.UsersModule);

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  { path: "login", component: LoginComponent },
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
    path: "farms",
    component: FarmsComponent,
  },
  {
    path: "articles",
    component: ArticlesComponent,
  },
  { path: "users", loadChildren: usersModule, canActivate: [AuthGuard] },
  { path: "account", loadChildren: accountModule },
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
