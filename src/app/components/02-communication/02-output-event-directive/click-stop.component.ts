import { Component } from '@angular/core';
import { ClickStopDirective } from './click-stop.directive';

@Component({
  selector: 'app-click-stop',
  standalone: true,
  template: `
    <div>
      <h5>output-demo works!</h5>
      <div (click)="fromParent()">
        <button class="btn btn-danger" (click)="fromChild()">Click me (Click)</button>
        <button class="btn btn-success" (click.stop)="fromChild()">Click me (Click.stop)</button>
      </div>
    </div>
  `,
  imports: [ClickStopDirective]
})
export class ClickStopComponent {

  fromParent(): void {
    console.log('from parent');
  }

  fromChild(): void {
    console.log('from child');
  }

}
