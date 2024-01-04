import { Component } from '@angular/core';
import { ExportAsDirective } from './export-as.directive';

@Component({
  selector: 'app-export-as-demo',
  standalone: true,
  templateUrl: './export-as-demo.component.html',
  imports: [ExportAsDirective],
})
export class ExportAsDemoComponent {
  onClick(d: ExportAsDirective): void {
    console.log(d.getValue());
  }
}
