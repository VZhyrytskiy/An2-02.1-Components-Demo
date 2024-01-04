import { Directive } from '@angular/core';

@Directive({
  selector: '[appExportAs]',
  standalone: true,
  exportAs: 'referenceToDirectiveInstance' // <= outside directive name
})
export class ExportAsDirective {
  // directive data
  private data = 100;

  // directive api
  getValue(): number {
    return this.data;
  }
}
