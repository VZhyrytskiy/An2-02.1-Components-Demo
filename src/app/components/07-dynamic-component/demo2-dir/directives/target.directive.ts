import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTarget]'
})
export class TargetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
