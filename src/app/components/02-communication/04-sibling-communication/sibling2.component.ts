import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling2',
  template: `
    <p>
      sibling2
      <br>
      Data from sibling 1: {{input}}
    </p>
  `
})
export class Sibling2Component implements OnInit, OnDestroy {
  input: string;

  private sub: Subscription;

  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit() {
    this.sub = this.communicatorService.channel$.subscribe(
      data => this.input = data
    );
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
