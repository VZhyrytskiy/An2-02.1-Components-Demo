import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  @HostBinding('class')
  attrClass = 'headingClass';

  @HostListener('click')
  clicked() {
    console.log('click event on host element');
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    console.log('mouseenter event on host element');
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    console.log('mouseleave event on host element');
  }

}
