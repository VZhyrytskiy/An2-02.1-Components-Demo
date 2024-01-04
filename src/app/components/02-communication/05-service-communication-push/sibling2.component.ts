import { Component, type OnInit, type OnDestroy, inject } from '@angular/core';
import { type Subscription } from 'rxjs';

import { CommunicatorService } from './communicator.service';

@Component({
  selector: 'app-sibling2',
  standalone: true,
  template: `
    <p>
      sibling2 component
      <br />
      Data from sibling 1: {{ content }}
    </p>
  `,
})
export class Sibling2Component implements OnInit, OnDestroy {
  // dependencies
  private communicatorService = inject(CommunicatorService<string>);

  // public properties
  content!: string;

  // private properties
  private sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.communicatorService.channel$.subscribe(
      (data) => (this.content = data)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
