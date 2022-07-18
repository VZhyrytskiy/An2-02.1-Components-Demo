import { Component} from '@angular/core';

@Component({
  selector: 'app-host', // <-- This is a host.
  template: '<p>host-demo works!</p>',
  styles: [`
    :host.headingClass {
      border: 2px solid red;
      display: block;
      padding: 10px;
    }
  `],
})
export class HostComponent {
}
