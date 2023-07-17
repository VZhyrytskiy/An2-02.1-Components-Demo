import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[underline1]',
  standalone: true
})
export class Underline1Directive {

  // use ElementRef
  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event): void {
    // use native element
    this.el.nativeElement.style.textDecoration = 'underline';
  }

  @HostListener('mouseleave', ['$event.target'])
  onMouseLeave(target: HTMLElement): void {
    // use target
    target.style.textDecoration = 'none';
  }

}
