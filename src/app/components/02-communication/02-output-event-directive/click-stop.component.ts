import { Component } from '@angular/core';
import { ClickStopDirective } from './click-stop.directive';

@Component({
  selector: 'app-click-stop',
  standalone: true,
  template: `
    <div>
      <h5>output-demo works!</h5>
      <div (click)="onParentClick()">
        <button class="btn btn-danger" (click)="onChildClick()">
          Click me (Click)
        </button>
        <button class="btn btn-success" (click.stop)="onChildClick()">
          Click me (Click.stop)
        </button>
      </div>
    </div>
  `,
  imports: [ClickStopDirective],
})
export class ClickStopComponent {
  onParentClick(): void {
    console.log('click event occurs on a parent div element');
  }

  onChildClick(): void {
    console.log('click event occurs on a child button element');
  }
}
