import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GrzadkaComponent } from "./pages/grzadka/grzadka.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CameraComponent } from "./pages/camera/camera.component";
import { FormsModule } from "@angular/forms";
import { FieldsComponent } from "./pages/grzadka/fields/fields.component";
import { OffertComponent } from "./pages/home/offert/offert.component";
import { HowItWorksComponent } from "./pages/home/how-it-works/how-it-works.component";
import { SubscribeComponent } from "./pages/home/subscribe/subscribe.component";
import { ContactComponent } from "./pages/home/contact/contact.component";
import { ArticlesComponent } from "./pages/articles/articles.component";
import { OwlModule } from "ngx-owl-carousel";
import { PricesComponent } from "./pages/prices/prices.component";
import { AlertComponent } from "./components/alert.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { JwtInterceptor } from "src/app/helpers/jwt.interceptor";
import { ErrorInterceptor } from "src/app/helpers/error.interceptor";
import { ProductsComponent } from "./pages/products/products.component";
import { ShoppingCartComponent } from "./pages/shopping-cart/shopping-cart.component";
import { CheckOutComponent } from "./pages/check-out/check-out.component";
import { OrderSuccessComponent } from "./pages/order-success/order-success.component";
import { MyOrdersComponent } from "./pages/my-orders/my-orders.component";
import { AdminProductsComponent } from "./pages/admin/admin-products/admin-products.component";
import { AdminOrdersComponent } from "./pages/admin/admin-orders/admin-orders.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AuthGuard } from "./services/auth-guard.service";
import { AccountService } from "./services/account.service";
import { ProductFormComponent } from './pages/admin/product-form/product-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GrzadkaComponent,
    PageNotFoundComponent,
    CameraComponent,
    FieldsComponent,
    OffertComponent,
    HowItWorksComponent,
    SubscribeComponent,
    ContactComponent,
    ArticlesComponent,
    PricesComponent,
    AlertComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    OwlModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    AuthGuard,
    AccountService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
