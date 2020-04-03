import { Component, Input, OnDestroy } from '@angular/core';
import { DynamicComponent } from './../../interfaces/dynamic-component.interface';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements DynamicComponent, OnDestroy {
  @Input() data: string;

  ngOnDestroy() {
    console.log('Component 2 is destroyed!!!');
  }

  notify() {
    console.log('Component 2 is loaded.');
  }
}
