import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTarget]',
  standalone: true
})
export class TargetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
