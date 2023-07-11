import { Component } from '@angular/core';
import { Underline1Directive } from './underline-1.directive';
import { Underline2Directive } from './underline-2.directive';

@Component({
  selector: 'app-underline',
  standalone: true,
  template: `
    <p>This is a paragraph w/ <span underline1>underline</span> word.</p>
    <p>This is the next paragraph w/ <span underline2>underline</span> word.</p>
  `,
  imports: [Underline1Directive, Underline2Directive]
})
export class UnderlineComponent {
}
