import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[click.stop]'
})
export class ClickStopDirective {
  // tslint:disable-next-line:no-output-rename
  @Output('click.stop') clickStopEvent = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(event) {
      event.stopPropagation();
      this.clickStopEvent.emit(event);
  }

}
