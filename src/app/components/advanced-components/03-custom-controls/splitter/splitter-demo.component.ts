import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-splitter-demo',
  template: `
    <input splitterControl [formControl]="control" class="form-control">
    {{content | json}}
  `,
})
export class SplitterDemoComponent implements OnInit{
  control = new FormControl(['a@a.com']);
  content: string;

  ngOnInit() {
    this.control.valueChanges.subscribe(value => this.content = value);
  }
}
