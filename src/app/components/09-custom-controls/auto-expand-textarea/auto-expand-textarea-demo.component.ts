import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-auto-expand-textarea-demo',
  template: `
    <app-auto-expand-textarea [formControl]="control"></app-auto-expand-textarea>
    <button (click)="control.disable()">Disable</button>
    <button (click)="control.enable()">Enable</button>
  `
})
export class AutoExpandTextareaDemoComponent {
  control = new FormControl();

}
