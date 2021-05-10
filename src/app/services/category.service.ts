import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl =
  "http://gaden-env.eba-sfbxh5bf.eu-central-1.elasticbeanstalk.com/api/categories";

@Injectable({
  providedIn: "root",
})
export class CategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
