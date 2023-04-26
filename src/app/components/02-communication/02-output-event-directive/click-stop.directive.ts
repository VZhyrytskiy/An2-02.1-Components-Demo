import { Directive, Output, EventEmitter, HostListener } from '@angular/core';

@Directive({
  selector: '[click.stop]',
  standalone: true
})
export class ClickStopDirective {
  @Output('click.stop') clickStopEvent = new EventEmitter();

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    event.stopPropagation();
    this.clickStopEvent.emit(event);
  }
}
