import { Directive, ElementRef, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.stop]'
})
export class ClickStopDirective {
  // tslint:disable-next-line:no-output-rename
  @Output('click.stop') clickStopEvent = new EventEmitter();

  constructor(
    private element: ElementRef
  ) { }

  @HostListener('click', ['$event'])
  onMouseEnter(event) {
      event.stopPropagation();
      this.clickStopEvent.emit(event);
  }

}
