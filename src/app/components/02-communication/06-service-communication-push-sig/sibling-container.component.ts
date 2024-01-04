import { Component } from '@angular/core';
import { Sibling5Component } from './sibling5.component';
import { Sibling6Component } from './sibling6.component';

@Component({
  selector: 'app-sibling-container3',
  standalone: true,
  templateUrl: './sibling-container.component.html',
  imports: [Sibling5Component, Sibling6Component],
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
export class SiblingContainer3Component {}
