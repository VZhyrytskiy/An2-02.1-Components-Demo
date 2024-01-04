import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling6',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <p>
      sibling2
      <br />
      Data from sibling 1: {{ this.communicatorService.channelRSig() }}
    </p>
  `,
})
export class Sibling6Component {
  communicatorService = inject(CommunicatorService<string>);
}
