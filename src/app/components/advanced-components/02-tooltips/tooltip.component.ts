import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';

import { TooltipContainerDirective } from './tooltip-container.directive';

@Component({
  template: `
    <div class="tooltip-container" [ngStyle]="{top: top}">
      <ng-content></ng-content>
    </div>
  `,
  styles: [  `
    .tooltip-container {
      background-color: black;
      color: #fff;
      display: inline-block;
      padding: 0.5em;
      position: absolute;
    }
  `
  ]
})
export class TooltipComponent implements OnInit {
  top: string;

  @ViewChild(TooltipContainerDirective, { read: ElementRef }) private tooltipContainer;

  constructor( @Inject('tooltipConfig') private config ) {
  }

  ngOnInit() {
    // For simplicity, we calculate only the top.
    // we can use the injector providers (config from directive) in our
    // tooltip component and calculate the tooltip position
    const { top } = this.config.host.getBoundingClientRect();
    const { height } = this.tooltipContainer.nativeElement.getBoundingClientRect();
    this.top = `${top - height}px`;
    console.log(this.top);
  }
}
