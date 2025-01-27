import {
  Component,
  ElementRef,
  model,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../ui/button/button.component';
import { ControlComponent } from '../../../ui/control/control.component';

@Component({
  selector: 'app-new-ticket',
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  add = output<{ title: string; ticketText: string }>();
  enteredTitle = model<string>('');
  enteredTicketText = model<string>('');

  // @ViewChild('form') form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  onSubmit() {
    this.add.emit({ title: this.enteredTitle(), ticketText: this.enteredTicketText() });
    // this.form().nativeElement.reset();
    this.enteredTitle.set('');
    this.enteredTicketText.set('');
  }
  
}
