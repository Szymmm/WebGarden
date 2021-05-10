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
import { RegisterComponent } from "./account/register.component";
import { ProductsComponent } from "./pages/products/products.component";
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./pages/check-out/check-out.component";
import { OrderSuccessComponent } from "./pages/order-success/order-success.component";
import { AdminProductsComponent } from "./pages/admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./pages/admin/admin-orders/admin-orders.component";
import { MyOrdersComponent } from "./pages/my-orders/my-orders.component";
import { ProductFormComponent } from "./pages/admin/product-form/product-form.component";

const accountModule = () =>
  import("./account/account.module").then((x) => x.AccountModule);

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

  { path: "account/login", component: LoginComponent },
  { path: "account/register", component: RegisterComponent },

  {
    path: "grzadka",
    component: GrzadkaComponent,
  },
  {
    path: "camera",
    component: CameraComponent,
    canActivate: [AuthGuard],
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
  {
    path: "products",
    component: ProductsComponent,
  },
  {
    path: "shopping-cart",
    component: ShoppingCartComponent,
  },
  {
    path: "check-out",
    component: CheckOutComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "order-success",
    component: OrderSuccessComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "my/orders",
    component: MyOrdersComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "page-not-found",
    component: PageNotFoundComponent,
  },

  {
    path: "admin/products",
    component: AdminProductsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/products/new",
    component: ProductFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: "admin/orders",
    component: AdminOrdersComponent,
    canActivate: [AuthGuard],
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
