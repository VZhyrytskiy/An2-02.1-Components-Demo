import { Component, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { DynamicComponent } from './../../interfaces/dynamic-component.interface';

@Component({
  selector: 'app-component-1',
  templateUrl: './component-1.component.html',
  styleUrls: ['./component-1.component.css']
})
export class Component1Component implements DynamicComponent, OnChanges, OnDestroy {
  private _data!: string;

  // works when there is a direct assignment
  @Input() set data(value: string) {
    this._data = value;
    console.log('setter:');
    console.log(value);
  }

  get data(): string {
    return this._data;
  }

  // doesn't work when there is a direct assignment
  ngOnChanges(ch: SimpleChanges) {
    console.log('ngOnChanges:');
    console.log(ch);
  }

  ngOnDestroy(): void {
    console.log('Component 1 is destroyed!!!');
  }

  notify(): void {
    console.log('Component 1 is loaded.');
  }
}
