import { Component } from '@angular/core';

import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling1',
  template: `
    <p>
      sibling1
      <button class="btn btn-primary" (click)="onClick()">Pass Data</button>
    </p>
  `
})
export class Sibling1Component  {
  counter = 0;

  constructor(
    private communicatorService: CommunicatorService
  ) {}

  onClick() {
    this.counter++;
    this.communicatorService.publishData(`Data from sibling 1(${this.counter})`);
  }

}
