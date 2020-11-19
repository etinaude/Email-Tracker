import { CalendarModalComponent } from "./calendar-modal/calendar-modal.component";
import { DepositModalComponent } from "./deposit-modal/deposit-modal.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";

import { HomePage } from "./home.page";
import { HomePageRoutingModule } from "./home-routing.module";
import { MessageComponentModule } from "../message/message.module";
import { CalendarModule } from "ion2-calendar";
import { MatIconModule } from "@angular/material/icon";
import { FullCalendarModule } from "@fullcalendar/angular";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ClipboardModule } from "@angular/cdk/clipboard";

FullCalendarModule.registerPlugins([dayGridPlugin, interactionPlugin]);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    CalendarModule,
    MatIconModule,
    FullCalendarModule,
    ClipboardModule,
  ],
  declarations: [HomePage, DepositModalComponent, CalendarModalComponent],
  entryComponents: [DepositModalComponent],
})
export class HomePageModule {}
