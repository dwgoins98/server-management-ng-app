import { Component, ElementRef, inject, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()', // event binding
  },
})
export class ControlComponent {
  label = input.required<string>();
  private element = inject(ElementRef);

  onClick() {
    console.log('Control clicked');
    console.log(this.element)
  }
}
