import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../../../services/category.service";
import { FarmsService } from "../../../services/farms.service";
import { ProductService } from "../../../services/product.service";
import { AlertService } from "src/app/services";
import { first } from "rxjs/operators";

@Component({
  selector: "app-product-form",
  templateUrl: "./product-form.component.html",
  styleUrls: ["./product-form.component.scss"],
})
export class ProductFormComponent implements OnInit {
  categories$;
  farms$;
  loading = false;

  constructor(
    categoryService: CategoryService,
    farmsService: FarmsService,
    private productService: ProductService,
    private alertService: AlertService,
    private router: Router
  ) {
    this.categories$ = categoryService.getAllCategories();
    this.farms$ = farmsService.getAllFarms();
  }

  save(product) {
    this.alertService.clear();

    this.productService
      .create(product)
      .pipe(first())
      .subscribe({
        next: () => {
          this.alertService.success("Product saved successfully", {
            keepAfterRouteChange: true,
          });
          this.router.navigate(["../admin/products"]);
        },
        error: (error) => {
          this.alertService.error(error);
          this.loading = false;
        },
      });
  }

  ngOnInit(): void {}
}
