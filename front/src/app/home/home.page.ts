import { Component } from "@angular/core";
import { DataService, Message } from "../services/data.service";
import { HttpClient } from "@angular/common/http";

var ip = "https://etvps.tk/tracker/api/v1/";
@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  constructor(private http: HttpClient) {
    this.getAll();
  }
  datas = [];

  refresh(ev) {
    setTimeout(() => {
      ev.detail.complete();
    }, 3000);
  }

  getAll() {
    this.http.get(`${ip}all`).subscribe((res) => {
      console.log("res", res);
      this.datas = res;
    });
  }
}
