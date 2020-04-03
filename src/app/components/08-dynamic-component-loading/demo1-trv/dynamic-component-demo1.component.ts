import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';

import { DynamicComponent } from './dynamic-component.component';

@Component({
  selector: 'app-dynamic-component-demo1',
  templateUrl: './dynamic-component-demo1.component.html',
  styleUrls: ['./dynamic-component-demo1.component.css']
})
export class DynamicComponentDemo1Component implements AfterViewInit {
  @ViewChild('vcr', { read: ViewContainerRef }) vcr: ViewContainerRef;

  constructor(private r: ComponentFactoryResolver) {}

  ngAfterViewInit() {
    const factory = this.r.resolveComponentFactory(DynamicComponent);
    this.vcr.createComponent(factory);
  }
}
