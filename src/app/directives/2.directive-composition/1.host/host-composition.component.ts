import { Component} from '@angular/core';
import { HostCompositionDirective } from './host-composition.directive';

@Component({
  selector: 'app-host-composition', // <-- This is a host.
  standalone: true,
  template: '<p>host-demo works!</p>',
  styles: [`
    :host.headingClass {
      border: 2px solid red;
      display: block;
      padding: 10px;
    }
  `],
  hostDirectives: [HostCompositionDirective]
})
export class HostCompositionComponent {
}
