import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  standalone: true,
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrl: './shadow-dom-encapsulation.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomEncapsulationComponent {}
