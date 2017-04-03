import { Component } from '@angular/core';

@Component({
  selector: 'app-unless-directive-demo',
  template: `
    <p *viUnless="condition">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    <button class="btn btn-primary" (click)="onClick()">Toogle Text</button>
    <p>condition: {{condition}}</p>
  `
})
export class UnlessComponent  {
  condition = false;

  onClick() {
    this.condition = !this.condition;
  }

}
