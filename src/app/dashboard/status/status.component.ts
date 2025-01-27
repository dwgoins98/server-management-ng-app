import { Component, effect, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css'],
})
export class StatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'online' | 'offline' | 'unknown'>('online');
  private interval?: NodeJS.Timeout;

  constructor() {
    effect(() => {
    console.log(this.currentStatus())
    })
  }

  /* Crashed the browser every test run */
  // constructor() {
  // setTimeout(() => {
  //   const rnd = Math.random();
  //   if (rnd < 0.5) {
  //   this.currentStatus = 'online';
  //   } else if (rnd >= 0.5 && rnd < 0.9) {
  //   this.currentStatus = 'offline';
  //   } else {
  //   this.currentStatus = 'unknown';
  //   }
  // }, 5000);
  // }

  ngOnInit() {
    this.interval = setTimeout(() => {
      const rnd = Math.random();
      if (rnd < 0.5) {
        this.currentStatus.set('online');
      } else if (rnd >= 0.5 && rnd < 0.9) {
        this.currentStatus.set('offline');
      } else {
        this.currentStatus.set('unknown');
      }
    }, 5000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.interval);
  }
}
