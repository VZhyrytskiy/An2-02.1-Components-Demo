import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[target]'
})
export class TargetDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
