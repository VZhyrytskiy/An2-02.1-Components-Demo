import { Component, Input, type OnInit } from '@angular/core';

@Component({
  selector: 'app-the-same',
  standalone: true,
  template: `
    <p>
      appTheSame is a directive and a component input at the same time.
      <br>
      They both take the same input and output it to the console.
      <br>
      Look in the console.
    </p>
  `
})
export class TheSameComponent implements OnInit {
  @Input({ required: true, alias: 'appTheSame'})
  input!: string;

  ngOnInit(): void {
    console.log(`Component: ${this.input}`);
  }

}
