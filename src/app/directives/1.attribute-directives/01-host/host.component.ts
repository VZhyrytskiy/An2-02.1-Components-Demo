import { Component} from '@angular/core';

@Component({
  selector: 'app-host', // <= This is a host.
  standalone: true,
  template: '<p>host-demo works!</p>',
  styles: `
    :host.headingClass {
      border: 2px solid red;
      display: block;
      padding: 10px;
      cursor: pointer;
    }
  `,
})
export class HostComponent {
}
