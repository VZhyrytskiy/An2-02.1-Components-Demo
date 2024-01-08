import { Component } from '@angular/core';
import { OnDestroyRefComponent } from './on-destroy-ref/on-destroy-ref.component';
import { OnInitOnDestroyComponent } from './on-init-on-destroy/on-init-on-destroy.component';

@Component({
  selector: 'app-on-init-on-destroy-demo',
  standalone: true,
  template: `
    <section class="flex-container">
      <button class="btn btn-primary w-150" (click)="onToggle()">Toggle</button>
      @if (isDisplay) {
      <app-on-init-on-destroy />
      <app-on-destroy-ref />
      }
    </section>
  `,
  styleUrl: './on-init-on-destroy-demo.component.css',
  imports: [OnInitOnDestroyComponent, OnDestroyRefComponent],
})
export class OnInitOnDestroyDemoComponent {
  isDisplay = true;

  onToggle(): void {
    this.isDisplay = !this.isDisplay;
  }
}
