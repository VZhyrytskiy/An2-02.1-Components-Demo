import { Component, Input, OnDestroy } from '@angular/core';
import { DynamicComponent } from './../../interfaces/dynamic-component.interface';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements DynamicComponent, OnDestroy {
  @Input() data: string;

  ngOnDestroy() {
    console.log('Component 1 is destroyed!!!');
  }

  notify() {
    console.log('Component 1 is loaded.');
  }
}
