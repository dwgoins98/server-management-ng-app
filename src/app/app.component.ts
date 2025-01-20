import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentStatus = 'online';

  dummyTrafficData: { id: string, value: number }[] = [
    { id: 'd1', value: Math.floor(Math.random() * 900) + 100 },
    { id: 'd2', value: Math.floor(Math.random() * 900) + 100 },
    { id: 'd3', value: Math.floor(Math.random() * 900) + 100 },
    { id: 'd4', value: Math.floor(Math.random() * 900) + 100 },
    { id: 'd5', value: Math.floor(Math.random() * 900) + 100 },
    { id: 'd6', value: Math.floor(Math.random() * 900) + 100 },
    { id: 'd7', value: Math.floor(Math.random() * 900) + 100 }
  ];

  maxTrafficValue = Math.max(...this.dummyTrafficData.map(data => data.value));
}
