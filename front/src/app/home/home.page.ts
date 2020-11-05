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
  datas: any;

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

  removeImage(id) {
    fetch(`${ip}remove/${id}`, {
      headers: new Headers({
        Accept: "application/json",
      }),
    });
    this.makeTable();
  }

  resetImage(id) {
    fetch(`${ip}reset/${id}`, {
      headers: new Headers({
        Accept: "application/json",
      }),
    });
    this.makeTable();
  }

  history(id) {
    this.http.get(`${ip}history/${id}`).subscribe((res) => {
      console.log("res", res);
      return res;
    });
  }

  newImage() {
    var d = new Date();
    var t = `${d.getDay()}/${d.getMonth()}/${d.getFullYear()} - ${d.getHours()}:${d.getMinutes()} `;
    var key = "";
    if ((<HTMLInputElement>document.getElementById("id")).value) {
      key = "id" + (<HTMLInputElement>document.getElementById("id")).value;
    } else {
      key = "id" + d.getTime();
    }
    var title = (<HTMLInputElement>document.getElementById("title")).value;
    var to = (<HTMLInputElement>document.getElementById("to")).value;
    var type = (<HTMLInputElement>document.getElementById("type")).value;

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

  makeTable() {}
}

/*
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

async function modal(id) {
  document.getElementById("modal").style.display = "block";
  var h = await history(id);
  var strr = "<h2>Open</h2>"
  h.forEach(e => {
    const d = new Date(parseInt(e["date"]) * 1000)
    strr += `${d.getDate()} - ${d.getMonth()} at ${d.getHours()}.${d.getMinutes()} <br>`
  })
  document.getElementById("content").innerHTML = strr;
}



async function makeTable() {
  sstr = `<table>
          <tr>
            <th>Control</th>
            <th>ID</th>
            <th>Date</th>
            <th>Title</th>
            <th>Open</th>
            <th>Sent To</th>
            <th>Type</th>
          </tr>
          <tbody>`;
  var count = 0;
  trackers = await getAll();
  console.log(trackers);
  trackers.forEach((e) => {
    console.log(e.opens);
    count += 1;
    sstr += `
    <tr class="table${count % 2}">
    <td class="c1"><button class="reset" onclick="resetImage('${e.key
      }')">Reset</button>
    <button class="reset" onclick="removeImage('${e.key}')">Remove</button></td>
    <td onclick="copy('${e.key}')">${e.key}</td>
    <td>${e.date}</td>
    <td  onclick="modal('${e.key}')">${e.title}</td>
    <td>${e.opens}</td>
    <td>${e.sent}</td>
    <td>${e.type}</td>
    </tr>
    `;
  });

  document.getElementById("table").innerHTML = "</tbody>" + sstr;
}



makeTable();
*/
