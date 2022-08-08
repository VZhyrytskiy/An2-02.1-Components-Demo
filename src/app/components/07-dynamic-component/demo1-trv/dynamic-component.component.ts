import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: `
        <div style="border: 2px dotted red; margin: 20px;">
          I am a Dynamic Component
        </div>
    `
})
export class DynamicComponent {}
