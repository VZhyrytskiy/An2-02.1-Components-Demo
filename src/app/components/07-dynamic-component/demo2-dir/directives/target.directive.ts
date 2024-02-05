import { Directive, ViewContainerRef, inject } from '@angular/core';

@Directive({
  selector: '[appTarget]',
  standalone: true,
})
export class TargetDirective {
  viewContainerRef = inject(ViewContainerRef);
}
