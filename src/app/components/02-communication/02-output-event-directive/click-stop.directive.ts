import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[click.stop]'
})
export class ClickStopDirective {
  @Output('click.stop') clickStopEvent = new EventEmitter();

  @HostListener('click', ['$event']) onClick(event: any) {
    event.stopPropagation();
    this.clickStopEvent.emit(event);
  }
}
