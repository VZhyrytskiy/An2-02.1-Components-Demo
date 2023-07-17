import { Component, Input, type OnDestroy } from '@angular/core';
import type { DynamicComponent } from './../../interfaces/dynamic-component.interface';

@Component({
  selector: 'app-component-2',
  standalone: true,
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements DynamicComponent, OnDestroy {
  @Input({ required: true }) data!: string;

  ngOnDestroy(): void {
    console.log('Component 2 is destroyed!!!');
  }

  notify(): void {
    console.log('Component 2 is loaded.');
  }
}
