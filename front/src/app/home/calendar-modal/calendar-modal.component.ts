import { Component, OnInit } from "@angular/core";
import { CalendarModule } from "ion2-calendar";
import { CalendarOptions } from "@fullcalendar/angular";

@Component({
  selector: "app-calendar-modal",
  templateUrl: "./calendar-modal.component.html",
  styleUrls: ["./calendar-modal.component.scss"],
})
export class CalendarModalComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  calendarOptions: CalendarOptions = {
    initialView: "dayGridWeek",
    dateClick: this.handleDateClick.bind(this),
    events: [
      { title: "event 1", date: "2020-11-19" },
      { title: "event 2", date: "2020-11-20" },
    ],
  };
  handleDateClick(arg) {
    alert("date click! " + arg.dateStr);
  }
}
