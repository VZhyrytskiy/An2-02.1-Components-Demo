import { Component } from '@angular/core';
import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling6',
  standalone: true,
  template: `
    <p>
      sibling2
      <br>
      Data from sibling 1: {{this.communicatorService.channelRSig()}}
    </p>
  `
})
export class Sibling6Component {
  constructor(public communicatorService: CommunicatorService) {}
}
