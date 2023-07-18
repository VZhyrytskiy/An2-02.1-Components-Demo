import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { OnInitOnDestroyComponent } from './on-init-on-destroy/on-init-on-destroy.component';
import { OnDestroyRefComponent } from './on-destroy-ref/on-destroy-ref.component';

@Component({
  selector: 'app-on-init-on-destroy-demo',
  standalone: true,
  template: `
    <section>
      <button class="btn btn-primary" (click)="onToggle()">Toggle</button>
      <app-on-init-on-destroy *ngIf="isDisplay"></app-on-init-on-destroy>
      <app-on-destroy-ref *ngIf="isDisplay"></app-on-destroy-ref>
    </section>
  `,
  imports: [NgIf, OnInitOnDestroyComponent, OnDestroyRefComponent],
})
export class OnInitOnDestroyDemoComponent {
  isDisplay = true;

  onToggle(): void {
    this.isDisplay = !this.isDisplay;
  }
}
