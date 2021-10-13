import { Component} from '@angular/core';

@Component({
  selector: 'app-only-number',
  template: `
    <div>
      <label>Enter only numbers:</label>
      <input type="text" only-number [config]="{ color: 'yellow' }" />
    </div>
  `
})
export class OnlyNumberComponent {
}
