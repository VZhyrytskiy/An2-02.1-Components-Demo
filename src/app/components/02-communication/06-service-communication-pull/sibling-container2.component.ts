import { Component } from '@angular/core';

@Component({
  selector: 'app-sibling-container2',
  template: `
    <div>
      <app-sibling3></app-sibling3>
      <app-sibling4></app-sibling4>
    </div>
  `
})
export class SiblingContainer2Component {}
