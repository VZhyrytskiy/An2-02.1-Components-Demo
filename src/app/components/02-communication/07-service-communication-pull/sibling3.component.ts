import { Component, inject } from '@angular/core';

import { DataService } from './data.service';

@Component({
  selector: 'app-sibling3',
  standalone: true,
  template: `
    <p>
      sibling3
      <button class="btn btn-primary" (click)="onClick()">Pass Data</button>
    </p>
  `,
})
export class Sibling3Component {
  private dataService = inject(DataService<string>);
  private counter = 0;

  onClick(): void {
    this.counter++;
    this.dataService.setData(`Data from sibling 1(${this.counter})`);
  }
}
