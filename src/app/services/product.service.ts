import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Product } from "src/app/models";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  constructor(private http: HttpClient) {}

  create(product: Product): Observable<any> {
    console.log(product);

    return this.http.post(`${environment.apiUrl}/products/create`, product);
  }
}
