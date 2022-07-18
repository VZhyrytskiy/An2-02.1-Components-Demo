import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-dom-encapsulation',
  templateUrl: './shadow-dom-encapsulation.component.html',
  styleUrls: ['./shadow-dom-encapsulation.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ShadowDomEncapsulationComponent {}
