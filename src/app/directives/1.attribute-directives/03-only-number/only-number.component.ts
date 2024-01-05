import { Component } from '@angular/core';
import { OnlyNumberDirective } from './only-number.directive';

@Component({
  selector: 'app-only-number',
  standalone: true,
  template: `
    <div>
      <label>Enter only numbers:</label>
      <input type="text" only-number [config]="config" />
    </div>
  `,
  imports: [OnlyNumberDirective],
})
export class OnlyNumberComponent {
  config = { color: 'yellow' };
}
