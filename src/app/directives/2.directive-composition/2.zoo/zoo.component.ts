import { Component} from '@angular/core';
import { BoldItalicDirective } from './zoo.directives';

@Component({
  selector: 'app-zoo', // <-- This is a host.
  standalone: true,
  template: '<p>One day I went to the zoo to look at the animals.</p>',
  hostDirectives: [BoldItalicDirective]
})
export class ZooComponent {
}
