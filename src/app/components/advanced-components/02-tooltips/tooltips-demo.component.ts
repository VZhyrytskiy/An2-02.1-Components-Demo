import { Component } from '@angular/core';

import { TooltipContentComponent } from './components/content/tooltip-content.component';

@Component({
  selector: 'app-tooltips-demo',
  templateUrl: './tooltips-demo.component.html'
})
export class TooltipsDemoComponent {
  component = TooltipContentComponent;
}
