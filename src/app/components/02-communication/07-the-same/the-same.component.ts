import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-same',
  template: `
    <p>
      appTheSame is a directive and a component input at the same time.
      <br>
      Look in the console.
    </p>
  `
})
export class TheSameComponent implements OnInit {
  @Input('appTheSame')
  input!: string;

  ngOnInit(): void {
    console.log(`Component: ${this.input}`);
  }

}
