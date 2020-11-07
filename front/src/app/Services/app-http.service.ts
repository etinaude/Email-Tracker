import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AppHttpService {
  constructor(private http: HttpClient) {}

  getHeaders() {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    return headers;
  }

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, data: string) {
    return this.http.post(url, data);
  }
}
