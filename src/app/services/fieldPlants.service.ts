import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

const baseUrl =
  "http://gaden-env.eba-sfbxh5bf.eu-central-1.elasticbeanstalk.com/api/fieldPlants";

@Injectable({
  providedIn: "root",
})
export class FieldPlantsService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
