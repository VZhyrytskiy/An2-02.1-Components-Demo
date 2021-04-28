import { Directive } from '@angular/core';

@Directive({
  selector: '[appExportAs]',
  exportAs: 'axa'
})
export class ExportAsDirective {
  getValue(): number {
    return 100;
  }
}
