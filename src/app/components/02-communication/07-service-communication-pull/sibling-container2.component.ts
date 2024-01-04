import { Component } from '@angular/core';
import { Sibling3Component } from './sibling3.component';
import { Sibling4Component } from './sibling4.component';

@Component({
  selector: 'app-sibling-container2',
  standalone: true,
  imports: [Sibling3Component, Sibling4Component],
  template: `
    <div class="sibling-container">
      <app-sibling3></app-sibling3>
      <app-sibling4></app-sibling4>
    </div>
  `,
  styles: `
  .sibling-container {
      display: flex;
      gap: 2rem;
      border: 1px solid red;
      width: 50%;
      padding: 2rem;
    }
  `,
})
export class SiblingContainer2Component {}
