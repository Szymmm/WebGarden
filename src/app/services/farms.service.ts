import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class FarmsService {
  constructor(private http: HttpClient) {}

  getAllFarms(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/farms`);
  }
}
