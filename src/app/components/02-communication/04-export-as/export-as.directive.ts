import { Directive } from '@angular/core';

@Directive({
  selector: '[appExportAs]',
  standalone: true,
  exportAs: 'axa'
})
export class ExportAsDirective {
  getValue(): number {
    return 100;
  }
}
