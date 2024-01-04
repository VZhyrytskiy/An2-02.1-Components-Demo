import { Component, inject } from '@angular/core';

import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling1',
  standalone: true,
  template: `
    <p>
      sibling1 component
      <button class="btn btn-primary" (click)="onClick()">Pass Data</button>
    </p>
  `
})
export class Sibling1Component  {
  private communicatorService = inject(CommunicatorService<string>);
  private counter = 0;

  onClick(): void {
    this.counter++;
    this.communicatorService.publish(`Data from sibling 1(${this.counter})`);
  }
}
