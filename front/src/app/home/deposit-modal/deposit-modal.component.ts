import { HomePage } from "./../home.page";
import { Component, OnInit } from "@angular/core";

var ip = "https://etvps.tk/tracker/api/v1/";

@Component({
  selector: "app-deposit-modal",
  templateUrl: "./deposit-modal.component.html",
  styleUrls: ["./deposit-modal.component.scss"],
})
export class DepositModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  newImage() {
    var d = new Date();
    var t = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()} `;
    var key = "";
    if ((<HTMLInputElement>document.getElementById("ID")).value) {
      key = "id" + (<HTMLInputElement>document.getElementById("ID")).value;
    } else {
      key = "id" + d.getTime();
    }
    var title = (<HTMLInputElement>document.getElementById("Title")).value;
    var to = (<HTMLInputElement>document.getElementById("To")).value;
    var type = (<HTMLInputElement>document.getElementById("Type")).value;

    var str = JSON.stringify({
      key: key,
      title: title,
      date: t,
      opens: 0,
      sent: to,
      type: type,
    });

    fetch(`${ip}submit`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },

      body: `0=${str}`,
    });
    this.makeTable();
  }

  makeTable() {
    window.location.reload();
  }
}
