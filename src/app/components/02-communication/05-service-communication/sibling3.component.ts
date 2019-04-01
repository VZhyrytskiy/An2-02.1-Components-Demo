import { Component } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-sibling3',
  template: `
    <p>
      sibling3
      <button class="btn btn-primary" (click)="onClick()">Pass Data</button>
    </p>
  `
})
export class Sibling3Component {
  counter = 0;

  constructor(private dataService: DataService<string>) {}

  onClick() {
    this.counter++;
    this.dataService.setData(`Data from sibling 1(${this.counter})`);
  }
}
