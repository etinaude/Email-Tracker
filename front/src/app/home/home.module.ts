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

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MessageComponentModule,
    HomePageRoutingModule,
    CalendarModule,
    MatIconModule,
  ],
  declarations: [HomePage, DepositModalComponent],
  entryComponents: [DepositModalComponent],
})
export class HomePageModule {}
