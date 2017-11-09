import { Component, OnInit, ViewChild, ElementRef, Inject } from '@angular/core';


@Component({
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css']
})
export class TooltipComponent implements OnInit {
  @ViewChild('cRef', { read: ElementRef }) private tooltipContainer;

  top: string;

  constructor( @Inject('tooltipConfig') private config ) {
  }

  ngOnInit() {
    const { top } = this.config.host.getBoundingClientRect();
    this.top = `${top}`;
  }
}
