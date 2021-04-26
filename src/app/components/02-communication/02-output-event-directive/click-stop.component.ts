import { Component } from '@angular/core';

@Component({
  selector: 'app-click-stop',
  template: `
    <div>
      <h5>output-demo works!</h5>
      <div (click)="fromParent()">
        <button class="btn btn-danger" (click)="fromChild()">Click me (Click)</button>
        <button class="btn btn-success" (click.stop)="fromChild()">Click me (Click.stop)</button>
      </div>
    </div>
  `
})
export class ClickStopComponent {

  fromParent(): void {
    console.log('from parent');
  }

  fromChild(): void {
    console.log('from child');
  }

}
