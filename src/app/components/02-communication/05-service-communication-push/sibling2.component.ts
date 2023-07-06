import { Component, type OnInit, type OnDestroy } from '@angular/core';
import { type Subscription } from 'rxjs';

import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling2',
  standalone: true,
  template: `
    <p>
      sibling2
      <br>
      Data from sibling 1: {{input}}
    </p>
  `
})
export class Sibling2Component implements OnInit, OnDestroy {
  input!: string;

  private sub!: Subscription;

  constructor(private communicatorService: CommunicatorService) {}

  ngOnInit(): void {
    this.sub = this.communicatorService.channel$.subscribe(
      data => this.input = data
    );
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
