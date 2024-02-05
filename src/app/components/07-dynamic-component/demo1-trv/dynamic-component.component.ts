import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  standalone: true,
  template: `
        <div class="dyn-comp">
          I am a Dynamic Component
        </div>
    `,
  styles: `
    .dyn-comp {
      border: 2px dotted red;
      margin: 20px;
    }
  `
})
export class DynamicComponent {}
