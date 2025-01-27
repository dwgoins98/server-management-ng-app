import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket/ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-support-tickets',
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './support-tickets.component.html',
  styleUrl: './support-tickets.component.css',
})
export class SupportTicketsComponent {
  tickets: Ticket[] = [];

  onAdd(ticketData: { title: string; ticketText: string }) {
    this.tickets.push({
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.ticketText,
      status: 'open',
    });
  }

  onComplete(ticketId: string) {
    console.log('Completing ticket with ID:', ticketId);
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === ticketId) {
        console.log('Ticket found:', ticket);
        return { ...ticket, status: 'closed' };
      }
      return ticket;
    });
  }
}
