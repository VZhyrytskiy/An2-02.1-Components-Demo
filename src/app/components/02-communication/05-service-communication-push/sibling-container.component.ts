import { Component } from '@angular/core';
import { Sibling1Component } from './sibling1.component';
import { Sibling2Component } from './sibling2.component';

@Component({
  selector: 'app-sibling-container',
  standalone: true,
  templateUrl: './sibling-container.component.html',
  imports: [Sibling1Component, Sibling2Component]
})
export class SiblingContainerComponent {}
