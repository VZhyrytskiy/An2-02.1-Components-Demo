import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling5',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      sibling1
      <button class="btn btn-primary" (click)="onClick()">Pass Data</button>
    </p>
  `,
})
export class Sibling5Component {
  private communicatorService = inject(CommunicatorService<string>);
  private counter = 0;

  onClick(): void {
    this.counter++;
    this.communicatorService.publish(`Data from sibling 1(${this.counter})`);
  }
}
