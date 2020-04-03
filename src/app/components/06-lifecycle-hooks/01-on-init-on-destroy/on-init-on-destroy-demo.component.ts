import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-on-destroy-demo',
  template: `
    <section>
      <button class="btn btn-primary" (click)="onToggle()">Toggle</button>
      <app-on-init-on-destroy *ngIf="isDisplay"></app-on-init-on-destroy>
    </section>
  `
})
export class OnInitOnDestroyDemoComponent {
  isDisplay = true;

  onToggle(): void {
    this.isDisplay = !this.isDisplay;
  }
}
