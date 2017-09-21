import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-on-init-on-destroy-demo',
  template: `
    <section>
      <button (click)="toggle()">Toggle</button>
      <app-on-init-on-destroy *ngIf="display"></app-on-init-on-destroy>
    </section>
  `
})
export class OnInitOnDestroyDemoComponent {
  display = true;

  toggle(): void {
    this.display = !this.display;
  }
}
