import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { GrzadkaComponent } from "./pages/grzadka/grzadka.component";
import { PageNotFoundComponent } from "./pages/page-not-found/page-not-found.component";
import { CameraComponent } from "./pages/camera/camera.component";
import { EditBarComponent } from "./components/edit-bar/edit-bar.component";
import { FormsModule } from "@angular/forms";
import { FieldsComponent } from "./pages/grzadka/fields/fields.component";
import { OffertComponent } from "./pages/home/offert/offert.component";
import { HowItWorksComponent } from "./pages/home/how-it-works/how-it-works.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    GrzadkaComponent,
    PageNotFoundComponent,
    CameraComponent,
    EditBarComponent,
    FieldsComponent,
    OffertComponent,
    HowItWorksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
