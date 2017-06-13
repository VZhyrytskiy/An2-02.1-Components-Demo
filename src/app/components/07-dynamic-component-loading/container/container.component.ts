import { Component, AfterViewInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { TargetDirective } from './../target.directive';
import { Component1Component } from './../component-1/component-1.component';
import { Component2Component } from './../component-2/component-2.component';

@Component({
  selector: 'app-dynamic-component-loading',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements AfterViewInit {
  @ViewChild(TargetDirective) target: TargetDirective;
  currentComponent = Component1Component;
  currentComponentType = 'Component1';

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngAfterViewInit() {
     this.loadComponent(this.currentComponent);
  }

  switchView() {
    if (this.currentComponentType === 'Component1') {
      this.currentComponent = Component2Component;
      this.currentComponentType = 'Component2';
    }
    else {
      this.currentComponent = Component1Component;
      this.currentComponentType = 'Component1';
    }
    this.loadComponent(this.currentComponent);
  }

  private loadComponent(component) {
    const componentFactory = this.componentFactoryResolver
      .resolveComponentFactory(component);

    const viewContainerRef = this.target.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
  }

}
