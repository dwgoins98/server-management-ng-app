import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { StatusComponent } from './dashboard/status/status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { SupportTicketsComponent } from './dashboard/support-tickets/support-tickets.component';
import { DashboardItemComponent } from "./dashboard/dashboard-item/dashboard-item.component";

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    StatusComponent,
    TrafficComponent,
    SupportTicketsComponent,
    DashboardItemComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
