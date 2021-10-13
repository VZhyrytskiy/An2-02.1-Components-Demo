import { Component} from '@angular/core';

@Component({
  selector: 'app-underline',
  template: `
    <p>This is a paragraph w/ <span underline1>underline</span> word.</p>
    <p>This is the next paragraph w/ <span underline2>underline</span> word.</p>
  `,
})
export class UnderllineComponent {
}
