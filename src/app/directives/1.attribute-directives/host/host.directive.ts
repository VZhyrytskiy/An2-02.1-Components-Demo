import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]',
  standalone: true
})
export class HostDirective {

  @HostBinding('class')
  attrClass = 'headingClass';

  @HostListener('click')
  clicked(): void {
    console.log('click event on host element');
  }

  @HostListener('mouseenter', ['$event'])
  enter(event: Event): void {
    console.log('mouseenter event on host element');
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event): void {
    console.log('mouseleave event on host element');
  }

}
