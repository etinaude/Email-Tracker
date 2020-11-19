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
    initialView: "dayGridMonth",
  };
}
